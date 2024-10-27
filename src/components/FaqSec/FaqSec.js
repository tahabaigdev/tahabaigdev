import React from 'react';
import CommonTitle from '../CommonTitle/CommonTitle';
import AccordionList from '../Accordion/AccordionList';

const FaqSec = () => {
  return (
    <div className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="FAQs" />
        </div>

        <div className="rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] px-[2rem] py-[2rem]">
          <AccordionList />
        </div>
      </div>
    </div>
  );
};

export default FaqSec;
