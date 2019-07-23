import React, { Component, Fragment } from "react";

class DisplayComments extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <ul>
          <li>{this.props.comments}</li>
        </ul>
      </Fragment>
     );
  }
}
 
export default DisplayComments;
