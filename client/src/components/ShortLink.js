import React,{memo} from 'react';
import copy from 'clipboard-copy';
import "../Styles/Shortlink.css";


const ShortLink =(props) => {
  const openLinkIcon = "https://res.cloudinary.com/mohitnegi724/image/upload/v1565060496/Icons/external-link_jepauw.svg";
  const copyLinkIcon = "https://res.cloudinary.com/mohitnegi724/image/upload/v1565060487/Icons/copy_wxlgv9.svg";

  const {originalLink, identity, shortlinkid, createdDate} = props.url;
  const shortLinkURL = "http://tinylinks.herokuapp.com/"+shortlinkid;
  const slicedOriginalLink = originalLink.slice(0,20) + "....";
  const getCopied=()=>{
    copy(window.location.href + shortlinkid);
    alert("Link Copied!");
  };
  console.log("Short Link");
  return (
    <React.Fragment>
        <tr className="Row">
            <td>{slicedOriginalLink}</td>
            <td id={shortlinkid}><a href={shortLinkURL} target="_blank" rel="noopener noreferrer">{shortlinkid}</a></td>
            <td>{identity}</td>
            <td>{new Date(Number(createdDate)).toLocaleDateString()} || {new Date(Number(createdDate)).toLocaleTimeString()}</td>
            <td className="copyLink" onClick={()=>getCopied()}><img src={copyLinkIcon} alt="Copy Link Icon" className="copyLinkIcon"/></td>
            <td className="openLink"><a href={shortLinkURL} target="_blank" rel="noopener noreferrer"><img src={openLinkIcon} alt="Open Link Icon" className="openLinkIcon"/></a></td>
        </tr>
    </React.Fragment>
  )
}

export default memo(ShortLink);