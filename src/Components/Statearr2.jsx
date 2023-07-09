import { useState } from "react"

const Statearr2=()=>{
    let [data,setData]=useState(["hi","hello","bye"])
    return(
        <div>
            {data.map((x)=>{
                return(
                    <h1>{x}</h1>
                )
            })}
        </div>
    )
}
export default Statearr2