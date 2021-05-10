import React from "react";
import { Container , Row , Col } from "reactstrap";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";

let productInfo = { title: "Product List Page" };
let categoryInfo = { title: "Category List Page" };
export default class App extends React.Component {
  state = {
    currentCategory:"",
    categories:[],
    products:[]
  }
  changeCategory = (item) =>{
    this.setState({
      currentCategory:item.categoryName
    })
    this.getProducts(item.id);
  }
  getCategories(){
    fetch("http://localhost:3000/categories")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res);
      this.setState({categories:res})
    })
    .catch((err) => console.log(err.response));
  }
   getProducts(category_id = 0){
    let url = "http://localhost:3000/products";
    if(category_id){
      url += "?categoryId=" + category_id;
    }
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res);
      this.setState({products:res})
    })
    .catch((err) => console.log(err.response));
  }

  componentDidMount(){
    this.getCategories();
    this.getProducts();
  }

  render(){

    return (
      <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row xs="12">
          <Col xs="4">
            <CategoryList 
              categories={this.state.categories}
              currentCategory={this.state.currentCategory} 
              changeCategory={this.changeCategory}
              info={categoryInfo}/>
          </Col>
          <Col xs="8">
            <ProductList 
              products={this.state.products}
              info={productInfo}/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

