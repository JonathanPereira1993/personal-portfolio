import "./App.css";
import CarouselWrapper from "./Components/CarouselWrapper";
import NavBar from "./Components/NavBar";
import Experience from "./Sections/Experience";
import MainSection from "./Sections/MainSection";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Experience />
      <Skills />
      <CarouselWrapper />
    </>
  );
}

export default App;
