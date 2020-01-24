import React from 'react';
import './App.css';
import WorkList from './containers/WorkList'
import SearchClient from './containers/SearchClient'
import Summary from './containers/Summary'
import NewEntry from './containers/NewEntry'


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

  filteredData = () =>{
    return this.state.data.filter(data => {
      return data.client.toLowerCase().includes(this.state.searchTerm)
    })
  }

  renderNewEntry = (newEntry) => {
    this.setState({data: [...this.state.data, newEntry]})

  }

  render () {
    console.log(this.state.data)
    if(this.state.data){
      return (
        <div>
          <h1 className="Header">Giant Machines Work Orders</h1>
          <Summary data={this.filteredData()}/>
          <NewEntry renderNewEntry={this.renderNewEntry}/>
          <SearchClient updateSearchTerm={this.updateSearchTerm}/>
          <WorkList data={this.filteredData()}/>
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
