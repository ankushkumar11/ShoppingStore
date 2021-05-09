import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <h1>Payment Component</h1>
      <button><Link to="/confirmation">Next</Link></button>
    </div>
  );
}

export default Payment;