export function Demo(){
    return(

        <header>

<button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-dark" > click for expore</button>

        
        <div className="modal fade " id="cart">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header flex-column">
                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                        <h2 className="fw-bold text-bg-primary">Mudassir Shaikh</h2>
                     
                        <div className="modal-body">
                        <img height={100} src='ds.png'></img>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger">Finish it</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}