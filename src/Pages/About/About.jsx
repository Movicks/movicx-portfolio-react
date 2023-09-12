import { } from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Movicx2 from '../../assets/Images/DevMovicxBanner.png';
import Footer from '../../Components/Footer/Footer';
import HeroImg2 from '../../Components/HeroImg2/HeroImg2';


const About = () => {
  return (
    <div className='About_page'>
      <Navbar/>
      <HeroImg2 heading="About Me" text="Digital agent that brings your 
        ideas to life through technology and innovation." className="HeroImg2"/>
    <section className="about">
        {/* <HeroImg2 heading="About Me" text="Digital agent that brings your 
        ideas to life through technology and innovation."/> */}
        {/* <h1 className="heading">About<span> Me</span></h1> */}
        {/* <p className="aboutUs">Digital agent that brings your 
        ideas to life through technology and innovation.</p> */}
        <div className="row">
            <div className="video-container">
                 <div className='video_row'>
                   <img src={Movicx2} alt='Photo' className='image' loading='lazy'/>
                 </div>
            </div>

            <div className="content">
                <h3 className='text-center'>Why choose me?</h3>
                <div>
                    <h2 className="heading">
                        <span className="onaiB">Anywhere</span> and <span className="onai2">anytime</span> i provide<span className="onai2"> professional</span> solutions.
                    </h2>
                    <p>Victor known as Movicx is a Front-end Developer, 
                        with skills in UI design and technical writing, 
                        I enjoy building interactive and responsive webpages that solves human problems. with a background in customer service,
                         Tech training & support, content writing, Project management etc.
                         I am able to add value and build a dynamic career by developing
                         scalable tech solutions that address specific user needs. I am always ready learn and improve the more to be a world-class developer in tech space.
                    </p>
                    <p>
                        I can build and maintain websites, implementing responsive designs, 
                        optimizing websites performance and collaborating with any Development team to implement new features and fix bugs.
                    </p>
                    <p>
                        Happy coding....     
                    </p>
                    <div className='onai5'>
                        <a href="myCV/Professional Resume - 01.pdf" className="btn">See my CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Footer/>
    </div>
  );
}

export default About;
