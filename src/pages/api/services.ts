import { NextApiRequest, NextApiResponse } from 'next';

import { services } from '@/data/Data';

const data = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};

export default data;
