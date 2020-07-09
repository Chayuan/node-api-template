import cities from './cities';

export default (app: any): void => {
    app.use('/cities', cities);

    app.post('/', () => {
        console.log('trying to access root');
    });
};
