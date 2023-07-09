const Theme=()=>{
    let dark=()=>{
        document.body.style.background="black"
        document.body.style.color="white"
    }
    let light=()=>{
        document.body.style.background="white"
        document.body.style.color="black"
    }
    return(
        <div>
            <label htmlFor="">Dark Theme</label>
            <input type="radio" name="a" onClick={dark}/><br /><br />
            <label htmlFor="">Light Theme</label>
            <input type="radio" name="a" onClick={light}/><br />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit sequi corporis, perferendis omnis dolorem ipsa quis aut, dolores ex possimus ullam temporibus eum consequatur voluptatum numquam, iste error ab?</h1>
        </div>
    )
}
export default Theme