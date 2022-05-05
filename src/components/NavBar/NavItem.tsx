import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  activItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  route: string;
}> = ({ activItem, name, route, setActiveItem }) => {
  return activItem !== name ? (
    <Link href={route} scroll={false}>
      <a>
        <span onClick={() => setActiveItem(name)} className='hover:text-violet'>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
