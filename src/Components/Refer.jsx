import { useRef } from "react"

const Refer=()=>{
    let demoRef=useRef()
    console.log(demoRef);
    let color=()=>{
    demoRef.current.style.background="red"
    }
    return(
        <div>
            <h1 ref={demoRef}>Hello</h1>
            <button onClick={color}>Change Color</button>
        </div>
    )
}
export default Refer