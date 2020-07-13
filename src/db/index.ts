import mongoose, { Connection } from 'mongoose';

export let database: Connection;

export default async (): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            if (!process.env.MONGO_URL) {
                reject('Database configuration error');
            }

            database = mongoose.connection;

            database.on('connection', () => {
                console.log('Connecting to the database...');
            });

            database.on('error', error => {
                mongoose.disconnect();
                console.log(error);
                process.exit(1);
            });

            database.once('open', () => {
                console.log('Connected !');
                resolve();
            });

            mongoose
                .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
                .catch(err => {
                    reject(err);
                });
        } catch (e) {
            reject(e);
        }
    });
};
