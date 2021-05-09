import { Link } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      {/* <Header></Header>
      <Navigation></Navigation> */}
      <Body></Body>
      {/* <Footer></Footer> */}
      <button><Link to="/cart">Go to Cart</Link></button>
    </div>
  );
}

export default Home;