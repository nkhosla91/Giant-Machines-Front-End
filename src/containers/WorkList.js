import React from 'react';
import '../App.css';
import WorkListItem from '../components/WorkListItem'

class WorkList extends React.Component {


  renderTableHeader() {
    let headers = ["Date", "Client", "Project", "Project Code", "Hours", "Hours rounded", "Billable", "First Name", "Last Name", "Billable Rate"]
    return headers.map(header =>{
       return <th key={header} onClick={this.onClickHandler}>{header}</th>
    })
  }

  renderList = () => {
    return this.props.data.map(data => {
      return <WorkListItem 
        key={data.id}
        id={data.id}
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
    
        <table id='work-table'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
                {this.renderList()}
           </tbody>
        </table>
     </div>
      )
    }//end of render

}//end of WorkList class
  
  export default WorkList;