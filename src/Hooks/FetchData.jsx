import axios from "axios"
import { useEffect, useState } from "react"

const FetchData=()=>{
    let [content,setContent]=useState([])
    let [id,setId]=useState("")
    let [btn,setBtn]=useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then((response)=>{
            console.log(response.data);
            setContent(response.data)
        }).catch(()=>{
            console.log("Data not found");
        })
    },[btn])
    let idData=(e)=>{
        setId(e.target.value)
    }
    let formHandle=()=>{
        setBtn(id)
    }
    return(
        <div>
            {/* {content.map((x)=>{
                return(
                    <div>
                        <h1>{x.id}</h1>
                        <h1>{x.title}</h1>
                    </div>
                )
            })} */}
            <input type="text" value={id} onChange={idData}/>
            <button onClick={formHandle}>Fetch Details</button>
            {content.title}
        </div>
    )
}
export default FetchData