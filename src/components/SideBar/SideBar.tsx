import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';
import { AiFillGithub, AiOutlinePhone } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { GiTie } from 'react-icons/gi';
import { GoLocation, GoMail } from 'react-icons/go';

import photo from '../../images/photo.jpg';

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === 'dark' ? (
        <FaMoon
          cursor='pointer'
          size={36}
          onClick={() => setTheme('light')}
          className='pointer  absolute right-7 top-7 text-white md:right-10 md:top-10'
        />
      ) : (
        <BsFillSunFill
          cursor='pointer'
          size={42}
          color='yellow'
          onClick={() => setTheme('dark')}
          className='pointer  absolute right-7 top-7 text-white md:right-10 md:top-10'
        />
      )}

      <div className=' dark:bg-dark-100'>
        <Image
          src={photo}
          alt='avatar'
          className=' mx-auto rounded-full border '
          height='128px'
          width='128px'
          layout='intrinsic'
          quality='100'
        />
        <h3 className='my-3 font-kaushan text-3xl font-medium'>
          <span className='text-violet '>Karol </span> Zyśk
        </h3>
        <p className='my-3  px-2 py-1 text-lg  '>Junior Frontend Developer</p>

        <div
          className='dark:bg-black-500 my-5 bg-gray-200 py-4 dark:bg-dark-200 '
          style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          <div className='mb-2 flex items-center justify-center '>
            <GoLocation size={18} className='mr-2 text-violet' />
            <span>Warszawa, Polska</span>
          </div>
          <a
            href='mailto:zysk.karol.pawel@gmail.com'
            className='mb-2 flex items-center justify-center '
          >
            <div className='spa mr-auto ml-auto flex items-center justify-center'>
              <GoMail size={18} className='mr-2 text-violet' />
              E-Mail me
            </div>
          </a>
          <div className=' flex items-center justify-center space-x-2'>
            <AiOutlinePhone size={22} className='mr-2 text-violet' />
            <span>518-201-934</span>
          </div>
        </div>

        <div className='my-5 mx-auto flex w-10/12 justify-around   text-violet md:w-full'>
          <a
            aria-label='Github'
            href='https://github.com/Karol-Zysk/'
            className='text-md flex  items-center rounded-3xl  border-2  border-violet  px-3 py-1 font-semibold  duration-100 ease-linear hover:scale-105 '
          >
            Github
            <AiFillGithub size={30} className='ml-2 ' />
          </a>
        </div>
        <div className='my-5 mx-auto flex w-10/12 justify-around   text-violet md:w-full'>
          <a
            aria-label='Mail'
            href='/assets/Karol_Zyśk_-_Frontend_Developer.pdf'
            download='Karol_Zyśk_-_Frontend_Developer.pdf'
            className='text-md mr-auto ml-auto flex items-center  rounded-3xl border-2  border-violet  px-3 py-1 font-semibold duration-100 ease-linear hover:scale-105 '
          >
            Resume
            <GiTie size={30} className='ml--1 ' />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
