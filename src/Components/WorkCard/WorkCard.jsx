import './WorkCard.css'

import { } from 'react';
import { Link } from 'react-router-dom';


const WorkCard = (props) => {
  return (
  <div className='Project-card2 bg-[#280c5c]'>
    <img src={props.Imgsrc} alt='bannerphoto'/>
    <h2 className='project-title'>{props.Title}</h2>
    <div className='pro-details'>
      <p>{props.Details}</p>
      <div className='pro-btns'>
        <Link to={props.Demo} className='btns'>Demo</Link>
        <Link to="" className='btns'>Source</Link>
      </div>
    </div>
  </div>
  );
}

export default WorkCard;
