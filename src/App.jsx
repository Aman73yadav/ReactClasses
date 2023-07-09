import Nav from "./Components/Nav"
import Content from "./Components/Content"
import { Component, createContext } from "react";
import Classbased from "./Components/Classbased";
import Hello from "./Components/Hello";
import Task1 from "./Components/Task1";
import Child from "./Components/Child" 
import Propsarr from "./Components/Propsarr";
import Home1 from "./Components/Home1";
import X from "./Components/X";
import States from "./Components/States";
import Incrament from "./Components/Increament";
import Decrement from "./Components/Decrement";
import StatesObj from "./Components/StatesObj";
import Statesarr from "./Components/Statesarr";
import Icon from "./Components/Icon";
import Statearr2 from "./Components/Statearr2";
import Task3 from "./Components/Task3";
// import "./global.css"        
import Spotify from "./Components/Spotify";
import Refer from "./Components/Refer";
import Theme from "./Components/Theme";
import Uncontrolled from "./Components/Uncontrolled";
import Mathematical from "./Components/Mathematical";
import Amazone from "./Components/Amazone";
import Controlled from "./Components/Controlled";
import Mathematicalcontrol from "./Components/Mathematicalcontrol";
import A from "./Components/A";
import B from "./Components/B";
import Hoc from "./Components/Hoc";
import SideEffect from "./Hooks/SideEffect";
import FetchData from "./Hooks/FetchData";
import C from "./Hooks/C";
import Perform from "./Hooks/Perform";
import Main from "./Hooks/Main";
import FindCoder from "./SPA/FindCoder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./SPA/Explore";
import Hire from "./SPA/Hire";
import Dev from "./SPA/Dev";
import Challenge from "./SPA/Challenge";
import Tesla from "./TESLA/Tesla";
import Spacexnav from "./SPACEX/Spacexnav";
export let userData=createContext()
const App = () => {
  // let obj={
  //   name:"abc",
  //   id:123,
  //   skills:["html","css","js"]

  // }
  // let obj={
  //   users:[
  //     {name:"HTML"},
  //     {name:"CSS"},
  //     {name:"JS"}
  //   ]

  // }
  return (
    <div>
      {/* <Nav/> */}
      {/* <Content/> */}
      {/* <Classbased/>  */}
      {/* <Hello data="world"></Hello> */}
      {/* <Hello data="universe"/> */}
      {/* <Hello data="galaxy"/> */}
      {/* <Task1 data1="HTML" data="Structure"></Task1> */}
      {/* <Task1 data1="CSS" data="Style"/> */}
      {/* <Task1 data1="JavaScript" data="Function"/> */}
      {/* <Child arr={[10,"Hi","Hello"]}/> */}
      {/* <Propsarr data={obj}/> */}
      {/* <Home1 data={obj}/> */}
      {/* <X data="Hi"/> */}
      {/* <States/> */}
      {/* <Incrament/> */}
      {/* <Decrement/> */}
      {/* <StatesObj/> */}
      {/* <Statesarr/> */}
      {/* <Icon/> */}
      {/* <Statearr2/> */}
      {/* <Task3/> */}
      {/* <Spotify/> */}
      {/* <Refer/> */}
      {/* <Theme/> */}
      {/* <Uncontrolled/> */}
      {/* <Mathematical/> */}
      {/* <Amazone/> */}
      {/* <Controlled/> */}
      {/* <Mathematicalcontrol/> */}
      {/* <Hoc/> */}
      {/* <A/> */}
      {/* <B/> */}
      {/* <SideEffect/> */}
      {/* <FetchData/> */}
      {/* <userData.Provider value="Hi">
        <C/>
      </userData.Provider  > */}
      {/* <Perform/> */}
      {/* <Main/> */}
      {/* <BrowserRouter>
      <FindCoder/>
      <Routes>
        <Route element={<Explore/>} path="/explore"/>
        <Route element={<Hire/>} path="/hire"/>
        <Route element={<Dev/>} path="/dev"/>
        <Route element={<Challenge/>} path="/challenge"/>
      </Routes>
      </BrowserRouter> */}
      <Tesla/>
      {/* <Spacexnav/> */}
    </div>
  );
};
export default App