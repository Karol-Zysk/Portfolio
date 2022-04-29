import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

import photo from '../img/photo.jpg';

const SideBar = () => {
  return (
    <div>
      <Image
        src={photo}
        alt='avatar'
        className='mx-auto h-32 w-32 rounded-full'
      ></Image>
      <h3 className='my-3 text-3xl font-medium'>
        <span>Karol </span>Zyśk
      </h3>
      <p
        className='my-3 rounded-full
      px-2 py-1 bg-gray-200'
      >
        Junior Frontend Developer
      </p>
      <p>
        <GiTie className='h-6 w-6' />
        Download Resume
      </p>
      {/* //social icons */}
      <div>
        <AiFillGithub />
      </div>
      {/* //adress */}
      <div>
        <div>
          <GoLocation />
          <span>Warszawa, Polska</span>
        </div>
        <p>zysk.karol.pawel@gmail.com</p>
        <p>518-201-934</p>
        {/* //EmailButton */}
        {/* //Toggle Theme */}
      </div>
    </div>
  );
};

export default SideBar;
