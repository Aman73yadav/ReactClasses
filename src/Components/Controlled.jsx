import { useState } from "react";

const Controlled = () => {
  let [name, setName] = useState("");
  let [compony, setCompany] = useState("");
  let [salary, setSalary] = useState("");
  let nameData = (e) => {
    setName(e.target.value);
  };
  let formHandle = () => {
    console.log(name);
    console.log(compony);
    console.log(salary);
  };
  let cname = (e) => {
    setCompany(e.target.value);
  };
  let salData = (e) => {
    setSalary(e.target.value);
  };
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" value={name} onChange={nameData} />
      <br />
      <br />
      <label htmlFor="">Compony Name</label>
      <input type="text" value={compony} onChange={cname} />
      <br />
      <br />
      <label htmlFor="">Salary</label>
      <input type="text" value={salary} onChange={salData} />
      <br />
      <br />
      <button onClick={formHandle}>Submit</button>
    </div>
  );
};
export default Controlled;
