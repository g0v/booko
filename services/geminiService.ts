import { GoogleGenAI } from '@google/genai';

export const getGeminiInsight = async (query: string) => {
  if (!process.env.API_KEY) {
    throw new Error('API key not configured');
  }

  // Always use process.env.API_KEY directly and use the named parameter.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Call generateContent with both the model name and prompt.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `身為一位台灣現代史專家，請針對以下主題提供深入且淺顯易懂的見解或讀書建議：${query}`,
    config: {
      temperature: 0.7,
      // Removed maxOutputTokens to follow the recommendation of avoiding it if not required to prevent blocked responses.
    },
  });

  // Access the .text property directly to get the generated content string.
  return response.text;
};
