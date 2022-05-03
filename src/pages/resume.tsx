import React from 'react';

import { languages, tools } from '@/data/aboutData';

import Bar from '@/components/Bar/Bar';

const resume = () => {
  return (
    <div className=' px-6 py-2'>
      <div className='grid gap-6 md:grid-cols-2 '>
        <div>
          <h5 className='my-3 text-2xl font-bold '>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>SGGW</h5>
            <p className='font-semibold '>Biologia 2010-2013</p>
            <p className='my-3'>
              Im currently pursuing teaching i Technology . Front End Developer
              Wannabe
            </p>
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold '>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>SGGW</h5>
            <p className='font-semibold '>Biologia 2010-2013</p>
            <p className='my-3'>
              Im currently pursuing teaching i Technology . Front End Developer
              Wannabe
            </p>
          </div>
        </div>
      </div>
      <div className='grid gap-3 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
