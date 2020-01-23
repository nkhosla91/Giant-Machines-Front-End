import React from 'react';
import '../App.css';

class WorkListItem extends React.Component {


    render () {
      return (
            <tr key={this.props.id}>
               <td>{this.props.date}</td>
               <td>{this.props.client}</td>
               <td>{this.props.project}</td>
               <td>{this.props.projectCode}</td>
               <td>{this.props.hours}</td>
               <td>{this.props.hoursRounded.toString().replace('.0', '')}</td>
               <td>{this.props.billable}</td>
               <td>{this.props.firstName}</td>
               <td>{this.props.lastName}</td>
               <td>{this.props.billableRate}</td>
            </tr>
      )
    }//end of render
}//end of WorkListItem class
  
export default WorkListItem;