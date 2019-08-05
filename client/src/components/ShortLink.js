import React from 'react';
import {Link} from 'react-router-dom';
import clipboard from 'clipboard';
import "../Styles/Shortlink.css";

const ShortLink =(props) => {
  const openLinkIcon="https://res.cloudinary.com/mohitnegi724/image/upload/v1565004581/Icons/openlink.png";
  const copyLinkIcon="https://res.cloudinary.com/mohitnegi724/image/upload/v1565004967/Icons/copy_n18ckz.png";

  const {originalLink, identity, shortlinkid, createdDate} = props.url;
  const shortLinkURL = window.location.href+shortlinkid;
  const slicedOriginalLink = originalLink.slice(0,20) + "....";
  return (
    <React.Fragment>
        <tr className="Row">
            <td>{slicedOriginalLink}</td>
            <td id={shortlinkid}><a href={shortLinkURL} target="_blank" rel="noopener noreferrer">{shortLinkURL}</a></td>
            <td>{identity}</td>
            <td>{new Date(Number(createdDate)).toLocaleDateString()}</td>
            <td className="copyLink"><img src={copyLinkIcon} alt="Copy Link Icon" className="copyLinkIcon"/></td>
            <td><a href={shortLinkURL} target="_blank" rel="noopener noreferrer"><img src={openLinkIcon} alt="Open Link Icon" className="openLinkIcon"/></a></td>
        </tr>
    </React.Fragment>
  )
}

export default ShortLink;