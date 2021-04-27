import express from 'express';

import postsRouterv1 from './routes/posts';
import postsRouterv2 from './routes/posts1';
import usersRouter from './routes/users';

const server = express();
const port = 3000;


/*  Loggin Middleware */
server.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes
server.use('/v1/posts', postsRouterv1);
server.use('/v2/posts', postsRouterv2);
server.use('/v1/users', usersRouter);

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