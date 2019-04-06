import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import PokeBall from '../pokeball.png'
import {connect} from 'react-redux';


class BlogsPosts extends React.Component{

    // state={
    //     posts:[]
    // }
    // componentDidMount(){
        
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({posts:res.data.slice(0,10)});
            
    //     });
    // }

    render(){
        console.log("*****BlogsPosts*****");
        console.log(this.props);        
        return(this.props.posts.length?
            <div >                
                {this.props.posts.map((post,key)=>
                <div className='mt-2 w-50 post card container' style={{overflow:'hidden'}} key={post.id}>
                 <img src={PokeBall} className='position-absolute'  style={{top:10,left:-100,opacity:0.6}}/>               
                <Link to={'/post/'+post.id}>
                 <div className="card-body">                 
                    <span className="card-text" >{post.body}</span>
                    </div>
                    </Link>
                </div>
                )}
            </div>:<div className="container card-text"><p>No posts</p></div>
        );
    }
}

const mapStatetoProps=(state)=>{
    
    console.log("In side BlogsPosts jsx MAP TO PROPS FUNCTION")  
    return{...state};
}

const mapdispatchToPost=(dispatch)=>{
    console.log("In side BlogsPosts jsx DISPATCH TO PROPS FUNCTION")
    return{
     getPost: (id)=>{
         dispatch({type:"GET_POST",id:id})
     }   
    };

}
export default connect(mapStatetoProps,mapdispatchToPost)(BlogsPosts);