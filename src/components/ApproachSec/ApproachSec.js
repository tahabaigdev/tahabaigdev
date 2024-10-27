import React from 'react';
import CommonTitle from '../CommonTitle/CommonTitle';
import { approachData } from '../../constants/constants';

const ApproachSec = () => {
  return (
    <div className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="MY APPROACH" />
        </div>

        <div className="grid gap-[2.4rem] xl:grid-cols-4">
          {approachData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-[0.8rem] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] px-[2.4rem] py-[2.4rem] pb-[3.2rem] transition-all duration-300"
            >
              <item.icon
                className="text-[3.2rem]"
                style={{ color: item.color }}
                aria-hidden="true"
              />

              <h4 className="text-[2rem] font-semibold leading-[2.8rem]">
                {item.title}
              </h4>

              <p className="text-[1.4rem] leading-[2.4rem] text-Light_Gray_2">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSec;
