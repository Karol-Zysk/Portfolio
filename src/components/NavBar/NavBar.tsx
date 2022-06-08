import { useRouter } from 'next/router';
import React from 'react';

import NavItem from './NavItem';

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <div className='justify-left my-2 sm:my-3 flex space-x-6 px-5 py-3'>
      <NavItem name='About' pathname={pathname} route='/' />

      <NavItem name='Projects' pathname={pathname} route='/projects' />

      <NavItem name='Resume' pathname={pathname} route='/resume' />

      <NavItem name='Courses' pathname={pathname} route='/courses' />
    </div>
  );
};

export default NavBar;
