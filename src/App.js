import React from 'react';
import './App.scss';
import WorkList from './containers/WorkList'

class App extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    
    fetch('http://localhost:8000/api/v1/works')
      .then(response => response.json())
      .then(data => this.setState({data}))

  }

  render () {
    console.log(this.state.data)
    if(this.state.data){
      return (
        <div>
          <WorkList className="Table" data={this.state.data}/>
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
