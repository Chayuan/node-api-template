import express from 'express';
import dotenv from 'dotenv';
import initDatabase from './db';


const startServer = async (): Promise<void> => {
    try {
        dotenv.config();
        const app = express();

        await initDatabase();

        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log('Error starting server');
        console.log(error);
    }
};

startServer();
