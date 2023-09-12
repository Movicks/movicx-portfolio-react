import { useState, useEffect  } from 'react';
import "./Skills.css"

const Skills = () => {
  const [sanity, setSanity] = useState(0);
  const [IncReact, setIncReact] = useState(0);
  const [IncHtml, setIncHtml] = useState(0);
  const [IncCss, setIncCss] = useState(0);
  const [javascript, setJavascript] = useState (0);
  const [tailWind, setTailWind] = useState (0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sanity < 50) {
        setSanity(sanity + 1); // Increase progress by 1%
      }
      if (IncReact < 60) {
        setIncReact(IncReact + 1);// Increase progress by 1%
      }
      if (IncHtml < 88) {
        setIncHtml (IncHtml + 1); // Increase progress by 1%
      }
      if (IncCss < 70) {
        setIncCss (IncCss + 1);// Increase progress by 1% 
      }
      if (javascript < 65) {
        setJavascript (javascript + 1);// Increase progress by 1%
      }
      if (tailWind < 57) {
        setTailWind (tailWind + 1);// Increase progress by 1%
      }
    }, 250); // Update in 200 milliseconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [sanity, IncReact, IncHtml, IncCss, javascript, tailWind]);

  return (
    <div className='Skills-container'>
        <h1 className="heading">My<span> Skills</span></h1>
        <p className="aboutUs">I work hard to improve my skills on daily basics</p>
      <div className='Skills'>
       <div className='Skills-row'>
         <div className="progress-container">
            <div className="progress-label">
                <p className='Skill-set'>HTML</p>
                 <p>{IncHtml}%</p>
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${IncHtml}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
         <div className="progress-container">
            <div className="progress-label">
                 <p className='Skill-set'>CSS</p>
                 <p>{IncCss}%</p> 
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${IncCss}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
         <div className="progress-container">
            <div className="progress-label">
            <p className='Skill-set'>JAVASCRIPT</p>
                <p>{javascript}%</p>
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${javascript}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
      </div>
      <div className='Skills-row'>
         <div className="progress-container">
            <div className="progress-label">
                <p className='Skill-set'>REACT JS</p>
                 <p>{IncReact}%</p> 
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${IncReact}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
         <div className="progress-container">
            <div className="progress-label">
                 <p className='Skill-set'>SANITY</p>
                 <p>{sanity}%</p> 
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${sanity}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
         <div className="progress-container">
            <div className="progress-label">
                 <p className='Skill-set'>TailwindCSS</p>
                 <p>{tailWind}%</p> 
            </div>
            <div className="progress-bar">
                <div
                   style={{ width: `${tailWind}%` }}
                   className="progress-fill"
                />
            </div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Skills;
