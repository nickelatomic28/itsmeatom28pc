import React from 'react';
import FilterPanel from './FilterPanel';
import Card from './Card';
import PopularCard from './PopularCard';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboardwrapper">
                <div className="dashboard">
                    <FilterPanel/>
                
                        <div className="cardsBox">
                           <Card/>   
                           <Card/>  
                           <Card/>  
                           <Card/>  
                           <Card/>  
                           <Card/>  
                           <Card/>  
                           <Card/>                           
                        </div>                        
                    
                    <div className="sponsored_card">
                            {/* <span>SPONSORED & POPULAR</span> */}
                            <div className="popular_header"><p>SPONSORED & POPULAR</p></div>
                            <div className="PopularCard_box">
                                    <PopularCard/>
                                    <PopularCard/>
                                    <PopularCard/>
                                    <PopularCard/>
                                    <PopularCard/>
                                    <PopularCard/>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}



export default Dashboard;