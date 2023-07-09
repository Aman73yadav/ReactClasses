import { useEffect, useState } from "react"

const SideEffect=()=>{
    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)
    let [count3,setCount3]=useState(0)
    useEffect(()=>{
    console.log("hello");
    },[count1,count2])
    return(
        <div>
            <h1>{count1}</h1>
            <button onClick={()=>{setCount1(count1+1)}}>Increment 1</button>
            <h1>{count2}</h1>
            <button onClick={()=>{setCount2(count2+1)}}>Increment 2</button>
            <h1>{count3}</h1>
            <button onClick={()=>{setCount3(count3+1)}}>Increment 3</button>
        </div>
    )
}
export default SideEffect