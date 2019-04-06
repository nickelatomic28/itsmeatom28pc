import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import './Nomato.css';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
        );
    }
}


export default Home;