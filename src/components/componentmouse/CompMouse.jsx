import axios from "axios";
import { useEffect, useState } from "react";
import './event-cursor.css';

export function CompMouse(){
const [mobiles, setMobiles] = useState([{img_src:''}]);
const [preview, setPreview] = useState('dotnet.png');
useEffect(()=>{
    axios.get("mobile.json")
    .then(response=> {
    setMobiles(response.data);
    })
})
   
function handleMouseOver(e){
setPreview(e.target.src);
}
return(
<div className="container-fluid">
<div className="mt-4 row">
<nav className="col-2">
{
mobiles.map(mobile=>
<div className="my-4 thumbnail" style={{width:'75px'}}
key={mobile.img_src}>
<img onMouseOver={handleMouseOver} width="70" height="70"
src={mobile.img_src} />
</div>
)
}
</nav>
<main className="col-10">
<img src={preview} width="35%" height="400"/>
</main>
</div>
</div>
)
}