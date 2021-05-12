// Reads environment variables
import 'dotenv/config';

import Server from './server';

//Initialize server
const server = new Server( 
    [
        
    ]
);

//run server
server.listen();