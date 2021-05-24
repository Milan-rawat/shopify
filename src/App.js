import "./App.css";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Account/Account";
import Cart from "./Pages/Cart/Cart";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/user/account" component={Account} />
        <Route path="/user/signup" component={Signup} />
        <Route path="/user/signin" component={Signin} />
        <Route path="/user/mycart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
