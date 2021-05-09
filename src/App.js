import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import AddressDetails from "./components/AddressDetails";
import Confirmation from "./components/Confirmation";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
        <Route path="/address">
          <AddressDetails></AddressDetails>
        </Route>
        <Route path="/confirmation">
          <Confirmation></Confirmation>
        </Route>
      </Switch>
    </Router>
  );
}
