import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
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
import GoldLoanProducts from './components/Home/GoldLoanProducts';
import GoldCreditCardBanner from './components/Home/GoldCreditCardBanner';
import GoldLoanSlider from './components/Home/GoldLoanSlider';
import LoanCalculator from './components/Home/LoanCalculator';
import NewLoanCalculator from './components/Home/NewLoanCalculator';

import StatsSection from './components/Home/StatsSection';
import SectionHeading from './components/Home/SectionHeading';
import GoldLoanBenefits from './components/Home/GoldLoanBenefits';

// Animation variants for scroll effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-100 font-sans w-full flex flex-col align-center justify-center">
      <Hero />

      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="Gold Loan Options" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GoldLoanProducts />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GoldCreditCardBanner />
      </motion.div>

      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="Gold Loan Offers" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GoldLoanSlider />
      </motion.div>

      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="Smart Gold Loan Calculator" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <NewLoanCalculator/>

        {/* <LoanCalculator /> */}
      </motion.div>
      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="Trusted Banks For Gold Loans Services" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PartnerBanks />
      </motion.div>

      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="What makes Sahibandhu Best Gold Loan Platform?" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <StatsSection />
      </motion.div>
      <motion.div
        className="p-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading text="Why Choose Us for Your Gold Loan?" />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GoldLoanBenefits />
      </motion.div>
      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ComparisonResults />
      </motion.div> */}

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQ />
      </motion.div>

    </div>
  );
};

export default App;
