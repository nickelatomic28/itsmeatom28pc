'use strict';
var React= require('react');
var ReactDOM= require('react-dom');
require('./css/stylescomponent.css');
//import './css/stylescomponent.css'
var PComponent=require('./child');
//var About=require('./about');
import { About} from './about';
import { Home} from './home';
import { ContactUS} from './contactus';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';


class RouteDOM extends React.Component{

    render(){    
        return(
              <div>
                 
            <BrowserRouter>    
            <nav>
            <Link to={'/'}>Home</Link> | 
                  <Link to={'/contactus'}>Contact US page</Link> | 
                  <Link to={'/about'}>About us page</Link> | 
                </nav>
            
            <Switch>   
               <Route exact path="/" component={Home}/>
               <Route  path="/contactus" component={ContactUS}/>   
               <Route  path="/about" component={About}/>  
               </Switch>                  
            </BrowserRouter>
            
           </div>
        );
    }
}

class App extends React.Component{

    render(){    
        return(                 
               <RouteDOM/>               
        );
    }
}

 
var cheeseTypes=["greekChesse","mozerellea","goatCheese","cottonchesse"];
//setInterval(function(){
    //ReactDOM.render(<PComponent carname="Jaguar" cheeseList={cheeseTypes} />,document.getElementById("welcomeComponent"))
//},1000);

ReactDOM.render(<App/>,document.getElementById("welcomeComponent"))
