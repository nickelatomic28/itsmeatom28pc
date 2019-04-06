import React, { Component } from 'react';
//import './App.css';
import BlogsPosts from './Components/BlogsPosts'
import About from './Components/AboutUs'
import Contact from './Components/ContactUs'
import Home from './Components/Home'
import Header from './Components/Header'
import AddNinja from './Components/AddNinja'
import Samurais from './Components/Samurais'
import Post from './Components/Post'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter,withRouter } from 'react-router-dom'


class TestApp extends Component {
  
  // state={
  //   samurais:[
  //     {
  //       name:"nikhil",
  //       age:"30",
  //       belt:"black",
  //       id:Math.floor(new Date().valueOf() * Math.random())
  //     },
  //     {
  //       name:"Vinita",
  //       age:"25",
  //       belt:"pink",
  //       id:Math.floor(new Date().valueOf() * Math.random())
  //     }
  //   ]
  // }

  // addNinjatoList=(ninja)=>{
  //   console.log("addNinjatoList");    
  //   ninja.id=Math.floor(new Date().valueOf() * Math.random());
  //   console.log(ninja);
  //   let samurais=[...this.state.samurais,ninja];
  //   this.setState({
  //     samurais:samurais
  //   });
  // }
  // deleteSelectedNinjaFromList=(ninjaId)=>{
  //   console.log("Delete ninja =======>"+ninjaId);  
  //   const updatedNinjasList=this.state.samurais.filter((ninja)=> ninja.id!=ninjaId );
  //   this.setState({samurais:updatedNinjasList});
  // };

  
  render() {
    console.log("*****TestApp*****");
    return (
      <div>
        
        <BrowserRouter>   
          <div>         
          <Header/>             
          {/* <Route exact path='/' render={(props)=><Home {...props} 
            ninjas={this.state.samurais}
            deleteSelectedNinjaFromList={(ninjaId)=>this.deleteSelectedNinjaFromList(ninjaId)} 
            addNinjatoList={(ninja)=>this.addNinjatoList(ninja)} />} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact }  />
          <Route path='/posts' component={BlogsPosts}  />
          <Route path='/post/:post_id' component={Post}  />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default TestApp;

