import React from "react";

export class UserRegister extends React.Component
{
    constructor(){
        super();
        this.state= {
            UserName: "",
            Price: 0,
            Stock: false,
            theme: 'bg-light'
        }
    }
        componentDidMount(){
            this.setState({UserName: "David", Price: 65700, Stock:true, theme: 'bg-danger text-white'});
        }
        render(){
            return(
                <div className="container-fluid">
                  <div className={`border p-2 border-2 w-25 mt-2 ${this.state.theme}`}>
                    <h2>Hello! {this.state.UserName}</h2>
                    <p>
                        Price: {this.state.Price}<br />
                        Stock: {(this.state.Stock===true)?"Available": "Out of Stock"}
                    </p>
                  </div>
                </div>
            )
    }
}