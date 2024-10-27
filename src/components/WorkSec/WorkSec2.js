import React from 'react';
import CommonTitle from '../CommonTitle/CommonTitle';
import { FaArrowTurnDown } from 'react-icons/fa6';
import TextMarquee from './TextMarquee';
import { motion } from 'framer-motion';
import { projectsData2 } from '../../constants/constants';

const WorkSec = () => {
  return (
    <div>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div>
          <CommonTitle text="RECENT WORK" />
        </div>

        <div className="grid gap-[2.4rem] lg:grid-cols-2">
          {projectsData2.map((item, idx) => (
            <motion.div key={idx} className="group" whileHover="hover">
              <a href={item.link} className="flex flex-col gap-[1.6rem]">
                <div className="relative aspect-auto overflow-hidden rounded-[2.4rem] lg:aspect-[1/0.7]">
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="h-full w-full object-cover brightness-[1] transition-all duration-300 group-hover:brightness-[0.5]"
                  />

                  <div className="pointer-events-none invisible absolute left-[50%] top-[50%] inline-flex h-[7rem] w-[7rem] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[50%] bg-Pure_White opacity-[0] transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-[1] sm:h-[10rem] sm:w-[10rem]">
                    <FaArrowTurnDown className="-rotate-90 text-[2.5rem] text-Charcoal_Black sm:text-[3.5rem]" />
                  </div>
                </div>

                <div className="relative flex flex-col gap-[3.4rem] overflow-hidden rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] py-[2rem] sm:py-[4rem]">
                  <div className="flex items-center justify-between px-[2rem] sm:px-[4rem]">
                    <span className="text-[1.6rem] font-medium uppercase leading-[2.56rem] tracking-[-0.2px] text-Light_Gray_2">
                      {item.category}
                    </span>

                    <span className="text-[1.6rem] font-medium uppercase leading-[2.56rem] tracking-[-0.2px] text-Light_Gray_2">
                      {item.year}
                    </span>
                  </div>

                  <motion.div
                    initial={{ y: 0 }}
                    variants={{
                      hover: { y: '200%' },
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="flex flex-col gap-[1.2rem] px-[2rem] sm:px-[4rem]"
                  >
                    <h4 className="text-[2.5rem] font-medium leading-[2.8rem] tracking-[-0.9px] sm:text-[3rem] sm:leading-[3.2rem]">
                      {item.title}
                    </h4>

                    <p className="text-[1.6rem] font-normal leading-[2.4rem] tracking-[-0.2px] text-Light_Gray_2">
                      {item.desc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: '200%' }}
                    variants={{
                      hover: { y: 0 },
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute bottom-[10px] hidden lg:block"
                  >
                    <TextMarquee marqueeText={item.marqueeText} />
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSec;
