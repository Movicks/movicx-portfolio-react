import {  } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroImg2 from '../../Components/HeroImg2/HeroImg2';
import Footer from '../../Components/Footer/Footer';
import './Blog.css';

const Blog = () => {
  
  return (
    <div className='Blog'>
      <Navbar/>
         <HeroImg2 heading="BLOG" text="Hello World"/>
      <Footer/>
    </div>
  );
}

export default Blog;
