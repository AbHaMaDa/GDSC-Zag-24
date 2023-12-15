import React,{Component, useState} from "react";
import differenceInDays from "date-fns/differenceInDays";
import { differenceInMonths, differenceInYears } from "date-fns";

const Navbar=(props)=>{
const [days,setdays]=useState("");
const [months,setmonths]=useState("");
const [years,setyears]=useState("");

const diffInDays= differenceInDays(
    new Date(years,months,31),
    new Date(years, months, days)
  )
  const diifInMonths=differenceInMonths(
    new Date(years,12,31), new Date(years, months, days)
    )
    const diffInYears = differenceInYears(
        new Date(), new Date(years, months, days)
        )


  const submit=(e)=>{
    e.preventDefault();



   

};



    return(
        <div>
        <form className="form" onSubmit={submit}>
            {/* day input */}
            <div className="box">
                <label className={`label ${days>31|| days==""?"red":""}`}>day</label>
                <input className="day" type="number" name="day" placeholder="DD" min="1" max="31" onChange={(e)=>setdays(e.target.value)}/>
                {days>31?<small className="red">Must be a Vaild Day</small>:""}
                {days==""?<small className="red">this faild is requird</small>:""}
            </div>


            
            {/* month input */}
            <div className="box">
                <label className={`label ${months>12 || months==""?"red":""}`}>month</label>
                <input className="month" type="number" name="month" placeholder="MM" min="1" max="12" onChange={(e)=>setmonths(e.target.value)}/>
                {months>12?<small className="red">Must be a Vaild month</small>:""}
                {months==""?<small className="red">this faild is requird</small>:""}
            </div>

            
            {/* year input */}
            <div className="box">
                <label className={`label ${years>new Date().getFullYear()|| years==""?"red":""}`}>year</label>
                <input className="year" type="number" name="year" placeholder="YYYY" min="1950" max="2024" onChange={(e)=>setyears(e.target.value)}/>
                {years>new Date().getFullYear()?<small className="red">Must be in the past</small>:""}
                {years==""?<small className="red">this faild is requird</small>:""}
            </div>
            <button type="submit">
                
            </button>
        </form>
        <h1>
                <span>{years==""?"--":diffInYears}</span>years<br/>
                <span>{months==""?"--":diifInMonths}</span>months<br/>
                <span>{  days==""?"--":diffInDays}</span>days
            </h1>
        </div>
    )
}


export default Navbar;