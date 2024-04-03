import React from "react";
import './BlogStyles.css';

function BlogCards(){
    return(
        <div className="Posts-container">
           <div className="Posts-Row">
              <div className="Left-container-div">
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png"/>
                 <div className="Date-Share-container">
                    <div className="Div-1-container">
                       <ul>
                         <li>12</li>
                         <li>September</li>
                       </ul>
                    </div>
                    <div className="Div-2-container">
                    <div className="S-Icons">
                    <a href="#">View</a>
                    <a href="#">Favourite</a>
                    <a href="#">Message</a>
                    <a href="#">Share</a>
                  </div>
                    </div>
                 </div>
              </div>
              <div className="Right-container-div">
                 Right
              </div>
           </div>
        </div>
    )
}
export default BlogCards;