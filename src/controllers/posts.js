const {Posts,Users} = require('../db/models')

async function createNewPost(userId,title,body) {
    const post = await Posts.create({
        userId,
        title,
        body
    })
    return post
}

async function showAllPosts(query) {
    const post = await Posts.findAll({
        include: [Users]
    })
    return post

}

module.exports = {
    createNewPost,
    showAllPosts
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
