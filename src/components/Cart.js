import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1>Cart Component</h1>
      <button><Link to="/address">Next</Link></button>
    </div>
  );
}

export default Cart;