import logo from './logo.svg';
import './App.css';

const products=[
  {name:'Laptop',price:'84000'},
  {name:'Mobile',price:'8400'},
  {name:'Watch',price:'400'},

]
function App() {
  return (
    <div className="App">
      {/* <Product name="Laptop" price="80000"></Product> */}
      {
        products.map(product =><Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Motor" price="15000"></Product> */}
    </div>
  );
}
function Product(props){
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      {/* Must need to include the name word to thee props */}
      {/* <Product (===>name<====)""></Product> */}
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
