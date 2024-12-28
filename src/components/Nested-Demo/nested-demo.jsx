import { useState } from "react"

export function NestedDemo(){
    const[data]= useState(
        [
            {Category:"Electronics", Products:["Televisions","Mobiles"]},
            {Category:"Footwear", Products:["Casuals", "Sneakers,","Books"]}
        ]
    );

    return(
        <div className="container-fluid">
            <h2>Nested List</h2>
            <ol>
                {
                    data.map(item=>
                        <li key={item}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=><li key={product}>{product}</li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    data.map(item=>
                        <optgroup key={item.Category}label={item.Category}>
                            {
                                item.Products.map(product=>
                                <option key={product}> {product} </option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}