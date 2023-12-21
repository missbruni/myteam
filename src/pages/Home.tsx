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
      <section className="flex flex-1 bg-midnight-green flex-col md:flex-row">
        <div className="w-full flex-1 flex flex-col justify-center md:justify-start items-center text-white gap-y-6 px-4 sm:px-11 py-24 sm:py-32">
          <p className="text-[40px] md:text-h1-small text-center font-bold leading-[45px] max-w-[290px] sm:max-w-[350px] sm:leading-[60px]">
            Find the best <span className="text-[#f67e7e] leading-10">talent</span>
          </p>
          <p className="text-center leading-8 px-6 max-w-[500px] sm:max-w-[600px] text-base">
            Finding the right people and building high performing teams can be hard. Most companies
            aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
        <PatternSvg2 className="w-[375px] md:hidden self-center" />
      </section>

      <section className="w-full relative flex flex-col text-white bg-sacramento overflow-hidden">
        <PatternSvg3 className="absolute right-0 -mr-[100px]" />
        <div className="flex flex-col gap-y-10 p-8 z-10">
          <div className="w-[50px] h-[4px] bg-light-coral" />
          <p className="text-[40px] md:text-h1-small font-bold leading-[45px] sm:leading-[60px]">
            Build & manage distributed teams like no one else.
          </p>
        </div>

        <div className="flex flex-col gap-y-6 p-8 pb-12">
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

      <section className="w-full flex-1 flex flex-col  bg-deep-jungle">
        <PatternSvg4 />
        <div className="py-12 p-8 text-white">
          <p className="text-[40px] md:text-h1-small font-bold leading-[45px] sm:leading-[60px]">
            Delivering real results for top companies. Some of our
            <span className="text-rapture-blue"> success stories.</span>
          </p>
        </div>
        <div className="flex flex-col p-8 gap-y-10">
          {/* MOVE TO DATA */}
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
        <PatternSvg5 className="self-end" />
      </section>

      <section className="w-full relative flex-1 flex-col flex bg-light-coral">
        <div className="flex p-8 py-14 pb-16 flex-col sm:flex-row px-8 gap-y-4 gap-12 items-center text-center justify-center">
          <p className="text-[40px] text-sacramento md:text-h1-small font-bold leading-[45px] sm:leading-[60px] z-10">
            Ready to get started?
          </p>
          <NavLink className="z-10" to="/contact">
            <button className="btn-primary-dark whitespace-nowrap">Contact us</button>
          </NavLink>
        </div>
        <PatternSvg6 className="absolute -bottom-6" />
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
