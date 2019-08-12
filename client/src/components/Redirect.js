import React, { Component,Fragment } from 'react';
import axios from 'axios';
import FileNotFound from './FileNotFound';
import '../Styles/Redirect.css';

class Redirect extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectLink: null
    };
    axios.get("/api/" + this.props.match.params.shortId).then(res =>{
      this.setState({
        redirectLink: res.data
      });
    });
  }
  
  render() {
    const redirectURL = this.state.redirectLink;
    const redirectFunc=()=>{
      if (redirectURL==="err"){
        return(
          <FileNotFound/>
        )
      }else{
        window.location = redirectURL;
      }
    };
    return (
      <Fragment>
        {this.state.redirectLink?redirectFunc():null}
      </Fragment>
    )
  }
}

export default Redirect;