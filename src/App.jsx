import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
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
