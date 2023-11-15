/// <reference types="vite-plugin-svgr/client" />
import { Link, NavLink } from 'react-router-dom';

import FacebookIcon from '../icons/icon-facebook.svg?react';
import PinInterestIcon from '../icons/icon-pinterest.svg?react';
import TwitterIcon from '../icons/icon-twitter.svg?react';
import Logo from '../icons/logo.svg?react';

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="z-50 py-10 px-12 w-full bg-dark-green">
      <div className="flex mx-auto justify-between flex-wrap">
        <div className="flex items-center justify-evenly flex-col ">
          <Logo />
          <div className="flex w-full justify-between">
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
        <div className="flex mt-4 w-full sm:w-auto sm:mt-0 sm:flex-col items-end justify-between sm:justify-evenly">
          <div className="flex gap-x-4">
            <Link to="facebook.com">
              <FacebookIcon />
            </Link>
            <PinInterestIcon />
            <TwitterIcon />
          </div>
          <p className="text-white text-sm opacity-60">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
