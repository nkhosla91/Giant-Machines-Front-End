import React from 'react';
import '../App.css';

class SearchClient extends React.Component {


    render () {
      return (
        <form className="Search">
            <label> Search Client: </label>
            <input name="search" className="Search-bar" placeholder="Type here..." onChange={event=>this.props.updateSearchTerm(event.target.value)}/>	
            Billable Only? <input type="checkbox" name="name" id="id" onClick={this.props.toggleBillableOnly}/>
        </form>
      )
    }//end of render
}//end of SearchClient class
  
export default SearchClient;