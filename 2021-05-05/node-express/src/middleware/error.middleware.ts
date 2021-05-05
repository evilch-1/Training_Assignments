import express, {Request, Response, NextFunction, response} from 'express';


// const registerErrorHandlingMiddleware = ( server: express.Application ) => {

//     //error handling
//     server.use((error: any, req: any, res: any, next: any) => {
//         console.log(`Unhandled error : `, error)
//         res.send(`Unhandled Error, please try again...`);
//     });
// }

const registerErrorHandlingMiddleware = ( error: any, req: Request, res: Response, next: NextFunction ) => {

    let status = error.status || 500;
    let message = error.message || `Something went wrong!`;


    response
        .status( status )
        .send( message )
}

export default registerErrorHandlingMiddleware;