import express from 'express';
import config from './config';
import userRoutes from './routes/user';

const app = express();
const PORT = config.port;

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});