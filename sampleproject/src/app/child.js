'use strict';
var React= require('react');
var ReactDOM= require('react-dom');

function Ticktokclock(props){
    const clock=
    <div>
    <h1>Clock:{props.clockname}</h1>
    <h2> its {new Date().toLocaleTimeString()} </h2>
    </div>;
    return(clock );       
}
//setInterval(function(){
    // ReactDOM.render(<Ticktokclock clockname={"Nikhil"}/>,document.getElementById("welcomeComponent"))
//},1000);

 class Car extends React.Component{
    render(){
    return (<h1>car:{this.props.carname}</h1>);
    }
}

class AlaramClock extends React.Component{
    
    constructor(props){
        super(props);
        this.state={alaramclockTime:new Date(),counter:0};
    }
    /*
    componentDidMount(){
        var that=this;
        this.timerId=setInterval(function(){
            that.tick()},1000);
    }*/    
    componentDidMount(){
        this.timerId=setInterval(()=>this.tickIncrement(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
     tickIncrement (){
        this.tick();
        this.increment();
    }
    increment(){
        this.setState((state,props)=>({
            counter:state.counter+1        
        }))
       // this.setState({counter:this.state.counter+1});        
    }
    tick(){
        this.setState({alaramclockTime:new Date()});
    }
        render(){        
            return(
            <div>
                <p>======================================================================</p>
                                      Alaram Clock  {this.state.counter}                              
                <h2>{this.state.alaramclockTime.toLocaleTimeString()}</h2>                
                <p>======================================================================</p>
            </div>
            );           
        }
}
//ReactDOM.render(<Car/>,document.getElementById("welcomeComponent"))

class ListOfCheese extends React.Component{
    

    render(){
            var Listcheese=this.props.cheeseList;
            Listcheese=Listcheese.map(function(item,index){
                console.log(item);
               return  <li>{index} {item}</li> ;
            });
            //console.log(Listcheese)
            return Listcheese;
            
    }
}

var PComponent= class ParentComponent extends React.Component{
    render(){        
        console.log(this.props);
        const element=
        <div>
            <Ticktokclock clockname={this.props.clockname}/>
            <Car carname={this.props.carname}/>
            <AlaramClock/>
            <ul>
                <ListOfCheese cheeseList={this.props.cheeseList}/>
            </ul>
        </div>;
        return(element);
      }
}
module.exports=PComponent;
//ReactDOM.render(<ParentComponent/>,document.getElementById("welcomeComponent"))

//module.exports=ParentComponent;