import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import ProductSummary from './components/ProductSummary.jsx';
import About from './components/About.jsx';
import Ecosystem from './components/Ecosystem.jsx';
import Loop from './components/Loop.jsx';
import Products from './components/Products.jsx';
import Why from './components/Why.jsx';
import IsIsNot from './components/IsIsNot.jsx';
import BusinessModel from './components/BusinessModel.jsx';
import Roadmap from './components/Roadmap.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import BackgroundOrbs from './components/BackgroundOrbs.jsx';

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundOrbs />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <ProductSummary />
        <About />
        <Ecosystem />
        <Loop />
        <Products />
        <Why />
        <IsIsNot />
        <BusinessModel />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
