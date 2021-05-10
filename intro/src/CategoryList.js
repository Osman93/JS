import React from "react";
import {ListGroup , ListGroupItem} from "reactstrap";
export default class CategoryList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		
		}
	}

	
	
	render(){
		return (
			<div>
			<h1>{this.props.info.title}</h1>
				<ListGroup>
					{ this.props.categories && 
						this.props.categories.map((item,index) => {
							return (
								<ListGroupItem 
								active={(item.categoryName === this.props.currentCategory) ? true : false}
								onClick={() => this.props.changeCategory(item)}
								key={index}>
									{item.categoryName}
								</ListGroupItem>)
						})	

					}
			    </ListGroup>
			    <b>{this.props.currentCategory}</b>
			</div>
		);
	}
}