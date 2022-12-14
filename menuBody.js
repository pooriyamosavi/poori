import React, {useRef, useState} from "react";
import FoodBox from "./foodBox";
import list from "./lists";
import NavMenu from "./navmenu";





export default function MenuBody(prop){
    const NavMenuElement = list.NavMenuList.map(item=>{
        return(
            <NavMenu 
                img={item.img}
                caption={item.caption}
                id={item.id}
            />
        )
    })
    const foodBoxElement1 = list.americanPizza.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement2 = list.italianPizza.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement3 = list.doublePizza.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement4 = list.italianSandwich.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement5 = list.chipsAndChees.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement6 = list.hamberger.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement7 = list.fried.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement8 = list.appetizer.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement9 = list.drinks.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const foodBoxElement10 = list.sandwich.map(item=>{
        return(
            <FoodBox 
                func2={prop.func2}
                OR={prop.OR}
                func={prop.func}
                img={item.img}
                title={item.title}
                prise={item.prise}
                ingredient={item.ingredient}
            />
        )
    })
    const inpRef = useRef()
    const [inpVal, setInpVal] = useState('')
    const [focus, setFocus] = useState(false)
    const [checked, setChecked] = useState(false)
    const [nav, setNav] = useState("right")
    function changeHandle(event){
        setInpVal(event.target.value)
    }   
    function focusHandle(){
        setFocus(true)
        inpRef.current.focus()
    }
    function unFocusHandle(){
        setFocus(false)
    }
    function checkedHandle(){
        checked?setChecked(false):setChecked(true)
    }
    
    return(
        <div className="body--menu">
            <div className="navmenu-btn--container">
                <div className="right-btn" onClick={()=>setNav("right")}>&lt;</div>
                    <div className="navmenu--container" style={{justifyContent:nav}}>
                        {NavMenuElement}
                    </div>
                <div className="left-btn" onClick={()=>setNav("left")}>&gt;</div>
                
            </div>
            <div className="search-area">
                <button className="fa fa-search search-btn"></button>
                <input 
                    className="input"
                    type="text"
                    onChange={changeHandle}
                    value={inpVal}
                    onFocus={focusHandle}
                    onBlur={unFocusHandle}
                    ref={inpRef}
                />
                <div onClick={focusHandle} className={focus? "placeholder second-state":"placeholder"}>?????????????? ????????</div>
                <label  onClick={checkedHandle} > ?????? ?????????? </label>
                <input 
                    type='radio' 
                    className="radio"
                    id="available"
                    checked={checked}
                    onClick={checkedHandle}
                />
            </div>
            <h2 className="food-title" id="americanpizza">?????????? ???????????????? </h2>
            <div className="foodbox--container">
                {foodBoxElement1}
            </div>
            <h2 className="food-title" id="italianpizza">?????????? ??????????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement2}
            </div>
            <h2 className="food-title" id="doublepizza">?????????? ???? ????????</h2>
            <div className="foodbox--container">
                {foodBoxElement3}
            </div>
            <h2 className="food-title" id="italiansandwich">?????????????? ??????????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement4}
            </div>
            <h2 className="food-title" id="chipsandchees">???????? ?? ????????</h2>
            <div className="foodbox--container">
                {foodBoxElement5}
            </div>
            <h2 className="food-title" id="hamberger">????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement6}
            </div>
            <h2 className="food-title" id="sandwich">??????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement10}
            </div>
            <h2 className="food-title" id="fried">????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement7}
            </div>
            <h2 className="food-title" id="appetizer">????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement8}
            </div>
            <h2 className="food-title" id="drinks">??????????????</h2>
            <div className="foodbox--container">
                {foodBoxElement9}
            </div>
        </div>
    )
}