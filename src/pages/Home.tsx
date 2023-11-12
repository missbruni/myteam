import React from 'react';
import { Link } from 'react-router-dom';

import Textarea from '../elements/Textarea';
import Textfield from '../elements/Textfield';

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
        <Textfield label="Email" errorText="Please provide a valid email address" />
        <Textarea label="Message" />

        <button className="btn-primary-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default HomePage;
