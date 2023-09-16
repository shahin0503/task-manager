require('../src/db/mongoose')
const User = require('../src/models/user')


// 6503f9fa2dc5b02efcc5dcde

// User.findByIdAndUpdate('6502fc056ce7cb354818debe',{ age: 1} ).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1}).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })
// })

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('6502fc056ce7cb354818debe', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})