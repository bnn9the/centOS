import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const { PORT } = process.env;

app.get('/', (res, req) => {
    req.send('hello world');
});

app.listen(PORT, (err) => {
    if(err) {
        console.error(err);
        process.exit(0);
    }
    console.info(`Server is listening port ${PORT}`);
});