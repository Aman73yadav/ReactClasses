import Hoc from "./Hoc"

const A=(x)=>{
    
    return(
        <div>
            {x.data}
            <button onClick={x.fun}>Increment</button>
        </div>
    )
}
export default Hoc(A)