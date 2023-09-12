import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import ContactUs from './Pages/ContactUs/ContactUs'
import Blog from './Pages/Blog/Blog'
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Switch>
    </Router> 
    </>
  )
}

export default App
