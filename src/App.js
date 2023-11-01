import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import Services from "./pages/services";
import Contact from "./pages/Contact";
import SigninPage from "./pages/signin";
import AnimatedCursor from "react-animated-cursor";
import Blog from "./pages/Blog";
import { useState } from "react";
import { Sidebar } from "./components/sidebar/index";
import { Navbar } from "./components/navbar/index";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>

      <AnimatedCursor innerSize={15}
        outerSize={10} color='193, 11, 111' outerAlpha={.2} innerScale={1} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/blog" component={Blog} />
      </Switch>

    </Router>
  );
}

export default App;
