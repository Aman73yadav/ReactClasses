import { Link } from "react-router-dom";
import style from "./findcode.module.css";
const Menu = () => {
  return (
    <ol id={style.menuBlock}>
      <li><Link to="/explore">Explore work</Link></li>
      <li><Link to="/hire">Hire Talents</Link></li>
      <li><Link to="/dev">Dev Board</Link></li>
      <li><Link to="/challenge">Challenges</Link></li>
    </ol>
  );
};
export default Menu;
