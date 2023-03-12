import react from "react";
import "./App.css";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


function App() {

  return (
    <div>
      <Nav />
      <Banner />
      <Content />
      <Services />
      <Faq />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
