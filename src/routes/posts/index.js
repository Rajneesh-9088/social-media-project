const {Router} = require('express')

const {
    findAllPosts,
    createNewPost
} = require('../../controllers/posts')

const route = Router()

route.get('/',async(req,res) => {
    // res.send('TODO: all posts')
    const posts = await findAllPosts(req.query);
    res.status(200).send(posts) 


})

route.post('/',async(req,res) => {
    const {userId,title,body} = req.body
    if((!userId) || (!title) || (!body)) {
       return res.status(404).send({
         error: 'Need userId title body to create a post'
        })
    }
    const post = await createNewPost(userId,title,body) 
    res.status(200).send(post) 

})

module.exports = {
    postsRoute:route
}