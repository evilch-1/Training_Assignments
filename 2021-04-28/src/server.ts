import express from 'express';
import cors from 'cors';

import postsRouterv1 from './routes/posts';
// import postsRouterv2 from './routes/posts1';
import usersRouter from './routes/users';

const server = express();
const port = 3500;

// Attach cors headers
server.use(cors());

/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes
server.use('/posts', postsRouterv1);
server.use('/users', usersRouter);

server.get('/', (req, res) => {
    res.send('Greetings!');
});

// server.get('/posts', (req, res) => {
//     res.send(`Send posts as response`);
// });

// server.get('/users', (req, res) => {
//     res.send(`Send users as response`);
// });

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});