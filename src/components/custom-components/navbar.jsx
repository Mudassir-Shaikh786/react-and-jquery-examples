export function NavBar(props)
{
return(
    <nav className= {`d-flex justify-content-between p-3 m-2 border border-1 ${props.theme}`}>
        <div className="fw-bold fs-4"><img src={props.logo} width="30" height={30} /> {props.title} </div>
        <div className="fs-5">
            {
                props.menuItems.map(item=><span className="mx-3" key={item}><a> {item} </a></span>)
            }
        </div>
        <div>
            <button className="btn btn-warning bi bi-person-circle"> Signin </button>
        </div>
    </nav>
)
}