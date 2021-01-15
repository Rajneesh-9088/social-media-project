const {Posts,Users} = require('../db/models')

async function createNewPost(userId,title,body) {
    const post = await Posts.create({
        userId,
        title,
        body
    })
    return post
}

async function findAllPosts(query) {
    let where = {}
    if(query.userId) { where.userId = query.userId}
    const post = await Posts.findAll({
        include: [Users],
        where
    })
    return post

}

module.exports = {
    createNewPost,
    findAllPosts
}


/*
async function task(){
//     console.log( await createNewPost(1,'This is sample post','Body of the post goes here inserting in body'))
//     console.log( await createNewPost(2,'This is another sample post','Body of the post goes here inserting in body'))
const posts = await showAllPosts()
for(let p of posts){
console.log(`${p.title}\n author: ${p.user.username}\n ${p.body}\n==========\n`)
}

}
task()
*/
