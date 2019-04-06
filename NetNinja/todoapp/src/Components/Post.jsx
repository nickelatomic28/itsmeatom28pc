import React from 'react';

import {connect} from 'react-redux';


class Post extends React.Component{

    // state={
    //     post:null
    // }
    // componentDidMount(){
    //     console.log(this.props);
    //     console.log(this.props.match.params.post_id);
    //     const id=this.props.match.params.post_id;
        
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res=>{
    //         this.setState({post:res.data});
    //     })

    // }

    handleClick=()=>{
            console.log("handle click");
            this.props.deletePost(this.props.post.id)
            this.props.history.push('/posts');
    }

    render(){
        console.log("*****:Post/id*****");
        console.log(this.props);
        const post_body=this.props.post?(
        <div className="container">
        <div className='mt-2 w-50 post card container'>
                 <div className="card-body">
                    <span className="card-text" >{this.props.post.body}</span>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Delete</button>
                </div>
        </div>
        ):(<div className="container">Loadding....</div>);
        return(
            <div className="container">
                {post_body}
            </div>
        );
    }
}

const mapStatetoProps=(state,ownProps)=>{
    console.log("In side :Post/id jsx MAP TO PROPS FUNCTION")  
    console.log(state);
   console.log(state.posts);
    let id=ownProps.match.params.post_id;
    console.log("post_id: "+id);
    //console.log(state.posts.find(post=>post.id===id));
    return {
        ...state,
        post: state.posts.find((post)=>{
            return post.id==id;
        })        
    }
};


const mapdispatchToPost=(dispatch)=>{
    console.log("In side :Post/id jsx DISPATCH TO PROPS FUNCTION")
    return{
     deletePost: (id)=>{
         dispatch({type:"DELETE_POST",id:id})
     }   
    };

}
export default connect(mapStatetoProps,mapdispatchToPost)(Post); 