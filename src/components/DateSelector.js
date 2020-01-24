import React from 'react';
import '../App.css';


class DateSelector extends React.Component {

    getYears = () =>{
        let maxOffset = 10;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = -10; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const yearList = allYears.map((year) => {return(<option type="number" key={year}>{year}</option>)});
        return yearList
    }

    render () {
        const months = [1,2,3,4,5,6,7,8,9,10,11,12]
        const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        
      return (
          <div>
            <label className="Form-key">Date:</label>
                <select className="Form-value" name="month" onChange={this.props.handleChange}>>
                    <option>Month</option>
                    {months.map((month) => {return(<option key={month}>{month}</option>)})}
                </select>


                <select className="Form-value" name="day" onChange={this.props.handleChange}>>
                    <option>Day</option>
                    {days.map((day) => {return(<option type="number" value={day}key={day}>{day}</option>)})}
                </select>

                <select className="Form-value" name="year" onChange={this.props.handleChange}>
                    <option>Year</option>
                    {this.getYears()}
                </select>
            </div>
            )
    }//end of render
}//end of DateSelector class
  
export default DateSelector;