import Hoc from "./Hoc"

const B=(y)=>{
    return(
        <div>
            {y.data}
            <button onMouseOver={y.fun}>Increment By Mouse Over</button><br /><br />
        </div>
    )
}
export default Hoc(B)