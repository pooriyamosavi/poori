import React from "react";
import { Link } from "react-router-dom";

const src = "https://www.dolphin-fastfood.com/2.4.2.9/img/264186f00263c8e80c5e14ddb4a178ef.png"




export default function Header(){
    
    return(
        <div className="header">
            <img src={src} alt="logo" />
        <Link className="Link" to="/login">ورود / عضویت</Link>
        </div>
    )
}