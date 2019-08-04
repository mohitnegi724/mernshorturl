import React from 'react';
import "../Styles/Shortlinks.css";

const ShortLink =(props) => {
  const {originalLink, identity, shortlinkid, createdDate} = props.url;
  return (
    <React.Fragment>
        <tr className="Row">
            <td>{originalLink}</td>
            <td>{shortlinkid}</td>
            <td>{identity}</td>
            <td>{new Date(Number(createdDate)).toLocaleDateString()}</td>
            <td>Copy URL</td>
            <td>Open</td>
        </tr>
    </React.Fragment>
  )
}

export default ShortLink;