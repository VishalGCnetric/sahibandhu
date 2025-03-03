
import React, { useState } from 'react';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Home/Hero';
import SearchForm from './components/Home/SearchForm';
import Features from './components/Home/Features';
import HowItWorks from './components/Home/HowitWork';
import FAQ from './components/Home/FAQItem';
import CTA from './components/Home/CTA';
import PartnerBanks from './components/Home/PartnerBanks';
import ComparisonResults from './components/Home/ComparisonResults';
import Testimonials from './components/Home/Testimonial';

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-100 font-sans w-full flex flex-col align-center justify-center">
      <Header />
      <Hero />
      <SearchForm />
      <Features />
      <HowItWorks />
      <PartnerBanks />
      <ComparisonResults />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};


















export default App;