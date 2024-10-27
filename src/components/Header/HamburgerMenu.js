import React from 'react';
import { navLinks, navSocialItems } from '../../constants/constants';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ isActive, toggleHamburgerMenu, handleNavClick }) => {
  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <React.Fragment>
      <div>
        <button
          onClick={toggleHamburgerMenu}
          className="flex h-[4.4rem] w-[4.4rem] flex-col items-center justify-center gap-[.8rem]"
        >
          <span
            className={`${isActive ? 'translate-y-[5.3px] rotate-[45deg]' : 'translate-y-[0] rotate-[0deg]'} h-[0.25rem] w-[2rem] rounded-[1rem] bg-Dark_Gray transition-all duration-300`}
          ></span>
          <span
            className={`${isActive ? 'translate-y-[-5.3px] rotate-[-45deg]' : 'translate-y-[0] rotate-[0deg]'} h-[0.25rem] w-[2rem] rounded-[1rem] bg-Dark_Gray transition-all duration-300`}
          ></span>
        </button>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute left-0 top-full z-[999] w-full overflow-hidden bg-Charcoal_Black px-[2rem] pb-[11rem] pt-[2rem] lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((item, idx) => (
                <motion.li
                  variants={itemVariants}
                  key={idx}
                  className="select-none text-[4rem] font-semibold leading-[5.2rem] tracking-[-0.15px] hover:text-[#c7c7c7]"
                >
                  <NavLink
                    to={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="nav-item"
                  >
                    {item.text}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <hr className="my-[3rem] border-[rgb(34_34_34)]" />

            <ul className="flex flex-col">
              {navSocialItems.map((item, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  <a
                    href={item.link}
                    className="text-[1.5rem] font-medium leading-[3rem] tracking-[-0.15px]"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

HamburgerMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleHamburgerMenu: PropTypes.func.isRequired,
  handleNavClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
