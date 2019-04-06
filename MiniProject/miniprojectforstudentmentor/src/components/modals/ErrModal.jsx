import React from 'react'
import {closeError} from '../../actions/ErrorActions'
import {connect} from 'react-redux'

class ErrModal extends React.Component{
    render(){
        console.log(this.props);        
        var error=this.props.message;
        console.log(error)
        return(
        <div className="modal modal-fade show" style={{display:'block',background: 'rgba(0, 0, 0, .7)'}} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Message:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {error}
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={this.props.closeError} className="btn btn-secondary" data-dismiss="modal">Close</button>                
                </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{closeError})(ErrModal);