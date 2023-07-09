import { useState } from "react"

const Decrement=()=>{
    let [count,setCount]=useState(10)
    let dec=()=>{setCount(count-1)}
    let res=()=>{setCount(0)}
    return(
        <div>
            {count}
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>reset</button>
        </div>
    )
}
export default Decrement