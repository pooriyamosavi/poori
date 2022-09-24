import React from "react";




export default function Login(){
    return(
        <>
            <h1 className="login">عضویت</h1>
            <div className="form">
                <form action="post" >
                    <label htmlFor="email">ایمیل</label><br />
                    <input 
                        id="email"
                        type="email"
                    /><br />
                    <label htmlFor="password">رمز عبور</label><br />
                    <input 
                        id="password"
                        type="password"
                    /><br /><br />
                    <button className="submit">ثبت</button>
                </form>
            </div>  
        </>
    )
}