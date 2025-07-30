import React, { createContext } from 'react'
import main from '../gemini';
export const dataContext = createContext()

function UserContext({ children }) {
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "ur-GB";
    window.speechSynthesis.speak(text_speak)
  }

  async function airesponse(prompt){
    let text = await main(prompt)
    speak(text)
  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    let currentindex = e.resultIndex
    let transcript = e.results[currentindex][0].transcript
    console.log(transcript)
    airesponse(transcript)
  }
  let data = {
    speak,
    recognition
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