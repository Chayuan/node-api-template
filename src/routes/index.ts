import { Request, Response } from 'express';
import cities from './cities';

export default (app: any): void => {
    app.use('/cities', cities);

    app.get('/', (req: Request, res: Response) => {
        res.status(403);
        res.json({ error: true, message: `Forbidden` });
        console.log('trying to access root');
    });
};
