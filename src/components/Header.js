import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="oneHeader">
      <h1>Header Component</h1>
      <button>
        <Link to="/cart">Go to Cart</Link>
      </button>
    </div>
  );
}

export default Header;
