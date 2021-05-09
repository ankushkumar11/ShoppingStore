import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <h1>Checkout Component</h1>
      <button><Link to="/payment">Next</Link></button>
    </div>
  );
}

export default Checkout;