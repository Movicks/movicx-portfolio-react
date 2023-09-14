import { } from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Movicx2 from '../../assets/Images/DevMovicxBanner.png';
import {} from '@mui/material';
import { AdsClick, 
    ArrowForward, 
    BusinessCenterOutlined, 
    CodeOffOutlined, 
    DiamondRounded, 
    Settings, 
    WorkOutlineRounded } from '@mui/icons-material';
    
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom'
import Banner from '../../Components/HeroBanner/Banner';
import Skills from '../../Components/Skills/Skills';
import StepSection from '../../Components/StepsSection/StepSection';

const Home = () => {
  return (
    <div className='Home'>
        {/* Navbar */}
        <Navbar />
         {/*Main section here  */}
        {/* <main> */}
        <Banner/>
        {/* </main> */}
        <div>
            <ul className='StarSkill md:flex justify-center'>
              <li className='Project-card text-small 
              leading-tight font-small font-300 p-2'>
                <div className="Collection p-4 bg-[#280c5c]">
                    <Settings className='skill_Icons'/>
                    <div className="text-lg 
                    leading-tight text-white-400 
                    font-semibold">Version Control (Git)<span className='text-white-400'></span></div>
                        <p className="mt-2 text-slate-500">
                            I am very proficient in using control systems like
                             (github) for code management, changes and collaborating with others.
                        </p>
                </div>
              </li>
              <li className='Project-card text-small 
              leading-tight font-small font-300 p-2'>
                <div className="Collection p-4 bg-[#280c5c]">
                    <WorkOutlineRounded className='skill_Icons'/>
                    <div className=" tracking-wide text-lg 
                    leading-tight text-white-400 
                    font-semibold">Creative <span className='text-white-400'>Work</span></div>
                        <p className="mt-2 text-slate-500">I go extra miles in finding innovative, creative and 
                        most effective solutions to designs and coding challenges.</p>
                </div>
              </li>
              <li className='Project-card text-small 
              leading-tight font-small font-300 p-2'>
                <div className="Collection p-4 bg-[#280c5c]">
                    <DiamondRounded className='skill_Icons'/>
                    <div className=" tracking-wide text-lg 
                    leading-tight text-white-400 
                    font-semibold">Time <span className='text-white-400'>Management</span></div>
                        <p className="mt-2 text-slate-500">I prioritize tasks assigned to me, 
                        so as to meet up with deadlines, and I manage the time-frame and
                         work efficiently towards achieving goals.</p>
                </div>
              </li>
            </ul>
        </div>
        <section className="about">
        <h1 className="heading">About<span> Me</span></h1>
        <p className="aboutUs">bringing your ideas to life through technology and innovation.</p>
        <div className="row justify-center">
            <div className="video-container">
                 <div className='video_row'>
                   <img src={Movicx2} alt='Photo' className='image' loading='lazy'/>
                 </div>
                 {/* <div className="image">
                    <img src="https://media.istockphoto.com/id/1456509727/photo/cybersecurity-and-privacy-concept-of-data-protection-secure-encryption-technology-secure.jpg?s=612x612&w=0&k=20&c=lkgJXoYhilvqHQBv9FUcJruZcPjQDUYQJ_T2Yo2LYDs=" alt="Movicks" />
                 </div> */}
            </div>
            <div className="content">
                <div>
                    <h2 className="heading text-start">
                       My Bio
                    </h2>
                    <p> Victor known as Movicx is a Front-end Developer, 
                        with skills in UI design and technical writing, 
                        who enjoys building interactive web pages that meets user needs.
                    </p>
                    <p>
                        Happy coding....     
                    </p>
                    <div className='btn-box' id='Aboutmee1'>
                        <a href="#" className="btn1">My CV</a>
                        <Link to='/movicx-portfolio-react/about' className="btn2" id='btn2'>
                            <button>More <ArrowForward className='Arrow'/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center align-center'>
            <div className='md:flex justify-center m-10'>
                <div className='flex'>
                   <div className='Experiences flex bg-[#280c5c] m-2 p-8'>
                     <h2>09</h2>
                        <div>
                            <p>Digital</p>
                            <p>Products</p>
                        </div>
                   </div>
                   <div className='Experiences flex bg-[#280c5c] m-2 p-8'>
                      <h2>20</h2>
                      <div>
                        <p>Direct</p>
                        <p>Clients</p>
                      </div>
                   </div> 
                </div>
                <div className='flex'>
                    <div className='Experiences flex bg-[#280c5c] m-2 p-8'>
                     <h2>12</h2>
                        <div>
                            <p>Total</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className='Experiences flex bg-[#280c5c] m-2 p-8'>
                     <h2>3M</h2>
                        <div>
                            <p>Lines</p>
                            <p>of Codes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Skills/>
        <section id='Services'>
            <h1 className="heading"><span>Services</span></h1>
            <p className="aboutUs">What I do for my clients</p>
            <div className='flex justify-center align-center'>
                <div className='md:flex justify-center m-7'>
                    <div className='flex'>
                        <div className='Client-services bg-[#280c5c] m-2 p-5 justify-center align-center text-center'>
                        {/* your icons here */}
                            <CodeOffOutlined className='Service-icon'/>
                            <p className='text-palettes-900'>Web Development</p>
                        </div>
                        <div className='Client-services bg-[#280c5c] m-2 p-5 justify-center align-center text-center'>
                            <BusinessCenterOutlined className='Service-icon'/>
                            <p>Digital Marketing</p>
                        </div>
                        <div className='Client-services bg-[#280c5c] m-2 p-5 justify-center align-center text-center'>
                            <AdsClick className='Service-icon'/>
                            <p>Social Media Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <StepSection/>
        <Footer/>
    </div>
  );
}

export default Home;
