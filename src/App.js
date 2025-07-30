import "./App.css"
import ai from "../src/assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { useContext } from "react";
import { dataContext } from "./context/UserContext";


function App() {
  let {recognition,speaking,setSpeaking} =useContext(dataContext)
  return (
    <div className="main">
      <img src={ai} alt="" id="image"/>
      <span>I'm Shifra Your Advanced Assistant</span>
      {!speaking?
      <button onClick={()=>{
      setSpeaking(true)
      recognition.start()
      }}>Click here <CiMicrophoneOn /></button>: 
      <div>
      
      </div>
      }
    </div>
  );
}

export default App;
