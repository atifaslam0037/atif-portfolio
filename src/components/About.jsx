import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Zanib Zubair, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-[#8892b0] text-xl'>
  I'm a Front-End Web Developer with <span className='text-pink-500 font-semibold'>1 year</span> of hands-on experience building responsive, user-friendly websites and web applications. I specialize in turning design ideas into interactive digital experiences using technologies like HTML, Tailwind CSS, JavaScript, and React. I'm passionate about clean code, beautiful UI, and creating meaningful products that improve how people interact with the web.
</p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
