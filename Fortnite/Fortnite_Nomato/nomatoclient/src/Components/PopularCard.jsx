import React from 'react';
import './cb.jpg';


class PopularCard extends React.Component{

    render(){
        return(
            <div className="popular_card">
                <div className="popular_card_img">
                    <div className="popular_box_img">
                        <div className="popular_box_rating">
                        4
                        </div>
                    </div>                    
                </div>
                <div className="popular_box_description">
                    <div className="popular_box_description_1">
                    <p>The Fisherman's Wharf</p>
                    </div>
                    <div className="popular_box_description_2">
                        <p>GACHIBOWLI, HYDERABAD The ultimate Goan lunch buffets ! Call now !</p>
                    </div>
                </div>
            </div>
        );
    }

}


export default PopularCard;