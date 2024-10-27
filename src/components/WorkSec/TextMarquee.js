import React from 'react';
import Marquee from 'react-fast-marquee';
import PropTypes from 'prop-types';

const TextMarquee = ({ marqueeText }) => {
  return (
    <div className="text-marquee">
      <Marquee speed={100} gradient={false}>
        {marqueeText.map((item, idx) => (
          <p
            key={idx}
            className="mx-8 font-Righteous text-[12rem] capitalize leading-[14rem]"
          >
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

TextMarquee.propTypes = {
  marqueeText: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TextMarquee;
