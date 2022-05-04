import React, { FunctionComponent } from 'react';
import { Skill } from 'type';

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className=' my-3 rounded-full bg-gray-300 text-white dark:bg-dark-200 '>
      <div
        className='flex items-center rounded-full  bg-gradient-to-r from-green to-blue-600 px-4 py-2'
        style={{ width: level }}
      >
        <Icon className='mr-3' />
        {name}
      </div>
    </div>
  );
};

export default Bar;
