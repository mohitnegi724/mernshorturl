import React from 'react';
import ShortForm from './ShortForm';
import Shortlinks from './Shortlinks';

import '../Styles/ShortURLForm.css';

const ShortURLForm=() => {
  return (
    <div className="shortUrlContainer">
      <ShortForm/>
      <Shortlinks/>
      <div className="bottom">
        <a href="https://www.linkedin.com/in/mohitnegi724/" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/mohitnegi724/image/upload/v1565060602/Icons/linkedin_ipmb8v.svg" alt="Linkedin" /></a>
      </div>
    </div>
  )
}

export default ShortURLForm;