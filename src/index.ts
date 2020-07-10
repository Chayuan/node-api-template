import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import initDatabase from './db';
import routes from './routes';

const startServer = async (): Promise<void> => {
    try {
        dotenv.config();
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        await initDatabase();

        routes(app);

        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${ process.env.PORT }`);
        });
    } catch (error) {
        console.log('Error starting server');
        console.log(error);
    }
};

startServer();
