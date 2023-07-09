import { useState } from "react"

const Incrament=()=>{
    let [count,setCount]=useState(0)
    let incr=()=>{setCount(count+1)}
    return(
        <div>
            {count}
            <button onClick={incr}>Increament</button>
        </div>
    )
}
export default Incrament