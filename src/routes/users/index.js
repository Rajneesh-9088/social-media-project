const {Router} = require('express')

const {createAnonUser,
    getUserByUsername,
    getUserById
} = require('../../controllers/users')

const route = Router()

route.get('/:id', async (req,res) => {
  let user;
  if(isNaN(parseInt(req.params.id))){
      user = await getUserByUsername(req.params.id);
  }else{
      user = await getUserById(req.params.id)
  }
  if(user){
      res.status(200).send(user)
  }else{
      res.status(404).send({
          error: 'No such user name or user id'
      })
  }
})

route.post('/',async(req,res) =>{
    const user = await createAnonUser();
    res.status(201).send(user)
})

module.exports = {
    usersRoute: route
}
console.log("working fine");