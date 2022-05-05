import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Skill } from 'type';

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: { duration: 500, type: 'spring', damping: 10, stifness: 100 },
    },
  };
  return (
    <div className=' my-3 rounded-full bg-gray-300  text-white dark:bg-dark-200 '>
      <motion.div
        className='flex items-center rounded-full bg-gradient-to-r  from-violet to-blue-600 px-4 py-2 text-sm'
        variants={variants}
        initial='initial'
        animate='animate'
        style={{ width: level }}
      >
        <Icon className='mr-3 ' size={12} />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
