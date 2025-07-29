import "./App.css"
import ai from "../src/assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { useContext } from "react";
import { dataContext } from "./context/UserContext";


function App() {
  let {recognition} =useContext(dataContext)
  return (
    <div className="main">
      <img src={ai} alt="" id="image"/>
      <span>I'm Shifra Your Advanced Assistant</span>
      <button onClick={()=>{
      recognition.start()
      }}>Click here <CiMicrophoneOn /></button>
    </div>
  );
}

export default App;
