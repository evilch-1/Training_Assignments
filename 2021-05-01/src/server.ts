// Reads environment variables
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

import postsRouterv1 from './routes/posts';
import usersRouter from './routes/users';
import config from './typeormconfig';

const server = express();
const port = process.env.SERVER_PORT;

// connect to database
async function connectToPersistence( ){
    try {
        await createConnection( config );
        console.log(`Persistence layer connected...`);
    } catch( error ) {
        console.log(`Persistence layer connection failed : `, error);
        return error;
    }
}
connectToPersistence( );

//retrieve body/json
//This 2 lines fix an error that json wasn't posting the data into the db
server.use(express.urlencoded());
server.use(express.json());

// Set cors headers
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

//error handling
server.use( (error: any, req: any, res: any, next: any) => {
    console.log(`Unhandled error : `, error)
    res.send(`Unhandled Error, please try again...`);
} );

server.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}`);
});