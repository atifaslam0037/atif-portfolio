import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='w-full min-h-screen pt-32 pb-12 text-gray-300 bg-gradient-to-b from-[#0b1220] to-[#0a192f]'>
      <div className='max-w-[1100px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-white border-cyan-600'>
            Work
          </p>
          <p className='py-6 text-slate-300'> Check out some of my recent work :</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="relative shadow-lg shadow-[#040c16] group container rounded-xl overflow-hidden flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />
              {/* Hover effect for images */}
              <div className="relative opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-2xl font-semibold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-6 text-center ">
                  {/* eslint-disable-next-line */}
                  {/* <a href={item.github} target="_blank">
                    <button
                      className="rounded-lg px-4 py-2 m-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow active:scale-95"
                    >
                      Code
                    </button>
                  </a> */}
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="rounded-lg px-4 py-2 m-2 bg-white/90 text-gray-900 font-semibold shadow hover:bg-white"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Work;
