import React, { useState } from "react";
import Cart from "./cart";
import Btn from "./doubleBTN";
import MenuBody from "./menuBody";



export default function BodyApp(){
    
    const [OR, setOR] = useState([]) 
    
    function addToCart(foodname){
        setOR(oldOR=>[...oldOR, foodname])
    }
    function subFromCart(foodname){
        setOR(oldOR=>{
            const i = oldOR.indexOf(foodname)
            const newOR = oldOR.slice(0, i).concat(oldOR.slice(i+1))
            return newOR
        })
    }
    return(
        <div className='body'>
            <div className='menu'>
                <Btn BS={true} />
                <MenuBody func={addToCart} func2={subFromCart} OR={OR} />
            </div>
            <div className='cart'>
                <Cart OR={OR} func={subFromCart} />
            </div>
        </div>
    )
}