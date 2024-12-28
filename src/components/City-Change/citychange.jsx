import { useState} from "react";
export function CityChange(){
const [user, setUser]= useState({UserName:",Age:0,City:"});

function handleNameChange(e){
    setUser({
        UserName: e.target.value,
        Age: user.Age,
        City:user.City
    })
}
function handleAgeChange(e){
    setUser({
        UserName:user.UserName,
        Age:e.target.value,
        City:user.City
    })
}
function handleCityChange(e){
    setUser({
        UserName:user.UserName,
        Age:user.Age,
        City:e.target.value
    })
}
function handleSubmit(e){
    e.preventDefault();
   
}
return (
    <div className="container-fluid">
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange}/> </dd>
                <dt>Age</dt>
                <dd><input type="number" onChange={handleAgeChange}/></dd>
                <dt>City</dt>
                <dd>
                    <select onChange={handleCityChange}>
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
            </dl>
            <button>Submit</button>
        </form>
    </div>
)
}