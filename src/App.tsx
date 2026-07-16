import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import CustomCursor from './components/cursor/CustomCursor';
import { useScrollParallax } from './hooks/useScrollParallax';
import { portfolioData } from './data/portfolio';

function App() {
  const { config } = portfolioData;
  useScrollParallax();

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        {config.showAbout && <About />}
        {config.showSkills && <Skills />}
        {config.showProjects && <Projects />}
        {config.showExperience && <Experience />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
