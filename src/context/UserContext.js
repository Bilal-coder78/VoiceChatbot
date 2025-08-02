import React, { createContext, useState } from 'react'
import main from '../gemini';
export const dataContext = createContext()

function UserContext({ children }) {
  const [speaking, setSpeaking] = useState(false)
  const [prompt, setprompt] = useState("Listening...")
  const [response, setresponse] = useState(false)

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak)
  }

  async function airesponse(prompt) {
    let text = await main(prompt)
    let newtext = text.split("**") && text.split("*") && text.replace("google", "Bilal khan") && text.replace("Google", "Bilal khan")
    setprompt(newtext)
    speak(newtext)
    setresponse(true)
    setTimeout(() => {
      setSpeaking(false)
    }, 5000);
  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    let currentindex = e.resultIndex
    let transcript = e.results[currentindex][0].transcript
    setprompt(transcript)
    airesponse(transcript)
    Takecommand(transcript.toLowerCase())
  }

  function Takecommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/")
      speak("opening youtube")
      setprompt("opening youtube")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/")
      speak("opening instagram")
      setprompt("opening instagram")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else{
      airesponse(command)
    }
  }
  let data = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setprompt,
    response,
    setresponse,

  }
  return (
    <>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </>
  )
}

export default UserContext