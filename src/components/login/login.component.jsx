import "./login.component.css";
import { useCaptcha } from "../../hooks/captcha-hook";
import { useFetch } from "../../hooks/fetch-api-hook";

export function LoginComponent()
{
    let code = useCaptcha();
    let categories = useFetch('https://fakestoreapi.com/products/categories');

    return(
        <div className="login-container">
            <form className="login-form alert alert-warning alert-dismissible">
                <h2 className="bi bi-person-fill">User Login</h2>
                <button className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                    <dt>Verify Code</dt>
                    <dd>{code}</dd>
                    <dt>Categories</dt>
                    <dd>
                        <select className="form-select">
                            {
                                categories.map(category=><option key={category}>{category}</option>)
                            }
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}
