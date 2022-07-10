import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Direction from "./components/Direction/Direction";
import Service from "./components/Service/Service";
import Footer from "./components/footer /Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Direction />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
