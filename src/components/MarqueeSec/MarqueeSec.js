import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSec = () => {
  const marqueeItems = [
    'html • css • sass/scss • bootsrap •',
    'tailwindcss • javascript • reactjs • styled components •',
    'gsap • framer motion • figma •',
  ];

  return (
    <div className="marquee-sec py-[10rem] lg:py-[16rem]">
      <Marquee speed={50} gradient={false}>
        {marqueeItems.map((item, index) => (
          <p
            key={index}
            className="mx-8 font-Righteous text-[10.4rem] uppercase leading-[12.48rem]"
          >
            {item}
          </p>
        ))}
      </Marquee>

      <Marquee speed={50} gradient={false} direction="right">
        {marqueeItems.map((item, index) => (
          <p
            key={`reverse-${index}`}
            className="mx-8 font-Righteous text-[10.4rem] uppercase leading-[12.48rem]"
          >
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSec;
