import React, { useEffect } from 'react';
import CommonHero from '../components/CommonHero/CommonHero';
import WorkSec from '../components/WorkSec/WorkSec';
import ContactSec from '../components/ContactSec/ContactSec';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Work = () => {
  useEffect(() => {
    // Set dynamic page title and description
    document.title = 'Work - Projects by Taha Baig';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content =
      'Explore the portfolio projects of Taha Baig, showcasing frontend development skills and creativity.';
    document.head.appendChild(metaDescription);

    // Structured data for projects
    const projectStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      author: {
        '@type': 'Person',
        name: 'Taha Baig',
      },
      about:
        'Frontend projects showcasing the skills and capabilities of Taha Baig.',
      dateCreated: '2023', // Update with actual dates as needed
      keywords: 'Frontend Development, Web Projects, React, Portfolio',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(projectStructuredData);
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
      aria-label="Work page content"
    >
      <div className="py-[16rem]">
        <CommonHero
          title="Work."
          subTitle="Here are some of my projects from the last few months."
          content="I have had the privilege of working on a wide range of projects, which has enabled me to refine my skills and consistently push the boundaries of my capabilities."
        />
      </div>

      <section aria-label="Projects">
        <WorkSec />
      </section>

      <section aria-label="Contact Section">
        <ContactSec />
      </section>
    </motion.main>
  );
};

export default Work;
