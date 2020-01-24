import React from 'react';
import '../App.css';
import DateSelector from '../components/DateSelector'

class NewEntry extends React.Component {

    state ={
        clicked: false,
        newEntry: {
            month: null,
            day: null,
            year: null,
            client: null,
            project: null,
            projectCode: null,
            hours: null,
            firstName: null,
            lastName: null,
            billableRate: null
        }
    }

    handleChange = (event) => {
        event.persist()
        this.setState(prevState => ({
            newEntry: {
              ...prevState.newEntry,
              [event.target.name]: event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value
            }
          }))

    }


    toggleButton = () => {
        let newEntry = {
            month: null,
            day: null,
            year: null,
            client: null,
            project: null,
            projectCode: null,
            hours: null,
            firstName: null,
            lastName: null
        }
       this.state.clicked ? this.setState({clicked: false, newEntry}) : this.setState({clicked: true})
    }

    handleSubmit = (event) => {
        let newEntry = this.state.newEntry
        let length = 0

        Object.keys(newEntry).forEach(value => {
            if (!newEntry[value]) {
              length = length +1
            }//end of if
        })/// end of Object.keys

            if(length >0) {
                return alert('Please complete the entire form')
            }//end of if
        let date = newEntry['month'] + '/' + newEntry['day'] + '/' + newEntry['year'].slice(-2)
        delete newEntry['month'] 
        delete newEntry['day']
        delete newEntry['year']
        newEntry['date'] = date
        newEntry['hoursRounded'] = parseInt(newEntry['hours'])
        // console.log(newEntry)

        return fetch("http://localhost:8000/api/v1/works", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry)
          })
          .then(response => response.json())
          .then(response => newEntry["id"] = response.id)
          .then(response => console.log(newEntry, "created entry"))
          .then(this.props.renderNewEntry(newEntry))  
    }

    render () {
        if (!this.state.clicked){
            return (
                <button className="Form-button" onClick={this.toggleButton}>Create New Entry</button>
            )
        } else {
            return(
                <div className="Form-wrapper" >
                    <h3 className="Form-header">New Entry Form</h3>
                        <form className="Form-body" onSubmit={this.handleSubmit}>

                        <div>
                            <DateSelector handleChange={this.handleChange}/>
                        </div>

                        <div>
                            <label className="Form-key">Client:</label>
                            <input className="Form-value" type="text" name="client" onChange={this.handleChange} />
                        </div>
                            
                        <div>
                            <label className="Form-key">Project:</label>
                            <input className="Form-value" type="text" name="project" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="Form-key">Project Code:</label>
                            <input className="Form-value" type="text" name="projectCode" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="Form-key">Hours:</label>
                            <input className="Form-value" type="number" name="hours" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="Form-key">Billable:</label>
                            <label className="Form-key">Yes
                                <input className="Form-value" type="radio" value="Yes" name="billable" onChange={this.handleChange}/>
                            </label>
                            <label className="Form-key">No
                                <input className="Form-value" type="radio" value="No" name="billable" onChange={this.handleChange}/>
                            </label>
                        </div>

                        <div>
                            <label className="Form-key">First Name:</label>
                            <input className="Form-value" type="text" name="firstName" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="Form-key">Last Name:</label>
                            <input className="Form-value" type="text" name="lastName" onChange={this.handleChange} />
                        </div>

                        <div>
                            <label className="Form-key">Billable Rate:</label>
                            <input className="Form-value" type="number" name="billableRate" onChange={this.handleChange} />
                        </div>

                </form>
                        <div className="Form-button-wrapper">
                            <button className="Form-button" onClick={this.toggleButton}>Close</button>
                            <button className="Form-button" onClick={this.handleSubmit}>Submit</button>
                        </div>
            </div>
         )
        }//end of if
    }//end of render
}//end of NewEntry class
  
export default NewEntry;