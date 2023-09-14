import './App.css'
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';

const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Blog = lazy(() => import("./Pages/Blog/Blog"))

function App() {
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
       <Route exact path="/movicx-portfolio-react/" element={<Home />} />
       <Route path="/movicx-portfolio-react/about" element={<About />} />
       <Route path="/movicx-portfolio-react/projects" element={<Projects />} />
       <Route path="/movicx-portfolio-react/contacts" element={<ContactUs />} />
       <Route path="/movicx-portfolio-react/blog" element={<Blog />} />
      </Routes>
    </Suspense>
    </>
  )
}

export default App;
