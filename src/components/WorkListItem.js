import React from 'react';
import '../App.css';

class WorkListItem extends React.Component {

  getBillableHours = () => {
    if (this.props.billable === "Yes"){
      return  <td>{this.props.hours} (100%)</td>
    } else {
      return <td>{this.props.hours} (0%)</td>
    }
  }
  getBillableAmount = () => {

    if (this.props.billable === "Yes"){
      return  <td>$ {parseFloat(this.props.hours * this.props.billableRate).toFixed(2)}</td>
    } else {
      return  <td>-</td>
    }
    
  }



    render () {
      return (
            <tr key={this.props.id}>
              <td>{this.props.project}</td>
              <td>{this.props.client}</td>
              <td>{this.props.hours}</td>
              {this.getBillableHours()}
              {this.getBillableAmount()}
              
            </tr>
      )
    }//end of render
}//end of WorkListItem class
  
export default WorkListItem;