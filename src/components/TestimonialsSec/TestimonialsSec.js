import React from 'react';
import QuoteIcon from '../../assets/images/quote.svg';
import CommonTitle from '../CommonTitle/CommonTitle';
import { testimonialsData } from '../../constants/constants';

const TestimonialsSec = () => {
  return (
    <div>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="TESTIMONIALS" />
        </div>

        <div className="grid gap-[2.4rem] xl:grid-cols-3">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-[3.4rem] rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] p-[2.4rem] transition-transform duration-200 hover:translate-y-[-4px] hover:scale-[1.02]"
            >
              <img
                src={QuoteIcon}
                alt="Quote icon"
                className="max-w-[2.7rem]"
              />

              <p className="text-[1.4rem] leading-[2.4rem] text-Light_Gray_2">
                {item.des}
              </p>

              <div className="flex items-center gap-[2rem]">
                <div className="h-[4.8rem] min-w-[4.8rem] overflow-hidden rounded-full">
                  <img
                    src={item.imgURL}
                    alt={`Profile image of ${item.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex w-full max-w-[23rem] flex-col">
                  <h5 className="text-[1.6rem] font-bold leading-[2.4rem]">
                    {item.title}
                  </h5>
                  <h6 className="text-[1.4rem] leading-[2rem] text-Light_Gray_2">
                    {item.subTitle}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSec;
