import React from "react";

class Search extends React.Component{
	render(){
		return(
			<input
			value={this.props.search}
			onChange={this.props.onSearchChange}
			/>
		);
	}
}

export default Search;