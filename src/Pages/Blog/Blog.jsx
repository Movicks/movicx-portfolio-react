import {  } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroImg2 from '../../Components/HeroImg2/HeroImg2';
import Footer from '../../Components/Footer/Footer';
import './Blog.css';
import BlogCards from '../../Components/Blogposts/BlogCards';

const Blog = () => {
  
  return (
    <div className='Blog'>
      <Navbar/>
         <HeroImg2 heading="EXPLORING TECH" text="Your Source for Tech Insights"/>
         <BlogCards/>
      <Footer/>
    </div>
  );
}

export default Blog;
