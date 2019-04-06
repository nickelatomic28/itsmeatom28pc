import React from 'react'
import PasswordField from './passwordComponent'

const MentorSpecificForm=()=>{
    return(
    <div>
    <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="experience">Experience</label>
        <div className="col-sm-10">
            <select id="experience" className="custom-select">
                <option value>Select years of Experience</option>
                <option value="5">5</option>
                <option value="10">10</option>                    
            </select>
        </div>        
        </div>
        <PasswordField/> 
        <button type="submit" className="btn btn-primary">Register</button>
    </div>  
    
    );
}

export default MentorSpecificForm;