import { routeAnimation } from 'animations';
import { motion } from 'framer-motion';
import React from 'react';

import { languages, tools } from '@/data/Data';

import Bar from '@/components/Bar/Bar';

const Resume = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 500, type: 'spring', damping: 10, stifness: 100 },
    },
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-6 py-2'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={variants} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Soft Skills</h5>
          <div className=''>
            <p className='mb-1 font-semibold'>Teamwork</p>
            <p className='mb-1 font-semibold'>Creative thinking</p>
            <p className='mb-1 font-semibold'>Problem-solving </p>
            <p className='mb-1 font-semibold'>Communication </p>
          </div>
        </motion.div>
        <motion.div variants={variants} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Not Related</h5>
          <div className=''>
            <p className='mb-1 font-semibold'>
              Champion of Mazovia cadets in boxing, weight 75 kg
            </p>
            <p className='mb-1 font-semibold'>
              Personal Trainer with 7 years of experience
            </p>
            <p className='mb-1 font-semibold'>
              Boxing Trainer with 7 years of experience
            </p>
            <p className='mb-1 font-semibold'>
              Sports Masseur with 3 years of experience
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
