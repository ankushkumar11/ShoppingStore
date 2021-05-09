import { useState, useEffect } from "react";
import "./Body.css";

function Body() {
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  });

  const list = product.map((abc) => (
    <div className="twoBody">
      <img className="oneBody" src={abc.image}></img>
      <h6>{abc.title}</h6>
      <h6>Price: ${abc.price}</h6>
      <button className="fourBody">Add to Cart</button>
    </div>
  ));

  return <div className="threeBody">{list}</div>;
}

export default Body;
