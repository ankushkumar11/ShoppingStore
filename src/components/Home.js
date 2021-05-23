import { Link } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default Home;
