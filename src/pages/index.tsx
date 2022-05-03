import { GetStaticPropsContext } from 'next';
import * as React from 'react';

import ServiceCard from '@/components/ServiceCard/ServiceCard';

import { services } from '../data/aboutData';

// import { services } from '@/data/aboutData';

const index = () => {
  return (
    <div className='flex flex-grow flex-col px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>{' '}
        and <b>React.js</b>{' '}
      </h5>
      <div
        className='mt-5 flex-grow bg-gray-400 p-4'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map((service) => (
            <div
              key={Math.random()}
              className='overflow-hidden rounded-lg bg-gray-200 lg:col-span-1'
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async (_context: GetStaticPropsContext) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
