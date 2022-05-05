import { fadeInUp } from 'animations';
import { motion } from 'framer-motion';
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

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <motion.button
        animate='animate'
        initial='initial'
        variants={fadeInUp}
        onClick={changeTheme}
        className='  absolute right-10 top-10 text-white md:right-10 md:top-10'
      >
        {theme === 'light' ? (
          <BsFillSunFill size={42} color='yellow' />
        ) : (
          <FaMoon size={36} />
        )}
      </motion.button>
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
          <span className='text-green '>Karol </span> Zyśk
        </h3>
        <p className='my-3  px-2 py-1 text-lg  '>Junior Frontend Developer</p>

        <div className='my-5 mx-auto flex w-9/12 justify-around   text-green md:w-full'>
          <a
            href='https://github.com/Karol-Zysk/'
            className='text-md flex  items-center rounded-3xl border-2 border-green py-1 px-2 duration-100 ease-linear hover:scale-105 '
          >
            Github
            <AiFillGithub size={30} className='ml-2 ' />
          </a>
        </div>
        <div
          className='dark:bg-black-500 my-5 bg-gray-200 py-4 dark:bg-dark-200 '
          style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          <div className='mb-2 flex items-center justify-center space-x-2'>
            <GoLocation />
            <span>Warszawa, Polska</span>
          </div>
          <div className='mb-2 flex items-center justify-center space-x-2'>
            <span>zysk.karol.pawel@gmail.com</span>
          </div>
          <div className=' flex items-center justify-center space-x-2'>
            <AiOutlinePhone />
            <span>518-201-934</span>
          </div>
        </div>

        <a
          className='my-2 ml-auto mr-auto flex w-8/12 rounded-full bg-black bg-gradient-to-r from-green to-blue-400 py-2 px-5 text-center  text-white focus:outline-none'
          href='/assets/Karol_Zyśk_-_Frontend_Developer.pdf'
          download='Karol_Zyśk_-_Frontend_Developer.pdf'
        >
          <div className='ml-auto mr-auto flex'>
            <GiTie className='h-6 w-6' />
            Resume
          </div>
        </a>
        <button
          type='button'
          onClick={() =>
            (document.location = 'mailto:zysk.karol.pawel@gmail.com')
          }
          className='my-2 w-8/12 rounded-full bg-black bg-gradient-to-r from-green to-blue-400 py-2 px-5  text-white focus:outline-none'
        >
          <div className='mr-auto ml-auto flex items-center justify-center'>
            <GoMail className='mr-2 h-6 w-6' />
            Email Me
          </div>
        </button>
      </div>
    </>
  );
};

export default SideBar;
