import { useState } from 'react';
export function Eventmove(){
const [styleObj, setStyleObj] = useState({position:'', left:'', top:''});
function handleMouseMove(e){
setStyleObj({position:'fixed', left:e.clientX + 'px', top:e.clientY + 'px'});
}
return(
<div className="container-fluid" onMouseMove={handleMouseMove}>
<div style={{height:'1000px'}}>Move your mouse pointer to test</div>
<img style={styleObj} src='giff.gif' width="50" height="50" />
</div>
)
}