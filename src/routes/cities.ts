import { Router, Response, NextFunction } from 'express';

import CitiesController from '../controllers/citiesController';

const router = Router();

router.all('*', (req: any, res: Response, next: NextFunction) => {
    const controller = new CitiesController();
    req.controller = controller;
    next();
});

router.get('/', async (req: any, res: Response) => {
    const allCities = await req.controller.getAll();
    res.json(allCities);
});

router.get('/:id', async (req: any, res: Response) => {
    const city = await req.controller.getById(req.params.id);

    if (!city) {
        res.status(404);
        res.json({ error: true, message: `City with id ${req.params.id} does not exist` });
    }

    res.json(city);
});

export default router;
