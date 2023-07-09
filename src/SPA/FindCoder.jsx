import React from "react"
import style from "./findcode.module.css"
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"
const FindCoder=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.logo}><Logo/></div>
                    <div className={style.menu}><Menu/></div>
                    <div className={style.btn}><Button/></div>
                </article>
            </section>
        </div>
    )
}
export default FindCoder