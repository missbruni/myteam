import React from 'react';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full h-full flex-col">
      <div className="w-full p-6 md:p-12 bg-cyan-950">Find the Best Talent</div>
      <div className="w-full p-6 md:p-12 bg-teal-950">Build and Manage distributed Teams</div>
      <div className="w-full p-6 md:p-12 bg-cyan-950">Delivering real results</div>
      <div className="w-full p-6 md:p-12 bg-rose-400">Ready to get started</div>
    </div>
  );
};
export default HomePage;
