import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchLinks} from '../Actions/Actions';
import ShortLink from './ShortLink';
import "../Styles/Shortlinks.css";

class Shortlinks extends Component {
  render() {
    const {Links} = this.props;
    const showLinks = () => {
      return Links.map(url=>{
        return(
          <React.Fragment key={url.shortlinkid}>
            <ShortLink url={url}/>
          </React.Fragment>
        );
      });    
    };
    const checkLinks=()=>{
      if(Links.length>0){
        return(
          <table>
          <thead>
            <tr>
              <th>Original Link</th>
              <th>Short Id</th>
              <th>Name</th> 
              <th>Date</th>
              <th className="copyLink">Copy</th>
              <th className="openLink">Open</th>  
            </tr>
          </thead>
          <tbody>
            {showLinks()}
          </tbody>
        </table>
        )
      }else{
        return(
          <h3>There Is No Shortlinks! Create One.</h3>
        )
      }
    }
    return (
      <div className="ShortlinksContainer">
        {checkLinks()}
      </div>
    )
  }
  componentDidMount(){
    this.props.dispatchfetchLinks();
  }
}

const mapStateToProps=state=>{
  return{
    Links:state.Links
  }
}

const mapDispatchToprops={
  dispatchfetchLinks: fetchLinks
}

export default connect(mapStateToProps, mapDispatchToprops)(Shortlinks);