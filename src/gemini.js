import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = "AIzaSyDm-d_4jdW-SB5P4CpRSPfUDJebimYWtb8";

const ai = new GoogleGenerativeAI(apikey);
const model = ai.getGenerativeModel({
    model: "gemini-2.5-pro",
})

const generationConfig={
    temperature : 1,
    topP: 0.95,
    topK : 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
}

async function main(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history:[

    ],
  })
  const result = await chatSession.sendMessage(prompt)
  return result.response.text()
}

export default main;