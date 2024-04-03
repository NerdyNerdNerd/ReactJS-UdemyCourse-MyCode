//import { useParams, useLocation } from "react-router-dom"
//import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



const PersonnelDetail = () => {
  const [person, setPerson]=useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 // const { state :person} = useLocation();
  //const { state } = useLocation();
  // console.log(id);
  // console.log(state);
//  const getPerson=() => {
//   fetch(`https://reqres.in/api/users/${id}`).then((res)=>res.json())
//   .then((data)=>setPerson(data.data))
//   .catch((err)=>console.log(err));
//  }

 useEffect(() => {
  fetch(`https://reqres.in/api/users/${id}`).then((res)=>res.json())
  .then((data)=>setPerson(data.data))
  .catch((err)=>console.log(err));
 }, [])


  return (
    <div className="personWrapper">
      <h3> { person?.first_name } { person?.last_name } </h3>
      <img src= {person?.avatar} alt="avatar" />
      <p> { person?.email }</p>
      <div className="btnWrapper">
        <button onClick={ () => navigate("/") } >Home</button>
        <button onClick={ () => navigate(-1) } >Go Back</button>
        </div>
    </div>
  );
};

export default PersonnelDetail