import React from 'react';

const Step: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 m-4 bg-white rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-12 h-12" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Hero2: React.FC = () => {
  return (
    <div className="py-12  mt-20">
      <div className=" mx-auto px-6">
        <h3 className='text-xl'>AI HOME DESIGN MADE EASY</h3>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            <span className=' text-purple-400'>How to Use HomeDesignsAI in 3</span> Easy Steps</h2>
        <div className="flex justify-around my-5 mr-2 p-5 items-center">
          <Step
            icon="https://homedesigns.ai/web/images/how-1.svg"
            title="Step 1"
            description="Upload your image of any room type, house or garden"
          />
          <Step
            icon="https://homedesigns.ai/web/images/how-2.svg"
            title="Step 2"
            description="Customize room type, AI strength, custom instructions, mode and design style"
          />
          <Step
            icon="https://homedesigns.ai/web/images/how-3.svg"
            title="Step 3"
            description="Generate new decoration and design ideas in less than 30 seconds"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
