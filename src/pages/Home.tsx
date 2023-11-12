import React from 'react';
import { Link } from 'react-router-dom';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="p-4 h-screen bg-teal-900 flex-col space-y-4">
      <h2 className="text-h1-large font-sans">Home Page</h2>
      <Link to="about">About us Bro</Link>

      <div className="flex-row space-x-4">
        <button className="btn-primary-light">contact us</button>
        <button className="btn-primary-dark">contact us</button>
        <button className="btn-secondary-light">contact us</button>
      </div>

      <form className="flex-col">
        <div className="relative h-16 min-w-[200px] mb-12">
          <input
            required
            type="email"
            placeholder="Title"
            className="peer h-full w-full border-b border-white bg-transparent pt-2 pb-1.5 pl-4 outline outline-0 transition-all focus:border-emerald-300 text-white placeholder:text-gray-500 focus:outline-0 disabled:border-gray-500 invalid:[&:not(:placeholder-shown)]:border-rose-400"
          />
          <span
            className="mt-2 after:content[' '] text-gray-400 pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none transition-all after:absolute after:-bottom-[2px] after:block after:w-full after:scale-x-0 after:border-b after:border-emerald-300  after:transition-transform after:duration-300 peer-placeholder-shown:text-gray-500 peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-emerald-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500
          after:peer-[:not(:placeholder-shown):invalid]:border-rose-400"
          />
          <p className="mt-2 invisible  text-rose-400 text-[12px] italic peer-[:not(:placeholder-shown):invalid]:visible">
            Please provide a valid email address.
          </p>
        </div>
        <button className="btn-primary-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default HomePage;
