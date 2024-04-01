import { useEffect } from "react";


function App() {
  //handleSubmit Function
  const handleSubmit=()=>{
  const el = document.querySelector(".search");
  console.log(el);
  }

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

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
