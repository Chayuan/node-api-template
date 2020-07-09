export default app => {
    app.get('/cities', () => {
        console.log('trying to access cities');
    });
    app.post('/', () => {
        console.log('trying to access root');
    });
};
