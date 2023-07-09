import { useState } from "react"

const Mathematicalcontrol=()=>{
    let [num1,setNum1]=useState()
    let [num2,setNum2]=useState()
    let [result,setResult]=useState()
    let num1Data=(e)=>{setNum1(e.target.value)}
    let num2Data=(e)=>{setNum2(e.target.value)}
    let add=()=>{setResult(Number(num1)+Number(num2))}
    let sub=()=>{setResult(num1-num2)}
    let mul=()=>{setResult(num1*num2)}
    let div=()=>{setResult(num1/num2)}
    
    return(
        <div>
           <label htmlFor="">Enter first Number</label>
           <input type="number" value={num1} onChange={num1Data}/><br />
           <label htmlFor="">Enter second Number</label>
           <input type="number" value={num2} onChange={num2Data}/><br />
           <button onClick={add}>+</button>
           <button onClick={sub}>-</button>
           <button onClick={mul}>*</button>
           <button onClick={div}>/</button>
           <h1>{result}</h1>
        </div>
    )
}
export default Mathematicalcontrol