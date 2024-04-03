import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Personnel = () => {
  //setup the state
  const [people, setPeople]=useState([]);
  const navigate=useNavigate();
  //getPeople function fetches the object from the API
  const getPeople =() => {
    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((data)=>setPeople(data.data))
    .catch((err) => console.log(err));
  }
  //cehck that data arrived by logging people to the console
  console.log(people);
//useEffect hook to call setPoeple();
useEffect(() => {
  getPeople();
},[]);

  return (
    <div className="personnelWrapper">
      <h1>Personnel List</h1>
      <div className="personnelCardWrapper">
        {people.map((person) => { 
          const {id, first_name, last_name, email, avatar}=person
          return (
            <div key={id} className="personnelCard">
                <img src={avatar} alt="img" />
                <p>{first_name} {last_name}</p>
                <button className="detailsBtn" onClick={()=>navigate(`/personnel/${id}`)}>Details</button>
            </div>
          )
         })}
      </div>
    </div>
  )
}

export default Personnel