import React from 'react';
import '../App.css';
import WorkListItem from '../components/WorkListItem'

class WorkList extends React.Component {

  renderList = () => {
    return this.props.data.map(data => {
      return <WorkListItem firstName={data.firstName}/>
    })
  }
    render () {
      return (
        <div>
          {this.renderList()}
        </div>
      )
    }//end of render
}//end of WorkList class
  
  export default WorkList;