import { Component } from 'react'; // Import Component
import { Menu, Cancel } from '@mui/icons-material'; // Import specific icons from MUI
import './Navbar.css';
import DevMovicx from '../../assets/Images/DevMovicx.png';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  constructor() {
    super();
    this.state = { clicked: false }; // this Initialize state in the constructor
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <header>
        <Link to='/'>
           <img src={DevMovicx} alt="logo" className="logo" />
        </Link>
        <div className="toggleIconMenu">
          {/* conditional rendering for the icon */}
          {this.state.clicked ? (
            <Cancel className="toggleIcon" onClick={this.handleClick} />
          ) : (
            <Menu className="toggleIcon" onClick={this.handleClick} />
          )}
        </div>
        <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
          {/* this runs a loop for the navbar links */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                 <button>
                  {item.title}
                 </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}

export default Navbar;
