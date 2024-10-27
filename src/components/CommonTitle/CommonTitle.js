import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';

const CommonTitle = ({ text }) => {
  const ref = useRef(null);
  const textWords = text.split('');
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div ref={ref}>
      <motion.h3
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="font-Righteous text-[2.8rem] leading-[3.92rem]"
      >
        {textWords.map((item, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: idx * 0.03,
                },
              },
            }}
            className={`inline-block ${item === ' ' ? 'mr-[8px]' : ''}`}
          >
            {item}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

CommonTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CommonTitle;
