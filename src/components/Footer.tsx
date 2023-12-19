/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from 'react-router-dom';

import FacebookIcon from '../icons/icon-facebook.svg?react';
import PinInterestIcon from '../icons/icon-pinterest.svg?react';
import TwitterIcon from '../icons/icon-twitter.svg?react';
import Logo from '../icons/logo.svg?react';

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="absolute bottom-0 z-50 py-6 md:py-12 px-6 md:px-12 w-full bg-dark-green text-center sm:text-left">
      <div className="flex mx-auto flex-wrap md:flex-nowrap">
        {/* Column One */}
        <div className="w-full flex flex-col flex-wrap sm:flex-nowrap sm:justify-between sm:flex-row md:gap-x-8 lg:gap-x-32 md:w-3/5">
          <div className="w-full sm:w-auto flex flex-col sm:justify-between items-center md:items-start md:pl-11">
            <Logo className="h-6 md:h-10" />
            <div className=" w-full flex justify-center gap-x-4">
              <NavLink
                to="/"
                className="text-white hover:text-gray-200 py-2 text-lg font-medium"
                aria-current="page"
              >
                home
              </NavLink>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-200 py-2 text-lg font-medium"
              >
                about
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col p-4 text-white opacity-60 text-sm">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us: 949-833-7432</p>
          </div>
        </div>

        {/* Column Two */}
        <div className="w-full flex flex-col gap-y-5 sm:flex-row md:flex-col flex-wrap sm:flex-nowrap sm:justify-between mt-4 md:mt-0 items-center sm:justify-items-start md:items-end sm:text-left md:w-2/5">
          <div className="flex gap-x-4">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <PinInterestIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
          </div>
          <p className="text-white text-sm opacity-60">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
