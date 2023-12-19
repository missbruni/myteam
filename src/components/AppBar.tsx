/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../icons/logo.svg?react';
import SideBar from './SideBar';

type AppBarProps = {};
const AppBar: React.FC<AppBarProps> = () => {
  return (
    <header className="flex z-50 bg-midnight-green py-4 md:py-12 px-8 md:px-20 ">
      <nav className="flex-1">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0">
                <NavLink to="/">
                  <Logo height={40} />
                </NavLink>
              </div>
              <div className="hidden sm:ml-14 sm:block flex-1">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium"
                    aria-current="page"
                  >
                    home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium"
                  >
                    about
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <NavLink to="/contact">
                <button className="btn-primary-light">Contact us</button>
              </NavLink>
            </div>
            <div className="sm:hidden">
              <SideBar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
