import React from 'react'
import PasswordField from './passwordComponent'

const StudentSpecificForm=()=>{
    return(   
           
        <div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="standard">Standard</label>
                    <div className="col-sm-10">
                        <select id="standard" className="custom-select">
                            <option value>Select the standard which you are studing</option>
                            <option value="10">x</option>
                            <option value="9">9</option>                    
                        </select>
                    </div>    
                </div>
                <PasswordField/> 
                <button type="submit" className="btn btn-primary">Register</button>
        </div>
    
    );
}

export default StudentSpecificForm;