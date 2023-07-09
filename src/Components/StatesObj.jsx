import { useState } from "react"

const StatesObj=()=>{
    let [obj]=useState({name:"Perwej",id:123})
    return(
        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.id}</h1>
        </div>
    )
}
export default StatesObj