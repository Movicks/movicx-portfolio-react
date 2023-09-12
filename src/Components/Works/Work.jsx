
import { } from 'react';
import { WorkCardData } from './WorkCardData';
import WorkCard from '../WorkCard/WorkCard';
import './Work.css'

const Work = () => {
  return (
      <div className="work-container">
        <h1 className='Project-heading'>Most Recent Projects</h1>
        <div className='Project-container m-5 md:flex justify-center'>
          {WorkCardData.map((item, index) =>{
            return(
                <WorkCard 
                key={index} 
                Imgsrc={item.Imgsrc} 
                Title={item.Title} 
                Details={item.Details} 
                Demo={item.Demo}/>
            )
          })}
        </div>
      </div>
  );
}

export default Work;
