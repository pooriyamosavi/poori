import React, { useState } from "react";




export default function FoodBox(prop){
    let i = 0
    prop.OR.map(item=>{
        item === prop.title? i++:i=i
    })
    return(
        <div className="foodbox">   
            <img src={prop.img} alt="" />
            <div className="foodbox-caption">
                <h4>{prop.title}</h4>
                {false && <h6>{prop.ingredient}</h6>}
                <div className="foodbox-pise-and-sell">
                    <h6>{prop.prise} تومان</h6>
                    <div className="foodbox-add-sub">
                        {i > 0 && <button onClick={()=>prop.func2(prop.title)} className="minuse">-</button>}
                        {i > 0 && <div className="num">{i}</div>}
                        <button onClick={()=>prop.func(prop.title)} className="plus">+</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}