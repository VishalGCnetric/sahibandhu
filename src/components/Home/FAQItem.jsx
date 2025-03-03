import { useState } from "react";

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-5 border border-gray-200 rounded-lg overflow-hidden">
        <div
          className="p-5 bg-gray-50 cursor-pointer flex justify-between items-center font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className="p-5 border-t border-gray-200 text-gray-600">{answer}</div>}
      </div>
    );
  };

  

// FAQ Section Component
const FAQ = () => {
    const faqs = [
      {
        question: "What is a gold loan?",
        answer: "A gold loan is a secured loan where you pledge your gold jewellery or coins as collateral to the bank or financial institution in return for a loan amount. The loan amount is typically a percentage of the market value of the gold pledged."
      },
      {
        question: "How is the loan amount calculated?",
        answer: "The loan amount depends on the weight and purity of your gold. Banks typically provide 70-85% of the gold's market value as loan amount, known as Loan-to-Value (LTV) ratio."
      },
      {
        question: "What happens if I fail to repay the loan?",
        answer: "If you fail to repay the loan, the bank has the right to auction your gold after providing adequate notice. However, most banks provide flexible repayment options and extensions to help you retain your gold."
      }
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about gold loans</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default FAQ;
