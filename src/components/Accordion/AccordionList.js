import React, { useState } from 'react';
import Accordion from './Accordion';
import { faqsData } from '../../constants/constants';

const AccordionList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqsData.map((item, idx) => (
        <Accordion
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};

export default AccordionList;
