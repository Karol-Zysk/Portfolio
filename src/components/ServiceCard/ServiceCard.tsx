import React, { FunctionComponent } from 'react';
import { Service } from 'type';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className='flex items-center space-x-4 p-2'>
      <Icon size={50} className=' w-39 text-violet ' />
      <div className=' w-8/12 '>
        <h4 className='mb-2 font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
