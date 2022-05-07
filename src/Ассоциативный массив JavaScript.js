let usersObj = {
    '0': 'Ai'
}

// usersObj.0 // error

// console.log(usersObj[0] = 'pupsik')

usersObj['student'] = true  // { '0': 'Ai', student: true }

console.log(usersObj)


console.log(Object.keys(usersObj)) // [ '0', 'student' ]

console.log(Object.values(usersObj)) //[ 'Ai', true ]

console.log(usersObj[{}] = 'hello')

console.log(usersObj) // { '0': 'Ai', student: true, '[object Object]': 'hello' }
