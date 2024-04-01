import { useEffect, useRef } from "react";


function App() {

  const inputEl = useRef(null)

  //handleSubmit Function
  const handleSubmit=()=>{
  const el = document.querySelector(".search");
  inputEl.current.style.padding = "100px";
  }

  // useEffect(() => {
  //  inputEl.current.style.padding = "50px";
  // }, [])
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" className="search" ref={inputEl  }/>
        <button className="btnStyle">Click</button>
      </form>
    </div>
  );
}

export default App;
