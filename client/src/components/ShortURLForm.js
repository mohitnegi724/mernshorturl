import React from 'react';
import ShortForm from './ShortForm';
import Shortlinks from './Shortlinks';

import '../Styles/ShortURLForm.css';

const ShortURLForm=() => {
  return (
    <div className="shortUrlContainer">
      <ShortForm/>
      <Shortlinks/>
    </div>
  )
}

export default ShortURLForm;