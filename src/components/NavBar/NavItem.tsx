import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  name: string;
  pathname: string;
  route: string;
}> = ({ name, route, pathname }) => {
  return (
    <div
      className={` ${
        pathname === route
          ? ' border-b-4  border-violet'
          : ' border-b-4  border-transparent '
      }   flex space-x-5 border-b-4  text-xl font-bold  text-violet duration-150 ease-linear hover:border-violet`}
    >
      <Link href={route} scroll={false}>
        {name}
      </Link>
    </div>
  );
};

export default NavItem;
