
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are an expert in Termux and Linux command-line interfaces. 
Your task is to generate a single, executable Termux command or a short shell script based on the user's request. 
Provide ONLY the command or script itself. 
Do not include any explanation, introductory text, or markdown formatting like backticks (\`\`\`).
For example, if the user asks 'how to install git', your output must be only 'pkg install git'.
If the user asks 'list all files including hidden ones', your output must be only 'ls -a'.
If a multi-line script is necessary, provide just the script.`;

export const generateTermuxCommand = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2, // Lower temperature for more deterministic, command-like output
      },
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating command with Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
