
import { GoogleGenAI, Modality } from "@google/genai";
import type { GenerativePart } from '@google/genai';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePassportPhoto = async (imagePart: GenerativePart): Promise<string | null> => {
  try {
    const model = 'gemini-2.5-flash-image';
    const textPart = {
      text: 'Convert this to a passport size photo. The person should be wearing a black suit, be front-facing, and have a light grey background. The output should be in ultra HD 4K quality.',
    };

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [imagePart, textPart],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating passport photo:", error);
    throw new Error("Failed to generate photo. The AI model may be overloaded or the image could not be processed.");
  }
};
