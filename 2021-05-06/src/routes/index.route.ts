import express, { Request, Response, NextFunction, Router } from 'express';

import {handleAsync} from '../shared/utilities';
import { IService } from '../services/index.service';

interface IRoute {
    api: string;
    router: Router;
}

class Route implements IRoute {

    api!: string;
    router: Router = express.Router( );
    service!: IService;

    register = ( api: string, service: IService) => {
        
        this.api = api;
        this.service = service;

        this.router.post('/', this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', this.patch);
        this.router.delete('/:id', this.patch);
    }
    
    post = async(request: Request, response: Response, next: NextFunction) => { //creating an object

        const data = request.body;

        let [newItem, error] = await handleAsync(this.service.create(data));

        if (error) return response.send(error);
        response.json(newItem);

    }

    get = async(request: Request, response: Response, next: NextFunction) => {

        let [items, error] = await handleAsync(this.service.find());
        if (error) return response.send(error);
    
        response.json(items);
    }

    getOne = async(request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;

        let [item, error] = await handleAsync(this.service.findOne(id));

        if (error) return response.send(error);
        if ( item ) {
            response.json(item);
        } else {
            response.send(`No post found for ${id}!`);
        }
    }

    patch = async(request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;
        const data = request.body;
    
        let [updatedItem, error] = await handleAsync(this.service.update(id, data));

        if (error) return response.send(error);
        if ( updatedItem ) {
            response.json(updatedItem);
        } else {
            response.send(`No post found for ${id}!`);
        }
    }

    delete = async(request: Request, response: Response, next: NextFunction) => {
        
        const id = request.params.id;

        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if (error) return response.send(error);
        if (deleteResponse.affected === 1) {
            response.send( {deleted: true} );
        } else {
            response.send(`No post found for ${id}`);
        }
    }
    
}

export { IRoute, Route };