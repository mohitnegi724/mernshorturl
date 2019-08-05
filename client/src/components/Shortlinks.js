import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchLinks} from '../Actions/Actions';
import ShortLink from './ShortLink';
import "../Styles/Shortlinks.css";

class Shortlinks extends Component {
  render() {
    const {Links} = this.props;
    console.log("Links", Links.length)
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
              <th>identity</th> 
              <th>Creation Date</th>
              <th>Copy url</th>
              <th>Open Link</th>  
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