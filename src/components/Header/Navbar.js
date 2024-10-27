import React from 'react';
import { NavLink } from 'react-router-dom/dist';
import { navLinks } from '../../constants/constants';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[2rem]">
        {navLinks.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.link}
              className="nav-item select-none text-[1.5rem] font-medium leading-[3rem] tracking-[-0.15px] transition-all duration-300 hover:text-[#c7c7c7]"
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
