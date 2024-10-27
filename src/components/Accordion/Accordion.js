import React, { useRef, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
        <FaPlus
          className="plus-icon transition-transform duration-200"
          style={{ transform: `rotate(${isOpen ? '45deg' : '0deg'})` }}
        />
      </div>
      <div
        className="accordion-body transition-max-height overflow-hidden duration-200 ease-in-out"
        style={{ maxHeight: `${maxHeight}px` }}
        ref={contentRef}
      >
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Accordion;
