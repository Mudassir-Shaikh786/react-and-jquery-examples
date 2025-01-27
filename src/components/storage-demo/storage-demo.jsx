import { useState, useEffect } from "react";

export function StorageDemo(){
    const[user, setUser]= useState('');

    function handleIdChange(e){
        setUser(e.target.value);
    }

    function removeSession(){
        alert('Your Session Expired');
        localStorage.removeItem('userid');
        window.location.reload();
    }

    useEffect(()=>{
        setTimeout(removeSession, 86400000);
    },[])

    function handleLogin(){
        localStorage.setItem("userid", user);
        alert('Your ID Saved for 24hr');
        setTimeout(removeSession, 86400000);

    }

    return(
        <div className="container-fluid">
            <h2>Storage</h2>
           <div className="d-flex w-25 input-group">
           <input className="form-control" type="text" onChange={handleIdChange} placeholder="UserId" />
           <button className="btn btn-warning" onClick={handleLogin}>Login</button>
           </div>
            <p className="fw-bold mt-4">{localStorage.getItem('userid')} logged in</p>
        </div>
    )
}