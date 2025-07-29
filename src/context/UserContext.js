import React, { createContext } from 'react'
export const dataContext = createContext()

function UserContext({children}) {
    function speak (text){
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "ur-GB";
        window.speechSynthesis.speak(text_speak)
    }
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.onresult=(e)=>{
      let currentindex = e.resultIndex
      let transcript = e.results[currentindex][0].transcript
        console.log(transcript)
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