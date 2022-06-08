import NavBar from "../../components/NavBar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Leistungen";
import Why from "./Why";
import Projects from "./Projects";
import Contact from './Contact'

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Why />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;
