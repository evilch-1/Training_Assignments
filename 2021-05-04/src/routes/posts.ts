import express from 'express';
import { getRepository } from 'typeorm';

import Posts from '../models/posts.entity';

let postsRouterv1 = express.Router( );

// let data = {
//     posts: [
//         {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
//         {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
//         {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
//     ]
// };

// Create a Post
postsRouterv1.post('/', async (req, res) => { //creating an object

    const data = req.body;
    // console.log(data);

    const newPost = getRepository(Posts).create( data );
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));
    if (error) return res.send(error);

    res.send(post);
    
    // res.json('creating in v1...');
});

// Read all posts
postsRouterv1.get('/', async (req, res) => { //no need to use again /posts... it dont uses id becuase is creating, so no need
    
    let [posts, error] = await handleAsync(getRepository(Posts).find());
    if (error) return res.send(error);

    res.send(posts);
    // res.json(data.posts);
});

//Read single post based on id
postsRouterv1.get('/:id', async (req, res) => { //no need to use again /posts

    const id = req.params.id;

    let [post, error] = await handleAsync(getRepository(Posts).findOne(id));
    if (error) return res.send(error);

    if ( post ) {
        res.send(post);
    } else {
        res.send(`No post found for ${id}!`);
    }

    
});

//Update single post based on id
postsRouterv1.patch('/:id', async (req, res) => { //patching an object (updating)
    
    // res.json('patching...');
    const id = req.params.id;
    const data = req.body;

    let [response, error] = await handleAsync(getRepository(Posts).update(id, data));
    if (error) return res.send(error);

    let [updatedPost, error2] = await handleAsync(getRepository(Posts).findOne(id));
    if (error2) return res.send(error2);

    if ( updatedPost ) {
        res.send(updatedPost);
    } else {
        res.send(`No post found for ${id}!`);
    }

});

// Delete single Post based on id
postsRouterv1.delete('/:id', async (req, res) => { //deleting an object
    // res.json('deleting...');
    const id = req.params.id;

    let [response, error] = await handleAsync(getRepository(Posts).delete(id));
    if (error) return res.send(error);

    if (response.affected === 1) {
        res.send( {deleted: true} );
    } else {
        res.send(`No post found for ${id}`);
    }
});

const handleAsync = ( promise: Promise<any>) => {
    return promise
    .then( (data: any) => ([data, null]) )
    .catch( (error: any) => ([null, error]) )
}

export default postsRouterv1;