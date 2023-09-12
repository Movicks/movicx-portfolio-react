import { } from 'react';
import './StepSection.css';
import {} from '@mui/material';
import { BusinessOutlined, SchoolRounded, SchoolSharp, SchoolTwoTone, VideoCameraBackOutlined, WorkOutlineOutlined } from '@mui/icons-material';


const tickIcon = (
  <svg viewBox="0 0 512 512" width="100" title="check">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
    0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 
    432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 
    26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

const wizards = [
  {
    complete: false,
    number: <BusinessOutlined/>,
    title: 'Zuri Team',
    text:
      'Front end Internship',
  },
  {
    complete: false,
    number: <WorkOutlineOutlined/>,
    title: 'ZeroToMastery',
    text:
      'six months (front end)',
  },
  {
    complete: false,
    number: <VideoCameraBackOutlined/>,
    title: 'React Contents Creator / writer',
    text:
      'YouTube / Blogging (in view!)',
  },
];
const wizards2 = [
    {
      complete: false,
      number: <SchoolRounded/>,
      title: 'Bachelor Degree',
      text:
        'In view',
    },
    {
      complete: false,
      number: <SchoolTwoTone/>,
      title: 'British Columbia',
      text:
        'Ministry of Justice, British Columbia, Canada (2021)',
    },
    {
      complete: false,
      number: <SchoolSharp/>,
      title: 'Create Account',
      text:
        'Hello',
    },
  ];
function StepSection() {
  return (
    <>
    {/* <BusinessOutlined/> */}
    <h1 className="heading">Resume<span></span></h1>
        <p className="aboutUs">I work independently for my clients to by happy</p>
    <div className="wrapper">
      <div className='Steps-container'>
      <p className="title2">Experience</p>
      <div className="steps">
        {wizards.map((wizard, index) => (
          <div className="step" key={index}>
            <div className={`number ${wizard.complete && 'completed'}`}>
              {wizard.complete ? (
                <span dangerouslySetInnerHTML={{ __html: tickIcon }} />
              ) : (
                wizard.number
              )}
            </div>
            <div className="info">
              <p className="title">{wizard.title}</p>
              <p className="text">{wizard.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='Steps-container'>
      <p className="title2">Education</p>
      <div className="steps">
        {wizards2.map((wizard2, index) => (
          <div className="step" key={index}>
            <div className={`number ${wizard2.complete && 'completed'}`}>
              {wizard2.complete ? (
                <span dangerouslySetInnerHTML={{ __html: tickIcon }} />
              ) : (
                wizard2.number
              )}
            </div>
            <div className="info">
              <p className="title">{wizard2.title}</p>
              <p className="text">{wizard2.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
}

export default StepSection;
