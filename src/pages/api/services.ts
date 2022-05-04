import { NextApiRequest, NextApiResponse } from 'next';

import { services } from '@/data/Data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};
