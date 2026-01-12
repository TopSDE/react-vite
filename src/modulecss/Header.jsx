import React from "react";
import Style from "./header.module.css"
// import Variable from "path-to-module.css"

const Header = () => {
    return (
        <>
        <nav id={Style.navBlock}>
            <ul className={Style.list}>
                <li>HOME</li>
                <li>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
        </nav>
        </>
    )
}
export default Header
// syntax : attr_name = {Variable.attr_value}
// 1st letter of Variable must be Caps