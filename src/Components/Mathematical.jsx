import { useRef, useState } from "react"

const Mathematical=()=>{
    let [data1,mData1]=useState(0)
    let first=useRef()
    let second=useRef()
    let add=()=>{
        let a=Number(first.current.value)
        let b=Number(second.current.value)
        mData1(a+b)
    }
    let sub=()=>{
        let a=first.current.value
        let b=second.current.value
        mData1(a-b)
    }
    let mul=()=>{
        let a=first.current.value
        let b=second.current.value
        mData1(a*b)
    }
    let div=()=>{
        let a=first.current.value
        let b=second.current.value
        mData1(a/b)
    }
    return(
        <div>
            <label htmlFor="">Enter First Number:</label>
            <input type="number" ref={first}/><br /><br />
            <label htmlFor="">Enter Second Number:</label>
            <input type="number" ref={second}/><br /><br />
            <button onClick={add}> + </button>
            <button onClick={sub}> - </button>
            <button onClick={mul}> * </button>
            <button onClick={div}> / </button>
            <h1>{data1}</h1>
        </div>
    )
}
export default Mathematical