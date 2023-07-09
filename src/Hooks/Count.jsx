import React from "react";
const Count=(x)=>{
    console.log("renedering comp",x.children);
    return(
        <div>
        {x.children}    {x.data}
        </div>
    )
}
export default React.memo(Count)