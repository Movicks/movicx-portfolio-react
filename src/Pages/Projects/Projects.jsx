import { } from 'react';
import HeroImg2 from '../../Components/HeroImg2/HeroImg2';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Project.css'
import Work from '../../Components/Works/Work';

const Projects = () => {
  return (
    <div className='Project-Page'>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Building innovative user friendly projects that meets clients needs."/>
      <Work/>
      <Footer />
    </div>
  );
}

export default Projects;
