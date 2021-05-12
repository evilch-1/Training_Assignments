import express from 'express';
import {IRoute} from '../routes/index.route';

const registerRouteMiddleware = ( server: express.Application, routes: IRoute[] ) => {
    
    /*  register route Middleware */
    routes.forEach( (route: IRoute) => {
        server.use( route.api, route.router );
    });
}

export default registerRouteMiddleware;