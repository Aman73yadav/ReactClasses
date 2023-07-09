import { useState } from "react"

const Icon=()=>{
    let [like,setLike]=useState(0)
    let incre=()=>{setLike(like+1)}
    return(
        <div>
            <i class="fa-solid fa-heart" onClick={incre}></i><sup>{like}</sup>
        </div>
    )
}
export default Icon