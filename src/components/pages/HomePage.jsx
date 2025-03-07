import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Home/Hero';
import SearchForm from '../Home/SearchForm';
import Features from '../Home/Features';
import HowItWorks from '../Home/HowitWork';
import FAQ from '../Home/FAQItem';
import CTA from '../Home/CTA';

import ComparisonResults from '../Home/ComparisonResults';
import Testimonials from '../Home/Testimonial';
import GoldLoanProducts from '../Home/GoldLoanProducts';
import GoldCreditCardBanner from '../Home/GoldCreditCardBanner';
import GoldLoanSlider from '../Home/GoldLoanSlider';
import LoanCalculator from '../Home/LoanCalculator';
import StatsSection from '../Home/StatsSection';
import SectionHeading from '../Home/SectionHeading';
import GoldLoanBenefits from '../Home/GoldLoanBenefits';
import PartnerBanks from '../Home/PartnerBanks';

// Animation variants for scroll effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Main App Component
const HomePage = () => {
  return (
    <div className="bg-gray-100 font-sans w-full flex flex-col align-center justify-center">
      <Header />
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
        <LoanCalculator />
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
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ComparisonResults />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQ />
      </motion.div>

      <Footer />
    </div>
  );
};

export default HomePage;
