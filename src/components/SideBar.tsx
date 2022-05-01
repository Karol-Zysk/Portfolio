import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

import photo from '../img/photo.jpg';

const SideBar = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        src={photo}
        alt='avatar'
        className='mx-auto h-32 w-32 rounded-full'
      ></Image>
      <h3 className='my-3 font-kaushan text-3xl font-medium'>
        <span>Karol </span>Zyśk
      </h3>
      <p
        className='my-3 rounded-full
      bg-gray-200 px-2 py-1'
      >
        Junior Frontend Developer
      </p>
      <p>
        <a
          className='my-3 flex
      items-center justify-center rounded-full bg-gray-200 px-2 py-1 '
          href='#'
          download='name'
        >
          <GiTie className='h-6 w-6' />
          Download Resume
        </a>
      </p>
      {/* //social icons */}
      <div className='my-5 mx-auto flex w-9/12 justify-around   text-green md:w-full'>
        <a href='#'>
          <AiFillGithub className='h-8 w-8 cursor-pointer' />
        </a>
        <a href='#'>
          <AiFillGithub className='h-8 w-8 cursor-pointer' />
        </a>
        <a href='#'>
          <AiFillGithub className='h-8 w-8 cursor-pointer' />
        </a>
      </div>
      {/* //adress */}
      <div
        className='my-5 bg-gray-200 py-4 '
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Warszawa, Polska</span>
        </div>
        <p className='my-2'>zysk.karol.pawel@gmail.com</p>
        <p className='my-2'>518-201-934</p>
        <button
          type='button'
          onClick={() => router.push('mailto:email@gmail.com')}
          className='my-2 w-8/12 rounded-full bg-gradient-to-r from-green to-blue-400 py-2 px-5  text-white focus:outline-none'
        >
          Email Me
        </button>
        <button className='my-2 w-8/12 rounded-full bg-gradient-to-r from-green to-blue-400 py-2 px-5  text-white'>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default SideBar;
