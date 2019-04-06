import React from 'react';
import './Nomato.css';

class Footer extends React.Component{

    render(){
        return(
            <div id="wrapperFooter">
            <div class="footer">
            <div class="row">
                <div class="row-w1">
                    <h3 class="footer-top" tabindex="0">
                        <a class="logo--header" href="#" title="Find the best restaurants, cafés, and bars">Nomato</a>    
                    </h3>
                </div>                                
            </div>
            <div class="footer_divider"></div>
            <div class="row footer_policy_links">
                <div class="col-m-12">
                    <ul class="footer_horiz_list">
                       <li>
                            <a href="#">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                API Policy
                            </a>
                        </li>
                         <li>
                            <a href="#">
                                CSR
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Security
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="social-container col-m-4">
                    <a target="_blank" href="https://twitter.com/zomato"><div class="social-icons twitter" data-icon="t"></div></a>
                    <a target="_blank" href="https://www.instagram.com/zomato/"><div class="social-icons instagrm" data-icon="4"></div></a>
                    <a target="_blank" href="https://www.facebook.com/zomato"><div class="social-icons facebook" data-icon="¶"></div></a>
                </div>
            </div>    
            <div class="footer_divider"></div>
            <div class="footer-bottom row">
                <div class="footer-msg">
                                       By continuing past this page, you agree to our <a href="#" rel="nofollow">Terms of Service</a>, <a href="http://www.zomato.com/cookiepolicy" rel="nofollow">Cookie Policy</a>, <a href="http://www.zomato.com/privacy" rel="nofollow">Privacy Policy</a> and <a href="http://www.zomato.com/policies" rel="nofollow">Content Policies</a>. All trademarks are properties of their respective owners. © 2008-2019 - <a href="http://www.zomato.com">Nomato</a>™ Media Pvt Ltd. All rights reserved.
                                </div>
            </div>            
        </div>
        </div>
        );
    }

}


export default Footer;
