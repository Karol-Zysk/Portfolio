import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';

import NavItem from './NavItem';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, [pathname]);

  return (
    <div className='my-3 flex justify-between px-5 py-3'>
      <span className='border-b-4 border-violet text-xl font-bold text-violet md:text-2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 text-xl  '>
        <NavItem
          activItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
          
        />
        <NavItem
          activItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default NavBar;
