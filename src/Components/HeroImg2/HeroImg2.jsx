import { } from 'react';
import './HeroImg2.css'

const HeroImg2 = ({ heading, text }) => {
  return (
    <div className='Hero-Img'>
      <div className='Hero-heading'>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default HeroImg2;
