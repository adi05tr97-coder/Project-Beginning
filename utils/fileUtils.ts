
import type { GenerativePart } from '@google/genai';

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // result is a data URL like `data:image/jpeg;base64,.....`
      // We only need the part after the comma
      const encoded = (reader.result as string).split(',')[1];
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
}

export async function fileToGenerativePart(file: File): Promise<GenerativePart> {
  const base64Data = await fileToBase64(file);
  return {
    inlineData: {
      data: base64Data,
      mimeType: file.type,
    },
  };
}
