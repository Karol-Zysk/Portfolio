import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  name: string;
  pathname: string;
  route: string;
}> = ({ name, route, pathname }) => {
  return (
    <motion.span
      className={` ${
        pathname === route
          ? ' border-b-4  border-violet'
          : ' hover:border-b-4   hover:border-violet'
      }   text-xl font-bold  text-violet duration-150  ease-linear md:text-2xl`}
    >
      <div className='flex space-x-5  text-xl   '>
        <Link href={route} scroll={false}>
          <a>
            {}
            <span className='hover:text-violet'>{name}</span>
          </a>
        </Link>
      </div>
    </motion.span>
  );
};

export default NavItem;
