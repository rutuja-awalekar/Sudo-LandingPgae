import React, { useState } from 'react';


const faqData = {
  "Cloud Services": [
    {
      question: "What are your service terms and refund policies?",
      answer: "We adhere to AWS’s service terms and refund policies. Refunds are issued based on the conditions set by AWS. For more details, refer to AWS’s refund policy: https://aws.amazon.com/service-terms/"
    },
    {
      question: "How many services and solutions do you offer?",
      answer: "We provide over 150 services & solutions tailored for cloud computing and custom development, ensuring flexibility for your projects."
    },
    {
      question: "Are your services compatible with AWS and other cloud platforms?",
      answer: "Yes, our services are fully compatible with AWS and other major cloud platforms, ensuring seamless integration and support."
    },
    {
      question: "How many projects can I manage with a standard service agreement?",
      answer: "With a standard service agreement, you can manage one project. For multiple projects, additional agreements are required."
    },
    {
      question: "Is there a warranty or guarantee on your services?",
      answer: "Our services come with a satisfaction guarantee, ensuring you receive the quality and support you expect. If you're not satisfied, we will work with you to resolve any issues."
    }
  ],
  "Assistance": [
   {
      question: "What are your service terms and refund policies?",
      answer: "We adhere to AWS’s service terms and refund policies. Refunds are issued based on the conditions set by AWS. For more details, refer to AWS’s refund policy: https://aws.amazon.com/service-terms/"
    },
    {
      question: "How many services and solutions do you offer?",
      answer: "We provide over 150 services & solutions tailored for cloud computing and custom development, ensuring flexibility for your projects."
    },
    {
      question: "Are your services compatible with AWS and other cloud platforms?",
      answer: "Yes, our services are fully compatible with AWS and other major cloud platforms, ensuring seamless integration and support."
    },
    {
      question: "How many projects can I manage with a standard service agreement?",
      answer: "With a standard service agreement, you can manage one project. For multiple projects, additional agreements are required."
    },
    {
      question: "Is there a warranty or guarantee on your services?",
      answer: "Our services come with a satisfaction guarantee, ensuring you receive the quality and support you expect. If you're not satisfied, we will work with you to resolve any issues."
    }
  ],
  "Pricing": [
   {
      question: "What are your service terms and refund policies?",
      answer: "We adhere to AWS’s service terms and refund policies. Refunds are issued based on the conditions set by AWS. For more details, refer to AWS’s refund policy: https://aws.amazon.com/service-terms/"
    },
    {
      question: "How many services and solutions do you offer?",
      answer: "We provide over 150 services & solutions tailored for cloud computing and custom development, ensuring flexibility for your projects."
    },
    {
      question: "Are your services compatible with AWS and other cloud platforms?",
      answer: "Yes, our services are fully compatible with AWS and other major cloud platforms, ensuring seamless integration and support."
    },
    {
      question: "How many projects can I manage with a standard service agreement?",
      answer: "With a standard service agreement, you can manage one project. For multiple projects, additional agreements are required."
    },
    {
      question: "Is there a warranty or guarantee on your services?",
      answer: "Our services come with a satisfaction guarantee, ensuring you receive the quality and support you expect. If you're not satisfied, we will work with you to resolve any issues."
    }
  ],
  "Technical Support": [
    {
      question: "What are your service terms and refund policies?",
      answer: "We adhere to AWS’s service terms and refund policies. Refunds are issued based on the conditions set by AWS. For more details, refer to AWS’s refund policy: https://aws.amazon.com/service-terms/"
    },
    {
      question: "How many services and solutions do you offer?",
      answer: "We provide over 150 services & solutions tailored for cloud computing and custom development, ensuring flexibility for your projects."
    },
    {
      question: "Are your services compatible with AWS and other cloud platforms?",
      answer: "Yes, our services are fully compatible with AWS and other major cloud platforms, ensuring seamless integration and support."
    },
    {
      question: "How many projects can I manage with a standard service agreement?",
      answer: "With a standard service agreement, you can manage one project. For multiple projects, additional agreements are required."
    },
    {
      question: "Is there a warranty or guarantee on your services?",
      answer: "Our services come with a satisfaction guarantee, ensuring you receive the quality and support you expect. If you're not satisfied, we will work with you to resolve any issues."
    }
  ]
};

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cloud Services');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p>
        A frequently asked questions forum is often used in articles, websites, email lists, and online forums.
      </p>
      <div className="faq-wrapper">
        <div className="faq-sidebar">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              className={`faqCategory ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="faq-content">
          {faqData[selectedCategory].map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FAQSection;