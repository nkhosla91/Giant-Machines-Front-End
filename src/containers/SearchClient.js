import React from 'react';
import '../App.css';

class SearchClient extends React.Component {


    render () {
      return (
        <form className="Search">
              <label> Search Client: </label>
				<input name="search" placeholder="Type here..." onChange={event=>this.props.updateSearchTerm(event.target.value)}/>	
		</form>
      )
    }//end of render
}//end of SearchClient class
  
export default SearchClient;