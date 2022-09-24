import React from "react";
import { Link } from "react-router-dom";



export default function Btn(prop){
    return(
        <div className="btn--container">
            <Link to="/" className={prop.BS?"btn active":"btn"}>منوی غذا</Link >
            <Link to='/info' className={!prop.BS?"btn active":"btn"}>اطلاعات رستوران</Link >
        </div>
    )
}