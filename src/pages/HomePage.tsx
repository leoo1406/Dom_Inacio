import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesOverview from '../components/home/ServicesOverview';
import ProductCarousel from '../components/home/ProductCarousel';
import Partners from '../components/home/Partners';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Grãos Dom Inácio - Comércio de Grãos e Cereais';
  }, []);

  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <ProductCarousel />
      <Partners />
    </div>
  );
};

export default HomePage;