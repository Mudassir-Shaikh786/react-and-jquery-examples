        import { hover } from "@testing-library/user-event/dist/hover";
        import { calculateNewValue } from "@testing-library/user-event/dist/utils";
        import axios from "axios"; 
        import { useEffect, useRef, useState,} from "react" 
        export function FakeStore() 
        { 
        const [categories, setCategories] = useState([]); 
        const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}}]); 
        const [cartItems, setCartItems] = useState([]); 
        const [cartCount, setCartCount] = useState(); 
        const [searchString, setSearchString] = useState(0); 
            
        const calculateTotal = () => {
            return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
          };
           
        function GetCartCount(){ 
        setCartCount(cartItems.length);
           }
        

        function LoadCategories(){ 
        axios.get(`https://fakestoreapi.com/products/categories`) 
        .then(response=>{ 
        response.data.unshift('all'); 
        setCategories(response.data); 
        }) 
        } 
        function LoadProducts(url){ 
        axios.get(url) 
        .then(response=>{ 
        setProducts(response.data); 
        }) 
        } 
        useEffect(()=>{ 
        LoadCategories(); 
        LoadProducts('https://fakestoreapi.com/products'); 
        GetCartCount(); 
        },[])

        function handleCategoryChange(e){ 
        if(e.target.value==="all") { 
        LoadProducts('https://fakestoreapi.com/products'); 
        } else { 
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`); 
        } 
        } 
        function handleAddToCartClick(id){ 
        axios.get(`https://fakestoreapi.com/products/${id}`) 
        .then(response=>{ 
        cartItems.push(response.data); 
        alert(`${response.data.title}\nAdded to Cart`); 
        GetCartCount(); 
        }) 
        } 

        function handleRemoveClick(id){
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response=>{
                cartItems.pop(response.data);
                alert(`${response.data.title}\n Delete Item`);
                GetCartCount();
               
             
            })
        }
     

        function handleSearchChange(e){ 
       setSearchString(e.target.value.toLowerCase()); 
        } 
        function handleAllClick(){
            LoadProducts('https://fakestoreapi.com/products');
        }
        function electronicsClick(){
            LoadProducts('https://fakestoreapi.com/products/category/electronics');
        }
        function mensClick(){
            LoadProducts(`https:fakestoreapi.com/products/category/men's clothing`);
        }

        function handlePressClick(){
            LoadProducts('https://fakestoreapi.com/products/category/jewelery');
        }

        function handlefasionClick(){
            LoadProducts(`https://fakestoreapi.com/products/category/women's clothing`);
        }
        function handleSearchClick(){ 
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`);
        } 
        function handleRatingChange(e){ 
        axios.get('https://fakestoreapi.com/products') 
        .then(response=>{ 
        var filteredProducts = response.data.filter(product=> 
        product.rating.rate>e.target.value); 
        console.log(filteredProducts); 
        })
        } 
        return( 
        <div className="container-fluid"> 
        <header className="d-flex bg-danger text-light fs-6 justify-content-between p-2 
        border mt-2"> 
        <div> 
        <span className="fs-4">Fakestore</span> 
        </div> 
        <div> 
        <div className="input-group"> 
        <input onChange={handleSearchChange} type="text" placeholder="Search 
        by category" className="form-control"/> 
        <button onClick={handleSearchClick} className="btn btn-warning bi 
        bi-search"></button> 
        </div> 
        </div> 
        <nav> 
        <button className="text-primary btn btn-light me-2" style={{width:'160px'}} onClick={handleAllClick}>All</button>
        <button className="text-primary btn btn-light" style={{width:'160px'}} onClick={electronicsClick}>  Electronics  </button>
        <button className="text-primary ms-2 btn btn-light" style={{width:'160px'}} onClick={mensClick}> Men's Clothing</button> 
        <button className="text-primary ms-2 btn btn-light"style={{width:'160px'}} onClick={handlefasionClick}> Women's Clothing </button> 
        <button className="text-primary ms-2 btn btn-light"style={{width:'160px'}} onClick={handlePressClick}> Jewelery </button> 
        </nav> 
        <div> 
        <button className="btn btn-light"><span className="bi 
        bi-person"></span></button> 
        <button className="btn btn-light mx-2"><span className="bi 
        bi-heart"></span></button> 
        <button data-bs-toggle="modal" data-bs-target="#cart" className="btn 
        btn-light bi bi-cart position-relative"><span className="badge bg-danger rounded 
        rounded-circle position-absolute">{cartCount}</span></button>
        <div className="modal fade" id="cart"> 
        <div className="modal-dialog"> 
        <div className="modal-content"> 
        <div className="modal-header"> 
        <h3 className="text-primary">Your Cart Items</h3> 
        <button className="btn btn-close" 
        data-bs-dismiss="modal"></button> 
        </div> 
        <div className="modal-body"> 
        <table className="table table-hover"> 
        <thead> 
        <tr> 
        <th >Title</th> 
        <th>Preview</th> 
        <th>Price</th> 
        </tr> 
        </thead> 
        <tbody> 
        { 
     
        cartItems.map(item=> 
        <tr key={item.id} > 
        <td>{item.title}</td> 
        <td><img src={item.image} width="50" height="50" /></td> 
        <td> {item.price} </td> 
        <td> <button onClick={()=>handleRemoveClick(item.id)} className="bi bi-trash btn 
        btn-danger"></button> </td> 
        </tr> 
        ) 
       }
        </tbody> 
        <tfoot> 
            
      <tr>
        <th colSpan="2">Total Amount:</th> 
    <td className="text-primary"> {calculateTotal()} </td> 
        </tr> 
    
    
                
        </tfoot> 
        </table> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div> 
        </header> 
        <section className="mt-3 row"> 
        <nav className="col-2"> 
        <div className="mb-3"> 
        <label className="form-label fw-bold">Select Category</label> 
        <div> 
        <select onChange={handleCategoryChange} className="form-select"> 
        { 
        categories.map(category=><option value={category} 
        key={category}>{category.toUpperCase()}</option>) 
        } 
        </select> 
        </div> 
        </div> 
        <div className="my-3"> 
        <label>Rating</label> 
        <div> 
        <div> 
        <input onChange={handleRatingChange} type="checkbox" value={4}  /> 
        <span>4 <span className="bi bi-star-fill"></span> above </span> 
        </div> 
        <div> 
        <input onChange={handleRatingChange} type="checkbox" value={3}  /> 
        <span>3 <span className="bi bi-star-fill"></span> above </span> 
        </div> 
        </div> 
        </div> 
        </nav> 
        <main className="col-10 d-flex flex-wrap overflow-auto" 
        style={{height:'460px'}}> 
        { 
        products.map(product=> 
        <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}> 
<img className="card-img-top" height="120" src={product.image} /> 
<div className="card-header overflow-auto" style={{height:'100px'}}> 
{product.title} 
</div> 
<div className="card-body"> 
<dl> 
<dt>Price</dt> 
<dd>{product.price}</dd> 
<dt>Rating</dt> 
<dd> {product.rating.rate} <span className="bi bi-star-fill 
text-success"></span> </dd> 
</dl> 
</div> 
<div className="card-footer"> 
<button onClick={()=> handleAddToCartClick(product.id)} 
className="btn btn-warning w-100"> <span className="bi bi-cart4"> Add to Cart 
</span> </button> 
</div> 
</div> 
) 
} 
</main> 
</section> 
</div> 
) 
} 