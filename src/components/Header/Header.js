import React, { useCallback, useState } from 'react';
import logo from '../../assets/images/logo.png';
import Navbar from './Navbar';
import HamburgerMenu from '../Header/HamburgerMenu';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleHamburgerMenu = () => {
    setIsActive(!isActive);
    document.body.style.overflowY = isActive ? 'auto' : 'hidden';
  };

  const handleNavClick = useCallback(
    (e, link) => {
      if (location.pathname === link) {
        e.preventDefault();
      }
      setIsActive(false);
      document.body.style.overflowY = 'auto';
    },
    [location.pathname]
  );

  return (
    <header className="relative">
      <div className="container-style flex h-[6.4rem] items-center justify-between">
        <div>
          <NavLink
            to="/"
            className="flex select-none items-center gap-[.3rem]"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <img
              src={logo}
              alt="Taha Baig Logo"
              aria-label="Navigate to homepage"
              className="max-w-[4rem]"
            />

            <span className="text-[1.8rem] font-normal uppercase leading-[1.8rem]">
              TAHA.BAIG
            </span>
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Hamburger Menu */}

        <div className="lg:hidden">
          <HamburgerMenu
            isActive={isActive}
            toggleHamburgerMenu={toggleHamburgerMenu}
            handleNavClick={handleNavClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
