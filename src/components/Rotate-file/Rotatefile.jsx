
import { useState } from 'react';
    export function Rotatefile(){

    const [styleObj, setStyleObj] = useState({animationName:'Rotate',
    animationDuration:'5s', animationIterationCount:'infinite',
    animationTimingFunction:'linear'});
    function handlMouseOver(){
    setStyleObj({animationName:'Rotate', animationDuration:'1s',
    animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handlMouseOut(){
    setStyleObj({animationName:'Rotate', animationDuration:'5s',
    animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handleMouseDown(){
    setStyleObj({animationName:'Zoom', animationDuration:'5s',
    animationTimingFunction:'linear', animationIterationCount:'infinite'});
    }
    return(
    <div className="container-fluid">
    <div className='d-flex bg-dark justify-content-center align-items-center'
    style={{height:'100vh'}}>
    <img onMouseDown={handleMouseDown} onMouseOut={handlMouseOut}
    onMouseOver={handlMouseOver} style={styleObj} src='flip-4.jpg' />
    </div>
    </div>
    )
    }