import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('TESTING!');
    res.send('Hello from Home Page!');
});

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
