


import { useState, useEffect } from "react";




export function RegExp(){
    const [mobile,setMobile]= useState("9876543210");
    const[regExp]=useState(/\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/);

    useEffect(()=>{
        setMobile(prompt('Enter Mobile Number'));
    },[])

    return(
        <div className="container-fluid">
            {
                (mobile.match(regExp))?"Mobile Verified":"Invalid Mobile:US Format +(1)(000)000-0000"
            }
        </div>
    )
}