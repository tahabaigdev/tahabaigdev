import React, { useEffect } from 'react';
import CommonHero from '../components/CommonHero/CommonHero';
import GallerySec from '../components/GallerySec/GallerySec';
import ApproachSec from '../components/ApproachSec/ApproachSec';
import SkillsSec from '../components/SkillsSec/SkillsSec';
import ExperienceSec from '../components/ExperienceSec/ExperienceSec';
import TestimonialsSec from '../components/TestimonialsSec/TestimonialsSec';
import ContactSec from '../components/ContactSec/ContactSec';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const About = () => {
  useEffect(() => {
    // Set dynamic page title and description
    document.title = 'About Taha Baig - Frontend Engineer from Pakistan';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content =
      'Learn more about Taha Baig, a skilled frontend engineer from Pakistan with a passion for creating responsive web applications.';
    document.head.appendChild(metaDescription);

    // Structured data for skills and experience
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Taha Baig',
      jobTitle: 'Frontend Engineer',
      description:
        'Frontend engineer from Pakistan with over 2 years of experience in building dynamic web applications.',
      knowsAbout: [
        'React',
        'JavaScript',
        'Frontend Development',
        'Responsive Design',
        'Web Performance',
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Frontend Developer',
          description:
            'Specializes in creating responsive web applications using modern frontend technologies.',
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
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
      aria-label="About page content"
    >
      <div className="pt-[16rem]">
        <CommonHero
          title="About."
          subTitle="I’m a developer from Pakistan 🇵🇰 with a passion for code."
          content="With over 2 years of hands-on experience in front-end development, I specialize in creating dynamic and responsive web applications using the latest technologies."
        />
      </div>

      <section aria-label="Gallery">
        <GallerySec />
      </section>

      <section aria-label="My Approach">
        <ApproachSec />
      </section>

      <section aria-label="Skills">
        <SkillsSec />
      </section>

      <section aria-label="Experience">
        <ExperienceSec />
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

export default About;
