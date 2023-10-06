import {Link} from 'react-router-dom'

import {MdMarkEmailUnread} from 'react-icons/md'
import {
  BiMessageRoundedDetail,
  BiMobile,
  BiSolidPhoneCall,
} from 'react-icons/bi'
import './index.css'

const Header = () => (
  <div>
    <div className="h-contact-details">
      <div className="h-contact-detail">
        <p className="h-contact">
          <BiSolidPhoneCall /> +91-9540349392
        </p>
        <p className="h-contact">
          <MdMarkEmailUnread />
          contact@schoolaura.com
        </p>
      </div>
      <div className="h-contact-detail">
        <button className="h-watsapp">
          <BiMessageRoundedDetail /> Watsapp{' '}
        </button>
        <button className="h-mobileapp">
          <BiMobile /> Mobile App
        </button>
        <button className="h-button">Login</button>
        <button className="h-button">Register</button>
      </div>
    </div>
    <nav className="header">
      <img
        className="h-logo"
        alt="logo"
        src="https://schoolaura.com/Content/assets/images/logo_school.png"
      />
      <Link to="/" className="h-para">
        Home
      </Link>
      <Link to="/ExamSolution" className="h-para">
        Exam Solution
      </Link>
      <Link to="/Onlinestudy" className="h-para">
        Online study
      </Link>
      <Link to="/TutorSolution" className="h-para">
        Tutor Solution
      </Link>
      <Link to="Blogs" className="h-para">
        Blogs
      </Link>
      <Link to="ContactUs" className="h-para">
        Contact Us
      </Link>
      <button className="h-button">School management</button>
    </nav>
  </div>
)
export default Header
