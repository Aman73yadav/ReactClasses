import { useState } from "react"

const Statesarr=()=>{
    let [arr]=useState([{name:"Abc"},"hi","hello","by"])
    return(
        <div>
            <h1>{arr[1]}</h1>
            <h1>{arr[2]}</h1>
            <h1>{arr[0].name}</h1>
        </div>
    )
}
export default Statesarr