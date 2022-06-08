import React, { FunctionComponent } from 'react';
import { ICourses } from 'type';

const Course: FunctionComponent<ICourses> = ({ author, title, date, link }) => {
  return (
    <div className='w-100 flex  justify-center  '>
      <div className='h-10/12 grid w-full grid-cols-6 items-center  p-1  text-xs  shadow-[0_2px_6px_15px_rgba(0,0,0,1)] sm:p-1 md:text-sm lg:text-lg xl:p-2  '>
        <div className=' font-600 col-span-2 m-1  content-center pl-1'>
          {author}
        </div>
        <div className='col-span-3 border-l-2 border-white pl-2  font-bold dark:border-gray-500'>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </div>
        <div className='font-500 col-span-1 m-1 border-l-2 border-white pl-1 dark:border-gray-500 md:pl-2'>
          {date}
        </div>
      </div>
    </div>
  );
};

export default Course;
