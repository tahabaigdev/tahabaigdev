import React from 'react';
import PropTypes from 'prop-types';

const CommonHero = ({ title, subTitle, content }) => {
  return (
    <React.Fragment>
      <div className="container-style flex flex-col gap-[1.6rem]">
        <h1 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
          {title}
        </h1>

        <h3 className="max-w-[54rem] text-[2.8rem] leading-[3.6rem] tracking-[-0.5px] md:text-[3.2rem] md:leading-[4rem]">
          {subTitle}
        </h3>

        <p className="max-w-[58.8rem] text-[1.6rem] leading-[2.8rem] text-Light_Gray">
          {content}
        </p>
      </div>
    </React.Fragment>
  );
};

CommonHero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommonHero;
