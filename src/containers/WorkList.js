import React from 'react';
import '../App.scss';
import WorkListItem from '../components/WorkListItem'

class WorkList extends React.Component {

  renderList = () => {
    return this.props.data.map(data => {
      return <WorkListItem 
        key={data.id}
        date={data.date}
        client={data.client}
        project={data.project}
        projectCode={data.projectCode}
        hours={data.hours}
        hoursRounded={data.hoursRounded}
        billable={data.billable}
        firstName={data.firstName}
        lastName={data.lastName}
        billableRate={data.billableRate}
      />
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