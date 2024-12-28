import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function FakestoreHome(){

    const [categories, setCategories] = useState([]);
    const [cookies, setCookie, removeCookie]= useCookies(['userId']);

    let navigate = useNavigate();

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
        })

    },[])

    function handleSignoutClick(){
        removeCookie('userId');
        navigate('/login');
    }

    return(
        <div>
            <h2 className="d-flex justify-content-between"><span> Fakestore Home</span> <span>{cookies['userId']}</span></h2>
            <ul className="list-unstyled">
                {
                    categories.map(category=>
                        <li key={category}> <Link className="btn btn-dark w-25 my-2" to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>
                    )
                }
                {
                    (cookies['userId'])?<button onClick={handleSignoutClick} className="btn btn-danger w-25">Signout</button>: <li><Link className="btn btn-warning w-25 my-2" to="/login">User Login</Link></li>
                }
            </ul>
        </div>
    )
}