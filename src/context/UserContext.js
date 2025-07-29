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
    let data = {
        speak
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