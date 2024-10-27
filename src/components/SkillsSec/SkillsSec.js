import React from 'react';
import { skillsData } from '../../constants/constants';
import CommonTitle from '../CommonTitle/CommonTitle';

const SkillsSec = () => {
  return (
    <div>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="SKILLS" />
        </div>

        <div className="grid gap-[2.4rem] lg:grid-cols-3">
          {skillsData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-[1.6rem] rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] p-[2.4rem] transition-transform duration-200 hover:translate-y-[-4px] hover:scale-[1.02]"
            >
              <item.icon
                className="text-[2.6rem]"
                style={{ color: item.color }}
                aria-hidden="true"
              />
              <h3 className="text-[2rem] font-semibold leading-[2.8rem]">
                {item.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSec;
