import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Main = ({items, handleAddItems, onDeleteItem, handleDoneItem})=>{
    const [sortBy, setSortBy]=useState("input");

    let sortedItems;
if(sortBy === "input"){
    sortedItems = items;
}
if (sortBy === "packed"){
    sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
}
    return (<div>
        <Form handleAddItems={handleAddItems}/>
        <div>
        <select className="selectStyle" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="packed">Sort by Packed</option>
        </select>
    </div>
        <ul className="mainWrapper">{sortedItems.map((item)=>(
    <List item={item} key={item.id} onDeleteItem={onDeleteItem} handleDoneItem={handleDoneItem}/>
    ))}
    </ul>;
   
    </div>);
};

export default Main;