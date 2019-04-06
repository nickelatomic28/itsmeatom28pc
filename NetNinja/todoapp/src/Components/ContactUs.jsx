import React from 'react';

export default class ContactUs extends React.Component{

    render(){
        console.log("*****ContactUs*****");
        console.log(this.props);
        return(
            <div className="bg-success border border-success">
            
            <span className="mt-100">
                Contact us:
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.                
                </span>
                </div>
        );
    }

}