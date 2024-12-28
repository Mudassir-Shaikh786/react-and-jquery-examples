import { useEffect, useState } from "react";

export function DataBinding(){
    var value="54";
    var stock= true;


    const [price, setPrice] = useState(40000.44);
    useEffect(()=>{

        setPrice(70000.44);
    },[])
 
    
    return(
        <div>
            <h2>Data Binding</h2>
          <p> Price : { price.toLocaleString('en-in',{ style:'currency', currency:'INR'}) }</p>
          <p> {parseInt(value)+20} </p>
          <p> Stock : {(stock==true)?"Available":"Out of stock"} </p>
    </div>
   
      )
   }

