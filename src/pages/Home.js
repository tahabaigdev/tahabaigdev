import React, { useEffect } from 'react';
import HeroSec from '../components/HeroSec/HeroSec';
import MarqueeSec from '../components/MarqueeSec/MarqueeSec';
import WorkSec from '../components/WorkSec/WorkSec';
import FaqSec from '../components/FaqSec/FaqSec';
import TestimonialsSec from '../components/TestimonialsSec/TestimonialsSec';
import ContactSec from '../components/ContactSec/ContactSec';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  useEffect(() => {
    // Set dynamic page title and description
    document.title = 'Taha Baig - Frontend Engineer Portfolio';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content =
      "Explore Taha Baig's projects, skills, and testimonials as a Frontend Engineer from Pakistan.";
    document.head.appendChild(metaDescription);

    // Set up structured data for the FAQ section
    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I specialize in frontend development with expertise in React and modern JavaScript frameworks.',
          },
        },
        // Add more FAQs here
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqStructuredData);
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
      aria-label="Main content"
    >
      {/* Wrap each section with a semantic HTML tag */}
      <header>
        <HeroSec />
      </header>

      <section aria-label="Marquee Section">
        <MarqueeSec />
      </section>

      <section aria-label="Portfolio and Work Section">
        <WorkSec />
      </section>

      <section aria-label="Frequently Asked Questions">
        <FaqSec />
      </section>

      <section aria-label="Testimonials">
        <TestimonialsSec />
      </section>

      <section aria-label="Contact Section">
        <ContactSec />
      </section>
    </motion.main>
  );
};

export default Home;
