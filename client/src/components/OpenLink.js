import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchLink} from '../Actions/Actions';

class OpenLink extends Component {
  render() {
  const shortId = this.props.match.params.shortid;
  this.props.dispatchfetchLink(shortId);
    return (
        <div>
            <p>Open Link</p>
        </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    Links:state.Links,
    Link: state.Link
  };
};

const mapDispatchToprops={
  dispatchfetchLink: fetchLink
};

export default connect(mapStateToProps, mapDispatchToprops)(OpenLink);