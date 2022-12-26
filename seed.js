const { db } = require('./server/db')

const User = require('./server/db/user')


const users = [{
    name: 'Tim',
    image: '',
    description: 'Just a dad'
},
{
    name: 'Gavin',
    image: '',
    description: 'Adventurous and cool'
},
{
    name: 'Fiona',
    image: '',
    description: 'Smart and funny'
},
{
    name: 'Jessica',
    image: '',
    description: 'The best'
}]



const seed = async () => {
    try {
        await db.sync({ force: true })
        await Promise.all(users.map(user => {
            return User.create(user);
        }))

    } catch (err) {
        console.log(err)
    }
}

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
    try {
        await seed()
        console.log('Seeding success!')
    } catch (err) {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
    } finally {
        db.close()
    }
}

if (require.main === module) {
    runSeed()
}
