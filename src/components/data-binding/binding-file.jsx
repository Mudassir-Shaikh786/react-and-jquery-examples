import { useEffect, useState } from "react";

export function BindingFile(){
    
    const [age, setAge] = useState();

    useEffect(()=>{

       setAge(22);

    }, []);

    return(
        <div className="container-fluid">
              <p>{(age)?age:"Please enter age"}</p>
        </div>
    )
}
