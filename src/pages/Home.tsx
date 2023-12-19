import React from 'react';

import PatternSvg1 from '../assets/bg-pattern-home-1.svg?react';
import PatternSvg2 from '../assets/bg-pattern-home-2.svg?react';
import PatternSvg3 from '../assets/bg-pattern-home-3.svg?react';
import PatternSvg4 from '../assets/bg-pattern-home-4-about-3.svg?react';
import PatternSvg5 from '../assets/bg-pattern-home-5.svg?react';
import PatternSvg6 from '../assets/bg-pattern-home-6-about-5.svg?react';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center sm:justify-start">
      <div className="flex flex-1 bg-midnight-green flex-col md:flex-row">
        <div className="w-full flex-1 flex flex-col justify-center md:justify-start items-center text-white gap-y-6 px-4 py-24">
          <p className="text-[40px] text-center font-bold leading-[45px]">
            Find the best <span className="text-[#f67e7e] leading-10">talent</span>
          </p>
          <p className="text-center leading-8 px-6">
            Finding the right people and building high performing teams can be hard. Most companies
            aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
        <PatternSvg2 className="w-[375px] md:hidden self-center" />
      </div>
      <div className="w-full flex-1 flex justify-center md:justify-start items-center py-12 text-white bg-teal-950">
        Build and Manage distributed Teams
      </div>
      <div className="w-full flex-1 flex justify-center md:justify-start items-center py-12 text-white bg-cyan-950">
        Delivering real results
      </div>
      <div className="w-full flex-1 flex justify-center md:justify-start items-center py-12 bg-[#f67e7e]">
        Ready to get started
      </div>
    </div>
  );
};
export default HomePage;
