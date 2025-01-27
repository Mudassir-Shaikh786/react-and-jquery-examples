import { useEffect, useState } from "react";

export function Login(){

    useEffect(()=>{
        console.log(`Login Component Mounted`);
        return()=>{
            console.log(`Login Component Unmounted`);
        }
    },[])

    return(
        <div>
            <h3>User Login</h3>
        </div>
    );
}

export function Register(){
    useEffect(()=>{
        console.log(`Register Component Mounted`);
        return()=>{
            console.log(`Register Component Unmounted`);
        }
    },[])

    return (
        <div>
            <h3>Register User</h3>
        </div>
    )
}

export function MountDemo(){
    const[component, setComponent]=useState();

    function handleLoginClick(){
        setComponent(<Login />);
    }

    function handleRegisterClick(){
        setComponent(<Register />);
    }

    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleLoginClick} className="btn btn-primary me-2">Login</button>
                <button onClick={handleRegisterClick} className="btn btn-warning">Register</button>
                <div className="mt-4">
                    {
                        component
                    }
                </div>
            </div>
        </div>
    )
}