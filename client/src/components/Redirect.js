import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Redirect.css';

class Redirect extends Component {
  state={
    redirectLink:null
  }
  render() {
    const redirectURL = this.state.redirectLink;
    const redirectFunc=()=>{
      window.location=redirectURL;
    }
    return (
      <div>
        {this.state.redirectLink?redirectFunc():null}
      </div>
    )
  }
  componentDidMount(){
    axios.get("/api/"+this.props.match.params.shortId).then(res=>this.setState({redirectLink:res.data}))
  }
}

export default Redirect;