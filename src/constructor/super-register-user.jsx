import React from "react";

export class RegisterUser extends React.Component
{
    constructor(){
        super();
        this.state = {
            UserName: "David",
            Categories:["All", "Electronics", "Fashion"]
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <h3>Hello! {this.state.UserName}</h3>
                <select>
                    {
                        this.state.Categories.map(category=><option key={category}>{category}</option>)
                    }
                </select>
            </div>
        )
    }
}