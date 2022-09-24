import React from "react";




export default function NavMenu(prop){
    return(
        <a href={prop.id}>
            <div className="navmenu">
                <img src={prop.img} alt="" />
                <h6>{prop.caption}</h6>
            </div>
        </a>
    )
}