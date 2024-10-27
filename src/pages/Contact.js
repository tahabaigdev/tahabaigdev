import React, { useEffect } from 'react';
import ContactSec from '../components/ContactSec/ContactSec';
import ContactForm from '../components/ContactForm/ContactForm';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Contact = () => {
  useEffect(() => {
    // Set dynamic page title and description
    document.title = 'Contact Taha Baig - Frontend Engineer';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content =
      'Get in touch with Taha Baig, a frontend engineer from Pakistan, to discuss web development projects and collaborations.';
    document.head.appendChild(metaDescription);

    // Structured data for contact information
    const contactStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Taha Baig',
      jobTitle: 'Frontend Engineer',
      url: 'https://www.tahabaig.dev/',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'your-email@example.com', // Update this with your actual email
        telephone: '+92-XXX-XXXXXXX', // Update with your actual phone number if applicable
        areaServed: 'PK',
        availableLanguage: ['English'],
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(contactStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
      aria-label="Contact page content"
    >
      <section aria-label="Contact Form">
        <ContactForm />
      </section>

      <section aria-label="Additional Contact Information">
        <ContactSec />
      </section>
    </motion.main>
  );
};

export default Contact;
