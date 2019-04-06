import React from 'react';
import RainBow from '../HOC/RainBow'

const AboutUs=(props)=>{
        console.log("*****AboutUs*****");
        console.log(props);
        return(
            <div className="bg-info border border-success">
            
            <div className="container">
            <span className="mt-100">
                About us:
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.
                react about us description goes here. This page is created to test react router.                
                </span>
                </div>
                </div>
        );
    
}

export default RainBow(AboutUs);