import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure this key is guarded. 
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a witty prompt for the game using Gemini.
 * Demonstrates correct usage of the GenerateContent API.
 */
export const generateGamePrompt = async (topic: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key missing for Gemini Service");
      return "Gemini API Key missing. Imagine a funny prompt here!";
    }

    const modelId = 'gemini-2.5-flash'; // Optimized for speed/text
    
    const prompt = `
      You are the host of a party game called Phekoo. 
      Generate a short, funny, and slightly controversial question about "${topic}" 
      that players would have to lie about. 
      Keep it under 20 words.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        maxOutputTokens: 100,
        temperature: 0.9,
        thinkingConfig: { thinkingBudget: 0 },
      }
    });

    return response.text || "Could not generate a prompt.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI is feeling shy. Try again later.";
  }
};