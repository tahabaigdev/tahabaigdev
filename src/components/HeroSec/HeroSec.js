import React from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';

const HeroSec = () => {
  return (
    <div className="pt-[10rem] lg:pt-[16rem]">
      <div className="container-style">
        <div className="flex max-w-[54rem] flex-col gap-[2.4rem]">
          <StatusIndicator />
          <h1 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
            Hi, I’m Taha, <br /> a frontend Engineer from Pakistan
          </h1>
          <p className="text-[1.6rem] leading-[2.8rem] text-Light_Gray">
            I add value to web development projects by combining technical skill
            with creative design and aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
