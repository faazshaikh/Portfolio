import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
// import Testimonials from './components/testimonials/Testimonials'; // Removed for now, format preserved for future use
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { initScrollAnimations } from './utils/scrollAnimation';

function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> Removed for now, format preserved for future use */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
