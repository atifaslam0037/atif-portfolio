import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='max-w-[1100px] w-full grid grid-cols-2 gap-8 px-6 sm:px-8'>
          <div className='sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-600 text-white'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-6 sm:px-8'>
            <div className='sm:text-right text-3xl sm:text-4xl font-semibold text-white'>
              <p>Hi. I'm Atif Aslam, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-slate-300 text-base sm:text-lg'>
                I'm a Front-End Web Developer with <span className='text-cyan-300 font-semibold'>2 years</span> of hands-on experience building responsive, user-friendly websites and web applications. I specialize in turning design ideas into interactive digital experiences using technologies like HTML, Tailwind CSS, JavaScript, and React. I'm passionate about clean code, beautiful UI, and creating meaningful products that improve how people interact with the web.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
