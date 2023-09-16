import { } from 'react'
import './Banner.css'
import Movicx from '../../assets/Images/DevMovicxBanner.png';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='Hero-Img1'>
      <div className='Hero-heading1'>
         <div className='mainContainer1 md:flex mt-10'>
            <div className='Home-content1 justify-center'>
               <h1>Hi, I'm <span className='Victor'>Victor</span> Idepe</h1>
               <h3>Frontend Developer</h3>
               <p>I am a React js developer and 
                  I enjoy building innovative and 
                  responsive websites that solves problems for my clients.
               </p>
               <div className='btn-box'>
                  <Link to='/movicx-portfolio-react/projects'>Projects</Link>
                  {/* <a href=''>Projects</a> */}
                  <a href='mailto:victoride013@gmail.com'>Hire me</a>
               </div>
               <div className='imageContainer'>
                    <img src={Movicx} alt='BannerImage' className='bannerImage'/>
                    {/* <div className='color-Box'></div> */}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default Banner;
