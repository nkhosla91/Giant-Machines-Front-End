import React from 'react';
import '../App.css';
import WorkListItem from '../components/WorkListItem'

class WorkList extends React.Component {


  renderTableHeader() {
    let headers = ["Name", "Project", "Hours", "Billable", "Billable Amount"]
    return headers.map(header =>{
       return <th key={header} value={header} onClick={this.props.headerSort}>{header}</th>
    })
  }

  renderList = () => {
    return this.props.data.map(datum => {
      return <WorkListItem 
        key={datum.id}
        client={datum.client}
        project={datum.project}
        hours={datum.hours}
        billable={datum.billable}
        billableRate={datum.billableRate}
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