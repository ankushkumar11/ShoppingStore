import { Link } from "react-router-dom";

function AddressDetails() {
  return (
    <div>
      <h1>AddressDetails Component</h1>
      <button><Link to="/checkout">Next</Link></button>
    </div>
  );
}

export default AddressDetails;