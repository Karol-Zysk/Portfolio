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
        <div className='absolute top-0 left-0 z-10 grid h-auto w-full gap-x-12 bg-gray-100 p-2 text-black dark:bg-dark-400 dark:text-white md:grid-cols-2'>
          <div>
            <Image
              src={image_path}
              alt={name}
              layout='responsive'
              height='150'
              width='300'
            />
            <div className='my-4  flex justify-center space-x-3'>
              <a
                href={github_url}
                className='flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-dark-200'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
            <h3 className='mb-3 font-medium'>{description}</h3>

            <div className='mt-5 flex flex-wrap space-x-2 text-sm tracking-wider'>
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className='rounde-sm my-1 bg-gray-200 px-2 py-1 dark:bg-dark-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className='absolute top-3 right-3 rounded-full bg-gray-200 p-1 focus:outline-none dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
