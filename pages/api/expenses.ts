import type { NextApiRequest, NextApiResponse } from 'next';

const expenses = [
    { id: 1, amount: 50 },
    { id: 2, amount: 30 },
    { id: 3, amount: 20 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(expenses);
};
