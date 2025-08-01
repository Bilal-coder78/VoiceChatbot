import "./App.css"
import ai from "../src/assets/ai.png"
import speakimg from "../src/assets/speak.gif"
import aivoice from "../src/assets/aiVoice.gif"
import { CiMicrophoneOn } from "react-icons/ci";
import { useContext } from "react";
import { dataContext } from "./context/UserContext";


function App() {
  let {recognition,speaking,setSpeaking,prompt,response} =useContext(dataContext)
  return (
    <div className="main">
      <img src={ai} alt="" id="image"/>
      <span>I'm Shifra Your Advanced Assistant</span>
      {!speaking?
      <button onClick={()=>{
      setSpeaking(true)
      recognition.start()
      }}>Click here <CiMicrophoneOn /></button>: 
      <div className="responsive">
      {!response?<img src={speakimg} alt="" className="Speak"/>:
      <img src={aivoice} alt="" className="aivoice"/>
      }
      <p>{prompt}</p>
      </div>
      }
    </div>
  );
}

export default App;
