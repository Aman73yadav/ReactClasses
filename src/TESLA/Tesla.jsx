import React from 'react'
import content from "./tesla.module.css"
const Tesla = () => {
  return (
    <div>
       <section id={content.div}>
            <header className={content.nav1}>
            Tax credit up to $7,500 available for eligible vehicles. <a href="">Learn More</a>
            </header>
            <nav className={content.nav2}>

                <div className={content.logo}>
                <a href="">
                <svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
                </a>
                </div>

                <div className={content.navlist}>
                    <ol>
                        <li><div className={content.div1}></div></li>
                        <a href=""><li>Model S</li></a>
                        <a href=""><li>Model 3</li></a>
                        <a href=""><li>Model X</li></a>
                        <a href=""><li>Model Y</li></a>
                        <a href=""><li>Solar Roof</li></a>
                        <a href=""><li>Solar Panels</li></a>
                        <a href=""><li>Powerwall</li></a>
                        <li><div></div></li>
                        <a href=""><li>Shop</li></a>
                        <a href=""><li>Account</li></a>
                        <a href=""><li>Menu</li></a>
                    </ol>
                </div>
            </nav>
            <div id={content.main1}></div>
            <div id={content.main2}></div>
            <div id={content.main3}></div>
            <div id={content.main4}></div>
        </section>
    </div>
  )
}

export default Tesla
