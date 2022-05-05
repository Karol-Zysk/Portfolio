import { fadeInUp, stagger, staggerOpacity } from 'animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from 'type';

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
        layout='responsive'
        height='150'
        width='300'
      />

      <p className='my-2 text-center'>{name}</p>

      {showDetail && (
        <div className='fixed top-0 left-0 z-10 grid h-screen w-full gap-x-12 rounded-lg bg-gray-100 p-4 text-black  dark:bg-dark-400 dark:text-white  md:absolute  md:grid-cols-2 md:p-12'>
          <motion.div
            variants={staggerOpacity}
            initial='initial'
            animate='animate'
          >
            <motion.div
              className='rounded-lg border-4 border-gray-600'
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                layout='responsive'
                height='150'
                width='300'
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className='my-4  flex justify-center space-x-3'
            >
              <a
                href={github_url}
                className='flex items-center space-x-3  rounded-lg bg-gray-200 px-4 py-2 text-lg dark:bg-dark-700'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center space-x-3  rounded-lg bg-gray-200 px-4 py-2 text-lg dark:bg-dark-700'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2
              variants={fadeInUp}
              className='mb-3 text-xl font-medium  md:text-2xl'
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className='mt-5 flex flex-wrap space-x-2 text-sm tracking-wider'
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className='rounde-sm my-1 rounded-lg bg-gray-200 px-2 py-1 dark:bg-dark-700'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(false)}
            className='absolute top-3 right-3 rounded-full bg-gray-200 p-1 focus:outline-none  dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
