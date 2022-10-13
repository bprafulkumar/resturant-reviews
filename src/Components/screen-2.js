import React from "react";
import './screen-2.css'
import { Link } from "react-router-dom";

const Thankyoupart = () => {
    return(
        <div>
           <div className="Thankyoupart">
      <div className='thankyou-container'>
      {/* <i id="tick-icon" class="fa-sharp fa-solid fa-circle-check"></i> */}
      <i id="tick-icon" class="fa-sharp fa-solid fa-circle-check"></i>
        <h3>Thank you for providing the feedback</h3>
        <p>We will work towards improving your experience</p>
        <Link to={"/"}><button className='close-btn'>Close</button></Link>
      </div>
    </div>
        </div>
    )
}

export default Thankyoupart