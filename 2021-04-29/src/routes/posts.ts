import express from 'express';
import { getRepository } from 'typeorm';

import Posts from '../models/posts.entity';

let postsRouterv1 = express.Router( );

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
    ]
};

postsRouterv1.post('/', async (req, res) => { //creating an object

    let data = req.body;
    console.log(data);

    const newPost = getRepository(Posts).create( data );
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));

    if (error) return res.send(error);

    res.send(post);
    
    // res.json('creating in v1...');
});

postsRouterv1.get('/', async (req, res) => { //no need to use again /posts
    
    let [posts, error] = await handleAsync(getRepository(Posts).find());

    if (error) return res.send(error);

    res.send(posts);
    // res.json(data.posts);
});

postsRouterv1.get('/:id', (req, res) => { //no need to use again /posts
    let post = data.posts.filter( item => item.id.toString() == req.params.id);
    res.json(post[0]);
});

postsRouterv1.patch('/', (req, res) => { //patching an object (updating)
    res.json('patching...');
});

postsRouterv1.delete('/', (req, res) => { //deleting an object
    res.json('deleting...');
});

const handleAsync = ( promise: Promise<any>) => {
    return promise
    .then( (data: any) => ([data, null]) )
    .catch( (error: any) => ([null, error]) )
}

export default postsRouterv1;