
import { GoogleGenAI, Type } from "@google/genai";
import { DiscoverySuggestion } from "../types";

export class GeminiService {
  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async planTrip(query: string) {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: `You are Victor, the Chief Concierge of Travel Victor, headquartered in Srinagar, Kashmir. 
        Your tone is impeccable, sophisticated, and highly knowledgeable. 
        Create a "Masterpiece Itinerary" for: "${query}". 
        Focus on ultra-exclusive, private experiences that cannot be found on public travel sites.
        IMPORTANT: All currency references, price estimations, or budgets MUST be in Indian Rupees (INR) using the ₹ symbol.`,
        config: {
          thinkingConfig: { thinkingBudget: 4000 },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              destination: { type: Type.STRING },
              duration: { type: Type.STRING },
              itinerary: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    day: { type: Type.INTEGER },
                    activity: { type: Type.STRING },
                    details: { type: Type.STRING }
                  },
                  required: ["day", "activity", "details"]
                }
              },
              recommendations: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["destination", "duration", "itinerary", "recommendations"]
          }
        }
      });

      return JSON.parse(response.text || '{}');
    } catch (e) {
      console.error("Gemini Error:", e);
      throw new Error("Victor is currently refining a bespoke request for another client. Please retry in a moment.");
    }
  }

  async getPersonalizedSuggestions(interests: string[]): Promise<DiscoverySuggestion[]> {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on these elite interests: [${interests.join(', ')}], suggest 3 ultra-luxury destinations worldwide. 
        For each, explain why it fits these specific interests in an elegant, persuasive tone. 
        Any mention of costs or exclusivity should be framed in the context of high-end travel curated from our Srinagar office. 
        All currency mentions must be in INR (₹).
        Return an array of objects.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                country: { type: Type.STRING },
                reason: { type: Type.STRING },
                category: { type: Type.STRING },
                vibe: { type: Type.STRING }
              },
              required: ["name", "country", "reason", "category", "vibe"]
            }
          }
        }
      });

      return JSON.parse(response.text || '[]');
    } catch (e) {
      console.error("Discovery Error:", e);
      return [];
    }
  }
}

export const geminiService = new GeminiService();
