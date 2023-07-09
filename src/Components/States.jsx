import { useState } from "react"

const States=()=>{
    let [abc,setAbc]=useState("Hungry")
    let Dosa=()=>{setAbc("My stomac is full")}
    return(
        <div>
            {abc}
            <button onClick={Dosa}>Food</button>
        </div>
    )
}
export default States