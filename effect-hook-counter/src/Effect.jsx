import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.log("Mounting + Updating");
    //     setTimeout(()=>{
    //         alert("Data Fetched")
    //     }, 1000)
    // },[count])

    const fetchData = () => {
        console.log("Clean-up");
    };

    useEffect(() => {
     console.log("Mounting");
     const timerId=setInterval(fetchData,1000);

     return () => {
        clearInterval(timerId);
        console.log("Unmounting");
     }
    }, [count])

    console.log("Render");
  return (
    <div className='divStyle'>
        <h3>{count}</h3>
        <button className='btnStyle' onClick={() => setCount(count=> count+1)}>Click</button>
    </div>
  )
}

export default Effect