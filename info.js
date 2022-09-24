import React from "react";
import Btn from "./doubleBTN";



export default function Info(){
    return(
        <div className="body">
            <div className="menu">
                <Btn BS={false} />
                <div className="info">
                    <div className="table">
                        <h2>ساعات کار</h2>
                    <table>
                        <tr>
                            <th>روز ها</th>
                            <th>ناهار</th>
                            <th>شام</th>
                        </tr>    
                        <tr>
                            <td>یک شنبه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                        <tr>
                            <td>دو شنبه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                        <tr>
                            <td>سه شنبه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                        <tr>
                            <td>چهار شنبه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                        <tr>
                            <td>پنج شنبه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                        <tr>
                            <td>جمعه</td>
                            <td>11:30 تا 17:00</td>
                            <td>17:00 تا 22:30</td>
                        </tr>
                    </table>
                    </div>
                    <hr />
                    <div className="phone">
                        <h1>ادرس رستوران</h1>
                        <h3>سالاریه نبش میدان میثم</h3>
                        <h3>تلفن:32141000</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}