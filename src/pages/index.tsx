import { fadeInUp, routeAnimation, stagger } from 'animations';
import { motion } from 'framer-motion';
import { GetStaticPropsContext, NextPage } from 'next';
import * as React from 'react';

import ServiceCard from '@/components/ServiceCard/ServiceCard';

import { services } from '../data/Data';

// import { services } from '@/data/aboutData';

const About: NextPage = () => {
  return (
    <motion.div
      className='flex flex-grow flex-col px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h5 className='my-3 font-medium'>
        I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>{' '}
        and <b>React.js</b>{' '}
      </h5>
      <div
        className='mt-5 flex-grow bg-gradient-to-r from-gray-300 to-gray-100  p-4 dark:from-dark-100 dark:to-dark-200'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='grid gap-6 lg:grid-cols-2'
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={Math.random()}
              className='overflow-hidden rounded-lg bg-gray-200 dark:bg-dark-200 lg:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

export const getStaticProps = async (_context: GetStaticPropsContext) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
