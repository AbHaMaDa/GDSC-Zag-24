import React,{Component, useState} from "react";
import differenceInDays from "date-fns/differenceInDays";
import { differenceInMonths, differenceInYears } from "date-fns";


// this hook to use inputs' val
const Navbar=(props)=>{
const [days,setdays]=useState("");
const [months,setmonths]=useState("");
const [years,setyears]=useState("");



// that for validtion
const [editday,seteditday]=useState()
const [editmonth,seteditmonth]=useState()
const [edityear,setedityear]=useState()



// these functions to culc the age
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
//##################



  const submit=(e)=>{
    e.preventDefault();


};




const click=()=>{
    
        seteditday(days>31|| days==""?"red":"")
        seteditmonth(months>12 || months==""?"red":"")
        setedityear(years>new Date().getFullYear()|| years==""?"red":"")
    
}






    return(
        <div>
            <form className="form" onSubmit={submit}>
                {/* day input */}
                <div className="box">
                    <label className={`label ${editday}`}>day</label>
                    <input className={`day ${editday||days>31?"out-red":"out-pir"}`} type="number" name="day" placeholder="DD" min="1" max="31" onChange={(e)=>setdays(e.target.value)}/>
                    {days>31?<small className="red">Must be a Vaild Day</small>:""}
                    
                    {editday?<small className="red">this faild is requird</small>:""}
                </div>


                
                {/* month input */}
                <div className="box">
                    <label className={`label ${editmonth}`}>month</label>
                    <input className={`month${editmonth||months>12?"out-red":"out-pir"} `} type="number" name="month" placeholder="MM" min="1" max="12" onChange={(e)=>setmonths(e.target.value)}/>
                    {months>12?<small className="red">Must be a Vaild month</small>:""}
                    
                    {editmonth?<small className="red">this faild is requird</small>:""}
                </div>

                
                {/* year input */}
                <div className="box">
                    <label className={`label ${edityear}`}>year</label>
                    <input className={`year ${edityear||years>new Date().getFullYear()?"out-red":"out-pir"}`} type="number" name="year" placeholder="YYYY" min="1950" max="2024" onChange={(e)=>setyears(e.target.value)}/>
                    {years>new Date().getFullYear()?<small className="red">Must be in the past</small>:""}

                    {edityear?<small className="red">this faild is requird</small>:""}
                </div>
                <button type="submit" onClick={click} >
                    
                </button>
            </form>

        
            <h1 >
                <span>{edityear||years==""?"--":diffInYears>=0?diffInYears:"--"}</span>years<br/>
                <span>{editmonth||months==""?"--":diifInMonths>=0?diifInMonths:"--"}</span>months<br/>
                <span>{editday||days==""?"--":diffInDays>=0?diffInDays:"--"}</span>days
            </h1>

        </div>
    )
}


export default Navbar;