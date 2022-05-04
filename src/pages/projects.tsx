import { useState } from 'react';
import { Category } from 'type';

import { projects as projectsData } from '.././data/Data';
import ProjectCard from '../components/Projects/Project';
import ProjectsNavbar from '../components/Projects/ProjectsNavbar';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className='overflow-y-scroll px-5 py-2' style={{ height: '65vh' }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className='relative my-3 grid grid-cols-12 gap-4'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='col-span-12 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 sm:col-span-6 lg:col-span-4'
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
