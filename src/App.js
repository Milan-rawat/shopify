import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
