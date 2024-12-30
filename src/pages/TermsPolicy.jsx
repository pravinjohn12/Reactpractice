import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

function TermsPolicy() {
  const sections = [
    {
      id: 'terms',
      title: 'Terms of Service',
      content: [
        {
          subtitle: '1. Acceptance of Terms',
          text: 'By accessing and using the TNPSC Civic Learning website and services, you agree to be bound by these Terms of Service and any additional guidelines, policies, or rules that may be posted. If you do not agree with these terms, please refrain from using our services.',
        },
        {
          subtitle: '2. Services Provided',
          text: 'TNPSC Civic Learning offers various services including, but not limited to, online courses, study materials, mock tests, and personalized coaching for TNPSC exam preparation.',
        },
        {
          subtitle: '3. User Responsibilities',
          text: 'Users agree to provides accurate information during registration, maintain confidentiality of their accounts, and not engage in illegal activity or harm other users.',
        },
        {
          subtitle: '4. Payments and Fees',
          text: 'Certain services require payment. Payments must be made through the website\'s approved payment systems. Fees for services are non-refundable except as specified in the Refund Policy.',
        },
      ],
      img: 'https://img.freepik.com/premium-vector/flat-design-illustration-legal-doc-isolated-white-background_362714-1057.jpg',
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      content: [
        {
          subtitle: '1. Introduction',
          text: 'TNPSC Civic Learning values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.',
        },
        {
          subtitle: '2. Information We Collect',
          text: 'We collect personal and non-personal information, such as name, email, payment information, and IP address to improve our services and communicate with users.',
        },
        {
          subtitle: '3. How We Use Your Information',
          text: 'Your information is used to provide and manage access to courses, process payments, send updates and promotional emails, and improve the website and services.',
        },
        {
          subtitle: '4. Cookies and Tracking Technologies',
          text: 'We use cookies to enhance your browsing experience. Cookies are small files stored on your device. You can disable cookies in your browser settings, but this may limit website functionality.',
        },
      ],
      img: 'https://thumbs.dreamstime.com/b/website-disclaimer-concept-terms-conditions-privacy-policy-legal-notice-menu-bar-design-corporate-rules-ui-element-flat-278478526.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="text-center bg-blue-500 text-white py-5">
        <h1 className="text-3xl font-bold">Terms and Conditions & Privacy Policy</h1>
      </header>

      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          className={`max-w-5xl mx-auto my-10 bg-white shadow-lg rounded-lg p-5 flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 p-5">
            <h2 className="text-2xl font-bold text-blue-500 mb-3">{section.title}</h2>
            {section.content.map((item, idx) => (
              <div key={idx} className="mb-5">
                <h3 className="text-xl font-semibold text-blue-400">{item.subtitle}</h3>
                <p className="leading-relaxed mt-2">{item.text}</p>
              </div>
            ))}
            <a
              href="#"
              className="inline-block mt-5 px-5 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center p-5">
            <img
              src={section.img}
              alt="Illustration"
              className="rounded-lg shadow-md w-full md:w-4/5"
            />
          </div>
        </motion.section>
      ))}

      <footer className="text-center bg-blue-500 text-white py-5">
        <p>&copy; 2024 TNPSC Civic Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TermsPolicy;
