import { useEffect } from "react";


function App() {
  //handleSubmit Function
  const handleSubmit=()=>{
  const el = document.querySelector(".search");
  el.style.padding = "50px";
  }

  useEffect(() => {
    handleSubmit();
  }, [])
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <input type="text" className="search"/>
        <button className="btnStyle">Click</button>
      </form>
    </div>
  );
}

export default App;
