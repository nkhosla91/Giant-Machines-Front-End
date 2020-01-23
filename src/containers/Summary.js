import React from 'react';
import '../App.css';

class Summary extends React.Component {

    addCommas = (num) =>{
        let num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
      }

    getTotalHours = () => {
        let hours = 0
        this.props.data.forEach(datum => {
            hours = hours + parseFloat(datum.hours)
        });
        return this.addCommas(hours.toFixed(2))
    }
    
    getTotalBill = () => {
        let bill = 0
        this.props.data.forEach(datum => {
            bill = bill + (parseFloat(datum.hours) * parseFloat(datum.billableRate))
        });
        return this.addCommas(bill.toFixed(2))
    }


    render () {
      return (
        <div className="Summary">
            <div>
                <ul className="Summary-key">Hours Worked: </ul>
                <ul className="Summary-value">{this.getTotalHours()}</ul>
            </div>
            <div>
                <ul className="Summary-key">Total Bill: </ul>
                <ul className="Summary-value">$ {this.getTotalBill()}</ul>
            </div>
           
        </div>
      )
    }//end of render
}//end of Summary class
  
export default Summary;