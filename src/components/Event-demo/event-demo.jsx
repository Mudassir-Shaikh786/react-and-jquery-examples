import { useState } from "react"

export function EventDemo(){

    const [Name, setName] = useState('TV');
    const [nameError, setNameError]= useState('');

    function handleChange(e){
        setName(e.target.value)
    }
    function handleBlur(e){
        if(e.target.value.length===0){
            setNameError('Name Required');
        } else {
            setNameError('');
            setName(e.target.value.toUpperCase());
        }
    }

    function handleFocus (){
        setNameError('Name in Block Letters');
    }

    return(
        <div className="container-fluid" >
            <h3>Two way binding</h3>
            <dl>
                <dt>Product Name</dt>
                <dd><input type="text" value={Name} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} /></dd>
                <dd className='text-danger'>{nameError}</dd>
            </dl>
            <h3>Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{Name}</dd>
            </dl>
        </div>
    )
}