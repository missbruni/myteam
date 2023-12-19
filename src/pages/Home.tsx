import React from 'react';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center sm:justify-start text-center sm:text-left">
      <div className="flex flex-1 items-center p-6 md:p-12 bg-cyan-950">Find the Best Talent</div>
      <div className="flex flex-1 items-center p-6 md:p-12 bg-teal-950">
        Build and Manage distributed Teams
      </div>
      <div className="flex flex-1 items-center p-6 md:p-12 bg-cyan-950">
        Delivering real results
      </div>
      <div className="flex flex-1 items-center p-6 md:p-12 bg-rose-400">Ready to get started</div>
    </div>
  );
};
export default HomePage;
