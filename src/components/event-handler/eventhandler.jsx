import { useState } from "react"
export function Eventhandler(){
const [styleObj, setStyleObj] = useState({color:'black'});
function handleMouseover(e){
setStyleObj({color:e.target.id});
}
function handleMouseOut(){
setStyleObj({color:'black'});
}
return(
<div className="container-fluid">
<h3>Mouse Events</h3>
<div className="d-flex p-4 text-white text-center">
<div onMouseOut={handleMouseOut} id="red"
onMouseOver={handleMouseover} style={{width:'100px',
backgroundColor:'red'}}>Red</div>
<div onMouseOut={handleMouseOut} id="green"
onMouseOver={handleMouseover} style={{width:'100px',
backgroundColor:'green'}}>Green</div>
<div onMouseOut={handleMouseOut} id="blue"
onMouseOver={handleMouseover} style={{width:'100px',
backgroundColor:'blue'}}>Blue</div>
</div>
<h1 style={styleObj}>Sample Text</h1>
</div>
)
}