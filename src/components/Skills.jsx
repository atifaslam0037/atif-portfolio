import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import vue from '../assets/vue.png';
import nextj from '../assets/nextj.png';
import sql from '../assets/sql.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 py-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p data-aos="slide-left" className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center pt-8'>
          {[
            { src: HTML, label: 'HTML' },
            { src: CSS, label: 'CSS' },
            { src: JavaScript, label: 'JavaScript' },
            { src: ReactImg, label: 'React' },
            { src: GitHub, label: 'GitHub' },
            { src: Node, label: 'Node.js' },
            { src: Mongo, label: 'MongoDB' },
            { src: Tailwind, label: 'Tailwind' },
            { src: FireBase, label: 'Firebase' },
            { src: nextj, label: 'Next.js' },
            { src: vue, label: 'Vue.js' },
            { src: sql, label: 'SQL' },
          ].map((tech, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg py-4 bg-[#0f1a2f]'
            >
              <img className='w-20 mx-auto' src={tech.src} alt={`${tech.label} icon`} />
              <p className='mt-4 text-sm sm:text-base font-medium'>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
