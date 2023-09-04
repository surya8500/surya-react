import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function Input(){

    return(
        <div className="input-group input-group-lg">
            <form >
            User Name:  <input type="text" name="user"   className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" /> 
        <p/>
        <input type="text" name="pw" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" /> pasword
        <p/>  
            <button  className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}

export default Input