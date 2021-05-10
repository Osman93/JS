import React from "react";
import { Table } from 'reactstrap';
export default class ProductList extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.info.title}</h1>
				<Table>
    			  <thead>
			        <tr>
			          <th>#</th>
			          <th>Name (productName)</th>
			          <th>quantityPerUnit</th>
			          <th>unitPrice</th>
			          <th>unitsInStock</th>

			        </tr>
			      </thead>
			      <tbody>
			      { this.props.products &&
			      	this.props.products.map((item,index) => {
			      		return (
			      			<tr key={item.id}>
			      				<th>{item.id}</th>
			         		 	<th scope="row">{item.productName}</th>
					          	<td>{item.quantityPerUnit}</td>
					          	<td>{item.unitPrice}</td>
					          	<td>{item.unitsInStock}</td>
					        </tr>
			      		)
			      	})

			      }
			        

			      </tbody>
			    </Table>
			</div>
		);
	}
}