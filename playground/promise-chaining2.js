require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('6503fdabeb8c811b2892acec').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const removeAndCount = async (id) => {
    const remove = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

removeAndCount('6502fce9720f721c0885ea30').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})