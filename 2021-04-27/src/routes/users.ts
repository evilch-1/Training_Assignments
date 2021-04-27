import express from 'express';

let usersRouter = express.Router( );

let data = {
    users: [
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address: {city: 'Gwenborough'}, phone: '1-770-736-8031', company:{name: 'Romaguera-Crona'}},
        {name: 'Ervin Howell', email: 'Shanna@melissa.tv', address: {city: 'Wisokyburgh'}, phone: '010-692-6593', company:{name: 'Deckow-Crist'}},
        {name: 'Clementine Bouch', email: 'Nathan@yesenia.net', address: {city: 'McKenziehaven'}, phone: '1-463-123', company:{name: 'Romaguera-Jacobson'}}
    ]
};

usersRouter.get('/', (req, res) => { //no need to use again /posts
    res.json(data.users);
});

export default usersRouter;