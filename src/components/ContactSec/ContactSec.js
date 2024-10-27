import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import CommonTitle from '../CommonTitle/CommonTitle';
import { socialLinks } from '../../constants/constants';

const ContactSec = () => {
  return (
    <div className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="LET'S WORK TOGETHER" />
        </div>

        <div className="flex flex-col justify-between gap-[2rem] lg:flex-row">
          <div className="w-full rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] transition-all duration-200 hover:translate-y-[-4px] hover:scale-[1.02] lg:w-[58.56rem]">
            <a
              href="mailto:connectmtb@gmail.com"
              className="group flex h-full w-full flex-col gap-[1.6rem] p-[2.4rem]"
            >
              <div className="flex items-start justify-between">
                <div className="flex w-full max-w-[30rem] flex-col gap-[1rem]">
                  <h5 className="text-[1.4rem] leading-[2.4rem] text-Light_Gray_2 md:text-[1.6rem]">
                    Say Hello!
                  </h5>
                  <h4 className="text-[1.8rem] font-bold leading-[3.2rem] md:text-[2rem]">
                    connectmtb@gmail.com
                  </h4>
                </div>
                <BsArrowUpRight className="text-[2rem] transition-transform duration-200 group-hover:rotate-45 md:text-[2.6rem]" />
              </div>
            </a>
          </div>

          {socialLinks.map((link, index) => (
            <div
              key={index}
              className={`group w-full rounded-[2.4rem] border-t border-[#424242] lg:w-[13rem] ${link.bgColor} transition-all duration-200 hover:translate-y-[-4px] hover:scale-[1.02]`}
            >
              <a
                href={link.href}
                className="flex h-full w-full items-center justify-center p-[2.4rem]"
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
