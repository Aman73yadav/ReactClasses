import { Fragment, useState } from "react"
import content from "./userdata.json"
const Task3=()=>{
    let [abc,setAbc]=useState(content)
    return(
        <div>
            {abc.map((x)=>{
                return(
                    <Fragment key={x.id}>
                        <h1>{x.id}</h1>
                        <h1>{x.login}</h1>
                        <img src={x.avatar_url} alt="" />
                    </Fragment>
                )
            })}
        </div>
    )
}
export default Task3