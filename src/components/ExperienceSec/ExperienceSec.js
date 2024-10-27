import React from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { experienceData } from '../../constants/constants';
import CommonTitle from '../CommonTitle/CommonTitle';

const ExperienceSec = () => {
  return (
    <div className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="EXPERIENCE" />
        </div>

        <div className="flex flex-col gap-[2.4rem]">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-start gap-[1.6rem] rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] p-[2.4rem] transition-all duration-300 lg:flex-row"
            >
              <div className="flex basis-[30%] flex-col items-center gap-[1.6rem] lg:flex-row xl:basis-[25%]">
                <IoCalendarClearOutline
                  className="text-[2rem] text-[#E8CD82]"
                  aria-hidden="true"
                />
                <h4 className="text-[1.6rem] lg:text-[2rem] lg:leading-[3.2rem]">
                  {item.tenure}
                </h4>
              </div>

              <div className="basis-[40%] xl:basis-[50%]">
                <h4 className="text-[1.6rem] font-semibold lg:text-[2rem] lg:leading-[2.8rem]">
                  {item.category}
                </h4>
              </div>

              <div className="basis-[30%] xl:basis-[25%]">
                <h4 className="text-[1.6rem] text-Light_Gray_3 lg:text-[2rem] lg:leading-[3.2rem]">
                  {item.company}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSec;
