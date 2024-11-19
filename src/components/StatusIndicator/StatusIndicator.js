import React from 'react';
import { motion } from 'framer-motion';

const StatusIndicator = () => {
  return (
    <div className="inline-flex w-max items-center gap-[1rem] rounded-[2.4rem] border-t border-[#424242] bg-[#1a1a1a] px-[1.6rem] py-[0.8rem]">
      <motion.span
        className="h-[1rem] w-[1rem] rounded-full bg-[#6fad61]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-[1.4rem] font-medium leading-[1.82rem]">
        Open for collaboration
      </span>
    </div>
  );
};

export default StatusIndicator;
