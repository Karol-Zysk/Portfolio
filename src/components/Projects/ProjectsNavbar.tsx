import { FunctionComponent } from 'react';
import { Category } from 'type';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: (category: Category | 'all') => void;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-violet';
  if (active === value) className += ' text-violet';

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: (category: Category | 'all') => void;
  active: string;
}> = (props) => {
  return (
    <div className='flex list-none space-x-3 overflow-x-auto px-3 py-2'>
      <NavItem value='all' {...props} />
      <NavItem value='React' {...props} />
      <NavItem value='MongoDB' {...props} />
      <NavItem value='Typescript' {...props} />
      <NavItem value='Node' {...props} />
    </div>
  );
};

export default ProjectsNavbar;
