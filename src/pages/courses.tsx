import { fadeInUp, routeAnimation, stagger } from 'animations';
import { motion } from 'framer-motion';
import Head from 'next/head';
import * as React from 'react';

import Course from '@/components/Courses/Courses';

import { courses } from '../data/Data';

const Courses = () => {
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

      <div
        className=' mb-2 flex-grow bg-gradient-to-r from-white to-gray-100  p-4 dark:from-dark-100 dark:to-dark-200'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>
          Completed Courses
        </h6>
        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='flex flex-col '
        >
          {courses.map((course) => (
            <motion.div
              variants={fadeInUp}
              key={Math.random()}
              className='mb-1 overflow-hidden rounded-lg bg-gray-200 dark:bg-dark-200 lg:col-span-1'
            >
              <Course
                author={course.author}
                title={course.title}
                date={course.date}
                link={course.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Courses;
