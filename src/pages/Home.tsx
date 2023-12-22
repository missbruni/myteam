import React from 'react';
import { NavLink } from 'react-router-dom';

import AishaAvatar from '../assets/avatar-aiysha.jpg';
import ArthurAvatar from '../assets/avatar-arthur.jpg';
import KateAvatar from '../assets/avatar-nikita.jpg';
import PatternSvg1 from '../assets/bg-pattern-home-1.svg?react';
import PatternSvg2 from '../assets/bg-pattern-home-2.svg?react';
import PatternSvg3 from '../assets/bg-pattern-home-3.svg?react';
import PatternSvg4 from '../assets/bg-pattern-home-4-about-3.svg?react';
import PatternSvg5 from '../assets/bg-pattern-home-5.svg?react';
import PatternSvg6 from '../assets/bg-pattern-home-6-about-5.svg?react';
import ChartIcon from '../icons/icon-chart.svg?react';
import CogIcon from '../icons/icon-cog.svg?react';
import PersonIcon from '../icons/icon-person.svg?react';
import QuotesIcon from '../icons/icon-quotes.svg?react';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center sm:justify-start">
      {/* Section 1 */}
      <section className="w-full relative flex md:flex-1 flex-col md:flex-row bg-midnight-green px-6 sm:px-10 md:px-40 py-14 md:py-40 pb-[150px]">
        <PatternSvg1 className="absolute -ml-[100px] left-0 hidden md:block" />
        <div className=" w-full flex-1 flex flex-col md:flex-row justify-center items-center lg:justify-between gap-y-6 gap-12 ">
          <p className="text-white text-center md:text-left text-[40px] lg:text-[100px] font-bold leading-[45px] max-w-[290px] sm:max-w-[540px] sm:leading-[100px] z-10">
            Find the best <span className="text-[#f67e7e] leading-10">talent</span>
          </p>
          <div className="flex flex-col gap-y-8">
            <div className="w-[50px] h-[4px] bg-rapture-blue hidden md:block" />
            <p className="text-white text-center md:text-left leading-8 md:px-0 max-w-[500px] sm:max-w-[600px] text-[18px] z-10">
              Finding the right people and building high performing teams can be hard. Most
              companies aren’t tapping into the abundance of global talent. We’re about to change
              that.
            </p>
          </div>
        </div>
        <PatternSvg2 className="w-[375px] absolute bottom-0 left-[50%] -translate-x-[50%] md:left-[80%] md:-translate-x-[80%]" />
      </section>

      {/* Section 2 */}
      <section className="w-full relative overflow-x-clip flex md:flex-1 flex-col lg:flex-row md:gap-10 bg-sacramento px-6 sm:px-10 lg:px-40 py-14 lg:py-40">
        <PatternSvg3 className="absolute top-0 lg:top-auto right-0 md:bottom-0 -mr-[100px]" />
        <div className="flex flex-col md:flex-1 gap-y-10 z-10">
          <div className="w-[50px] h-[4px] bg-light-coral" />
          <p className="text-white text-[40px] lg:text-[48px] lg:max-w-[500px] font-bold leading-[45px] sm:leading-[60px] pr-20 mb-12 lg:pr-0 lg:mb-0">
            Build & manage distributed teams like no one else.
          </p>
        </div>
        <div className="flex flex-col lg:flex-1 gap-y-6">
          <BuildManageItem
            Icon={PersonIcon}
            title="Experienced Individuals"
            text=" Our network is made up of highly experienced professionals who are passionate about what they do."
          />
          <BuildManageItem
            Icon={CogIcon}
            title="Easy to Implement"
            text="Our processes have been refined over years of implementation meaning our teams always deliver."
          />
          <BuildManageItem
            Icon={ChartIcon}
            title="Enhanced Productivity"
            text="Our customized platform with in-built analytics helps you manage your distributed teams."
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full relative flex lg:flex-1 flex-col gap-y-10 bg-deep-jungle px-6 py-14 pt-32 pb-28 sm:px-10 lg:px-40 lg:py-32">
        <PatternSvg4 className="absolute top-0 left-0" />
        <p className="text-white text-[40px] lg:text-[48px] text-center font-bold leading-[45px] sm:leading-[60px] z-10">
          Delivering real results for top companies. Some of our
          <span className="text-rapture-blue"> success stories.</span>
        </p>

        {/* TODO: move this to api mock or even internal endpoint ? */}
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-10">
          <TestimonialItem
            imageUrl={KateAvatar}
            author="Kady Baker"
            job="Product Manager at Bookmark"
            text="“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
          />
          <TestimonialItem
            imageUrl={AishaAvatar}
            author="Aiysha Reese"
            job="Founder of Manage"
            text="“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”"
          />
          <TestimonialItem
            imageUrl={ArthurAvatar}
            author="Arthur Clarke"
            job="Co-founder of MyPhysio"
            text="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"
          />
        </div>
        <PatternSvg5 className="absolute bottom-0 right-0" />
      </section>

      {/* Section 4 */}
      <section className="w-full relative flex md:flex-1 flex-col bg-light-coral px-6 sm:px-10 md:px-32 lg:px-48 md:py-20 py-14 pb-24">
        <div className="flex flex-col sm:flex-row gap-y-4 gap-24 items-center text-center justify-center md:justify-between">
          <p className="text-[40px] text-sacramento lg:text-[48px] font-bold leading-[45px] sm:leading-[60px] z-10">
            Ready to get started?
          </p>
          <NavLink className="z-10" to="/contact">
            <button className="btn-primary-dark whitespace-nowrap">Contact us</button>
          </NavLink>
        </div>
        <PatternSvg6 className="absolute -bottom-0 left-0 -mb-6" />
      </section>
    </div>
  );
};
export default HomePage;

const BuildManageItem = ({
  Icon,
  title,
  text
}: {
  Icon: typeof PersonIcon;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row p-1 gap-8 items-center justify-center">
      <div>
        <Icon />
      </div>
      <div className="flex flex-1 flex-col gxp-y-2 text-center sm:text-left  flex-wrap">
        <p className="text-h3 text-light-coral sm:mb-4">{title}</p>
        <p className="text-body2 text-white font-normal">{text}</p>
      </div>
    </div>
  );
};

const TestimonialItem = ({
  text,
  author,
  job,
  imageUrl
}: {
  text: string;
  author: string;
  job: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-y-6 text-center text-white flex-wrap items-center justify-center">
      <QuotesIcon />
      <p className=" text-white font-normal mt-[-52px]">{text}</p>
      <div className="flex flex-col items-center justify-center">
        <p className="text-h3 text-rapture-blue">{author}</p>
        <p className="text-[13px] italic">{job}</p>

        <img
          className="rounded-full w-62 h-62 border-2 border-white m-6"
          src={imageUrl}
          width={62}
          height={62}
          alt="image description"
        />
      </div>
    </div>
  );
};
