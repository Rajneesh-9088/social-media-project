const {expect} = require('chai')

const {
 createAnonUser,
 getUserById,
 getUserByUsername
} = require('../../src/controllers/users')

describe('controllers/users', () =>{

    it('should create anonymous user', async () =>{

        const user = await createAnonUser()
        expect(user).to.have.property('username')
        expect(user.id).to.be('number')
    })
})