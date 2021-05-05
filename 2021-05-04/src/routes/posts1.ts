import express from 'express';

let postsRouterv2 = express.Router( );

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
    ]
};

postsRouterv2.get('/', (req, res) => { //no need to use again /posts
    res.json(data.posts);
});

postsRouterv2.post('/', (req, res) => { //creating an object
    res.json('creating...');
});

postsRouterv2.patch('/', (req, res) => { //patching an object (updating)
    res.json('patching...');
});

postsRouterv2.delete('/', (req, res) => { //deleting an object
    res.json('deleting...');
});

export default postsRouterv2;