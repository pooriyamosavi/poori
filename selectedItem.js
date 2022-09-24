import React from "react";
import list from "./lists";




export default function SelectedItem(prop){
    let i = 0
    prop.OR.map(item=>{
        item === prop.title? i++:i=i
    })
    return(
        <div className="selectedItem">
                <h2>{prop.OR[prop.i]}</h2>
            <div>
            <button onClick={()=>prop.func(prop.OR[prop.i])} className="minuse">-</button>
            </div>
        </div>
    )
}