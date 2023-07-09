import { useCallback, useState } from "react"
import Count from "./Count"
import Button from "./Button"

const Main=()=>{
    let [salary,setSalary]=useState(30000)
    let [age,setAge]=useState(25)
    let increAge=useCallback(()=>{setAge(age+1)},[age])
    let increSal=useCallback(()=>{setSalary(salary+5000)},[salary])
    return(
        <div>
            <Count data={age}>Age</Count>
            <Button Fun={increAge}>Increment-Age</Button>
            <Count data={salary}>Salary</Count>
            <Button Fun={increSal}>Increment-Salary</Button>
        </div>
    )
}
export default Main