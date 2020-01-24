import React from 'react';
import '../App.css';

class NewEntry extends React.Component {

    state ={
        clicked: false,
        newEntry: {
            day: null,
            year: null,
            month: null
        },
    }

    getYears = () =>{
        let maxOffset = 10;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = -10; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const yearList = allYears.map((year) => {return(<option key={year}>{year}</option>)});
        return yearList
    }

    toggleButton = () => {
       this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
    }

    handleSubmit = (event) => {
        debugger
    }

    render () {
        const months = [1,2,3,4,5,6,7,8,9,10,11,12]
        const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        if (!this.state.clicked){
            return (
                <button className="New-entry" onClick={this.toggleButton} >Create New Entry</button>
            )
        } else {
            return(
                <form className="Form" onSubmit={this.handleSubmit}>

                        <label className="Form-key">Date:</label>

                            <select className="Form-value" name="month" defaultValue="Moh">>
                                <option defaultValue="th"/>
                                {months.map((month) => {return(<option key={month}>{month}</option>)})}
                            </select>


                            <select className="Form-value" name="day" defaultValue="Day">>
                                <option defaultValue="Day">Day</option>
                                {days.map((day) => {return(<option value={day}key={day}>{day}</option>)})}
                            </select>

                            <select className="Form-value" required>
                                <option value="Year" defaultValue="Year">Year</option>
                                {this.getYears()}
                            </select>


                        {/* <input className="Form-value" type="text" name="date" id="date" value="MM/DD/YY" onChange={this.handleChange} /> */}

                        <input type="submit" value="Make your Team!"/>
    
                </form>
        )
        }//end ofif
    }//end of render
}//end of NewEntry class
  
export default NewEntry;