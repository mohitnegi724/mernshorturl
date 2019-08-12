import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/NotFound.css';

const  NotFound=() => {
  return (
    <React.Fragment >
      <div className="notFoundCont">
        <Link to="/">
              <p className="text">
                Home
              </p>
        </Link>
        <div className="giphy">
          <iframe src="https://giphy.com/embed/42veFaIwEoPETh9gNB" frameBorder="0" className="giphy-embed" title="File Not Found">
          </iframe>
        </div>
      </div>
    </React.Fragment>
  )
}


export default NotFound;