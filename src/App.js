import React from 'react';
import './App.css';
import WorkList from './containers/WorkList'
import SearchClient from './containers/SearchClient'


class App extends React.Component {

  state = {
    data: null,
    sorted: null,
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/v1/works')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  updateSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm.toLowerCase()
    })
  }

  filteredWork = () =>{
    return this.state.data.filter(data => {
      return data.client.toLowerCase().includes(this.state.searchTerm)
    })

  }

  render () {
    console.log(this.state.data)
    if(this.state.data){
      return (

        <div>
          <h1 className="Header">Giant Machine Timesheet</h1>

          <SearchClient updateSearchTerm={this.updateSearchTerm}/>

          <div className="Table">
            <WorkList data={this.filteredWork()}/>
          </div>
          
      </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }//end of if
  }//end of render
}//end of App class

export default App;
