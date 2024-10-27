import React from 'react';

const HeroSec = () => {
  return (
    <div className="pt-[10rem] lg:pt-[16rem]">
      <div className="container-style">
        <div className="flex max-w-[54rem] flex-col gap-[2.4rem]">
          <div
            className="inline-flex w-max items-center gap-[1rem] rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] px-[1.6rem] py-[0.8rem]"
            aria-label="Availability Status"
          >
            <div className="h-[1rem] w-[1rem] rounded-full bg-[#6fad61]"></div>
            <span className="text-[1.4rem] font-medium leading-[1.82rem]">
              Available for hire
            </span>
          </div>

          <h1 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
            Hi, I’m Taha, <br /> a frontend developer from Pakistan
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
