import { Fragment } from "react";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Services from "./component/Services";
import Tours from "./component/Tours";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </Fragment>
  );
}

export default App;
