import { useState } from "react";
import Effect from "./Effect";



function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <button className="btnStyle" onClick={()=> setShow(!show)}>{show ? "GOODBYE": "HULLO"}</button>
      {show && <Effect />}
    </div>
  );
}

export default App;
