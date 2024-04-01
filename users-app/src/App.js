import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import axios from "axios";

function App() {
  const [user, setUser]=useState("");

  const getData = async() =>{

    try {
      //using axios instead of fetch
      const {data} = await axios("https://randomuser.me/api/");
      console.log(data.results[0]);
      setUser(data.results[0]);

      // const res = await fetch("https://randomuser.me/api/");
      // const data = await res.json();
      // setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }

    //changed to async above
    //fetch("https://randomuser.me/api/").then((res)=>res.json()).then((data)=>setUser(data.results[0]));
  };

  useEffect(() => {
    //? ComponentDidMount
 getData();
    
  }, []);
 
  return (
    <div className="app">
      <Header user={user}/>
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
