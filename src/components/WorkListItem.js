import React from 'react';
import '../App.css';

class WorkListItem extends React.Component {


    render () {
      return (
        <div>
            <p>{this.props.firstName}</p>
        </div>
      )
    }//end of render
}//end of WorkList class
  
  export default WorkListItem;