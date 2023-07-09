import { useRef } from "react"

const Uncontrolled=()=>{
    let name=useRef()
    let email=useRef()
    let phone=useRef()
    let disp=()=>{
        let a=name.current.value
        console.log(a)
        let b=email.current.value
        console.log(b)
        let c=phone.current.value
        console.log(c)
    }
    return(
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" ref={name}/><br /><br />
            <label htmlFor="">Email</label>
            <input type="email" ref={email}/><br /><br />
            <label htmlFor="">Phone</label>
            <input type="number" ref={phone}/><br /><br />
            <button onClick={disp}>Submit</button>
        </div>
    )
}
export default Uncontrolled