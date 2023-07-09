import Y from "./Y"
const X=(props)=>{
    console.log(props)
    return(
        <div>
            <Y data1={props.data}></Y>
        </div>
    )
}
export default X