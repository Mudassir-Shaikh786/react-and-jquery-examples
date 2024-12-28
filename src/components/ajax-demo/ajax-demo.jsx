import { useEffect, useState } from "react"

export function AjaxDemo(){


    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, reviews:0, ratings:0}, offers:[], image:''});

    function LoadData(){
         
        var http = new XMLHttpRequest();

        http.open("get", "product.json", true);

        http.send();

        http.onreadystatechange = function(){

              if(http.readyState===4){
                   setProduct(JSON.parse(http.responseText));
              }

        }


    }


    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                    <button className=" bg-warning p-1  bi bi-cart4 w-50 mt-2"> ADD TO CART </button>
                    <button className=" bg-danger text-white p-1 bi bi-lightning-charge-fill w-50 mt-2"> BUY NOW </button>
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                             {product.rating.rate} <span className="bi bi-star-fill"></span> 
                        </div>
                        <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                  <div className=" bi bi-check-circle border p-1 ms-5 mt-5 bg-secondary w-25"> Buy Without Exchange <span className="bi bi-currency-rupee ms-3">65,000 </span> </div>
                    <div className="bi bi-check-circle border p-1 ms-5 w-25"> buy with exchange <span className="ms-5 bi bi-currency-rupee">25,000</span></div>
                </div>
            </div>
        </div>
    )
}
