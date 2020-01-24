import React from 'react';
import './App.css';
import WorkList from './containers/WorkList'
import SearchClient from './containers/SearchClient'
import Summary from './containers/Summary'
import NewEntry from './containers/NewEntry'


class App extends React.Component {

  state = {
    data: null,
    sortBy: null,
    sortDirection: "down",
    searchTerm: "",
    billableOnly: false
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/v1/works')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  renderNewEntry = (response) => {
    this.setState({data: [...this.state.data, response]})
  }

  
  filteredData = () => {
    let data = this.state.data

    data.forEach(datum => {
      datum['billableAmount'] = datum["billableRate"] * datum["hours"]
    })


    if(this.state.sortBy && this.state.sortDirection === "up"){
      data = data.sort(this.compareFunc)
    } else if (this.state.sortBy && this.state.sortDirection=== "down"){
      data = data.sort(this.reverseCompareFunc)
    }
    
    if(this.state.billableOnly){
      data = data.filter(data => {
        return data.billable === "Yes"
      })
    }
    
    return data.filter(data => {
      return data.client.toLowerCase().includes(this.state.searchTerm)
    })
  }
  
  updateSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm.toLowerCase()
    })
  }

  toggleBillableOnly =  () => {
    this.state.billableOnly ? this.setState({billableOnly: false}) : this.setState({billableOnly: true})
  }

  headerSort = (event) => {
    event.persist()
    if(event._targetInst.key === "Name"){
      event._targetInst.key = "Project"
    }

    if(this.state.sortBy === event._targetInst.key) {
        this.setState({sortBy: event._targetInst.key, sortDirection: "down"})
    } else {
        this.setState({sortBy: event._targetInst.key, sortDirection: "up"})
    }
  }

  compareFunc = (a, b) => {
    if(a[this.camelize(this.state.sortBy)] < b[this.camelize(this.state.sortBy)]){
      return -1
    }
    if(a[this.camelize(this.state.sortBy)] > b[this.camelize(this.state.sortBy)]){
      return 1;
    }
    return 0
  }

  reverseCompareFunc = (a, b) => {
    if(a[this.camelize(this.state.sortBy)] < b[this.camelize(this.state.sortBy)]){
      return 1
    }
    if(a[this.camelize(this.state.sortBy)] > b[this.camelize(this.state.sortBy)]){
      return -1
    }

    return 0
  }

  camelize = (str) => {
    return str.split(' ').map(function(word,index){
      if(index === 0){
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');

  }


  render () {
    if(this.state.data){
      return (
        <div>
          <h1 className="Header">Giant Machines Work Orders</h1>
          <Summary data={this.filteredData()}/>
          <NewEntry renderNewEntry={this.renderNewEntry}/>
          <SearchClient updateSearchTerm={this.updateSearchTerm} toggleBillableOnly={this.toggleBillableOnly}/>
          <WorkList data={this.filteredData()} headerSort={this.headerSort}/>
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
