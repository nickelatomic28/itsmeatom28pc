import React from 'react';


class Header extends React.Component{

    render(){
        return(
            <div className="headerwrapper">
            <nav className="header">
            <div class="header_logo">
                <span>Nomato</span>
            </div>
            <div className="headersearch">
                <input className="locationsearch" type="select"/>
                <input className="selectcriteria" type="select"/>
                <button  id="search" >Search</button>
            </div>
            <div className="accountlinks">
                <ul >                   
                    <li><div>Log in</div></li>
                    <li><div>Create an account</div></li>
                </ul>
            </div>
            </nav>
            </div>
        );
    }

}


export default Header;
