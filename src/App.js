import "./App.css"
import ai from "../src/assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";


function App() {
  return (
    <div className="main">
      <img src={ai} alt="" id="image"/>
      <span>I'm Shifra Your Advanced Assistant</span>
      <button>Click here <CiMicrophoneOn /></button>
    </div>
  );
}

export default App;
