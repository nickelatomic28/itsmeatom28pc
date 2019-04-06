import React from 'react'


class Notifications extends React.Component{

    render(){
        return(
            <div className="col">
                   <div className="mt-2 card" style={{width: '80%'}}>
                    <div className="card-body">
                        <h5 className="card-title">Project Name</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Subject</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </div>
                    </div>
                   </div>  
        );
    }
}


export default Notifications;