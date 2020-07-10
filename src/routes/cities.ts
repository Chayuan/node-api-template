import { Router, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

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

router.post('/', async (req: any, res: Response) => {
    try {
        const { name, lat, lng } = req.body;
        const formattedObject = { name, latlng: { lat, lng } }
        const model = req.controller.getModel();
        await model.validate(formattedObject);
        const insertedCity = await req.controller.create(formattedObject);
        res.json(insertedCity);
    } catch(error) {
        if(error instanceof mongoose.Error.ValidationError) {
            res.status(400);
            res.json({ error: true, message: `Bad Request. Missing keys : ${Object.keys(error.errors)}` });
        } else {
            res.status(500);
            res.json({ error: true, message: `Internal server error` });
        }
    }

});

router.get('/:id', async (req: any, res: Response) => {
    const city = await req.controller.getById(req.params.id);

    if (!city) {
        res.status(404);
        res.json({ error: true, message: `City with id ${ req.params.id } does not exist` });
        return;
    }

    res.json(city);
});

export default router;
