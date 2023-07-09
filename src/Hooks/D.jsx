import { useContext } from "react";
import { userData } from "../App";

const D = () => {
  let user = useContext(userData);
  return <div>{user} Good Evening</div>;
};
export default D;
