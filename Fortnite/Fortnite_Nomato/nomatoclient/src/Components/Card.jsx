import React from 'react';
import header_image from './cb.jpg';

class Card extends React.Component{
    render(){
        return(
            <div className="_card">
                <div className="card_header">
                    <div className="header_image">
                    {/* <img src={header_image} className="header_image_logo" alt="header_image_logo" /> */}
                    </div>
                    <div className="header_subject">
                        <div className="subject_row1">
                            <div className="subject_row_left">
                                <p className="subject1">CASUAL DINING</p>
                                <p className="subject2">Paradise</p>
                                <p className="subject3">Gachibowli</p>
                            </div>
                            <div className="subject_row_right">
                                <div className="subject_ratings">4.5</div>
                                <div className="subject_votes">5653 votes</div>
                            </div>
                        </div>
                        <div className="subject_row2">
                            <p className="subject_address">Plot 22-23, Vinayaknagar, Gachibowli Main Road, Gachibowli.</p>
                        </div>
                    </div>
                </div>
                <div className="card_details">
                    <div className="card_details_info_key">
                        <p>CUISINES:</p>
                        <p>COST FOR TWO:</p>
                        <p>HOURS:</p>
                        <p>FEATURED IN:</p>
                    </div>                    
                    <div className="card_details_info_value">
                        <p>Biryani, North Indian, Chinese</p>
                        <p>₹800</p>
                        <p>11am – 11pm (Mon-Sun)</p>
                        <p>Hyderabad's Hottest</p>
                    </div>
                </div>
                <div className="card_infos">
                    <div className="card_info">
                        <span class="data_icon">Call</span>
                    </div>
                    <div className="card_info">
                        <span class="data_icon">View Menu</span>
                    </div>
                    <div className="card_info">
                        <span class="data_icon">Order Now</span>
                    </div>                    
                </div>
            </div>
        );
    }
}



export default Card;