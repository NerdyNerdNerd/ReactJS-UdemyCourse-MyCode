import { useState } from "react";

const Form=({handleAddItems})=>{
    const [product,setProduct]=useState("");
    const [quantity,setQuantity] = useState(1);
   
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(product){
        const newTodo={
            id:Date.now(),
            packed:false,
            product,
            quantity,
        };
        console.log(newTodo);
        handleAddItems(newTodo);
        setProduct("");
        setQuantity(1);
        }   
    };
    return (
    <form className="formStyle" onSubmit={handleSubmit}>
        <select className="selectStyle" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
            {[...Array(20)].map((_,index)=>(
                <option value={index+1} key={index+1}>{index+1}</option>
            ))}
        </select>
        <input className="inputStyle" type="text" placeholder="Enter a name" value={product} onChange={(e)=>setProduct(e.target.value)} />
        <button className="btnAdd">Add</button>
    </form>
    );
};

export default Form;