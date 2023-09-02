import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header">
      <div>
        <ul className="headers-items">
          <Link to="/" className="link-text">
            <li> Home </li>
          </Link>
          <Link to="/about" className="link-text">
            <li> About </li>
          </Link>
          <Link to="/schedules" className="link-text">
            <li> Schedules </li>
          </Link>
          <Link to="/membership" className="link-text">
            <li> Membership </li>
          </Link>
          <Link to="/pricing" className="link-text">
            <li> Pricing </li>
          </Link>
        </ul>
      </div>
      <div className="header-offers">
        <Link to="/offers" className="link-text">
          <p> Offers </p>
        </Link>
        <button type="button" className="course-button">
          Courses
        </button>
      </div>
    </div>
  </div>
)

export default Header
