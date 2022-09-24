import React from "react";
import SelectedItem from "./selectedItem";




export default function Cart(prop){
    let i = -1
    const selectedItemElement = prop.OR.map(item=>{
        i++
        return(
            <SelectedItem 
                func={prop.func}
                OR={prop.OR}
                i={i}
            />
        )
    })
    return(
        <div className="cart-box">
            <h3>سبد خرید:{prop.OR.length}</h3>
            <div>
                {prop.OR.length === 0 && <div><h4>سبد خرید خالی است</h4></div>}
                {selectedItemElement}
                
            </div>
        </div>
    )
}