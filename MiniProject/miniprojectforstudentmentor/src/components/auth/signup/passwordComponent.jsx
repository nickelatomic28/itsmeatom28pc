import React from 'react'

const PasswordField=()=>{
    return(
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="password">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div> 
         </div>  
    );
}

export default PasswordField;