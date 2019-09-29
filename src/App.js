import React from "react";
import { NavBar } from "./components/navbar/";
import { Main } from "./components/main";
import { Products } from "./components/products";
import { About } from "./components/about";
import { Contact } from "./components/contact/";
import { Menu } from "./components/menu/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={Main} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/menu" component={Menu} />
        </Router>
      </div>
    );
  }
}

export default App;
