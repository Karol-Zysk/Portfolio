import { fadeInUp, routeAnimation, stagger } from 'animations';
import { motion } from 'framer-motion';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import ServiceCard from '@/components/ServiceCard/ServiceCard';

import { services } from '../data/Data';

const About: NextPage = () => {
  return (
    <motion.div
      className='flex flex-grow flex-col px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Frontend Developer | portfolio |Karol Zyśk</title>
      </Head>
      <h5 className='my-3 text-lg font-medium'>
        Frontend Developer with a passion to Create and a willingness to Learn{' '}
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return { props: { endpoint: process.env.VERCEL_URL } };
};
