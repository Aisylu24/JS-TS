function increaseAge(u: UserType) {
    u.age++
    // u.age = u.age + 1
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}


test('reference type test', () => {

    let user = {
        name: 'Ais',
        age: 26,
        address: {title: 'La'}
    }

    increaseAge(user)

    expect(user.age).toBe(27)

    const superman = user

    superman.age = 100

    expect(user.age).toBe(100)


})


test('array reference test', () => {

    let users = [{
        name: 'Ais',
        age: 26
    },
        {
            name: 'Azat',
            age: 36
        }
    ]

    const admins = users

    admins.push({
        name: 'Unknown',
        age: 100
    })

    expect(users[2].age).toBe(100)
    expect(users[2]).toEqual({
        name: 'Unknown',
        age: 100
    })

})


test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = 101

    adminsCount = adminsCount + 1
    adminsCount++

})


test('reference type test', () => {

    let wife = {
        name: 'Ais',
        age: 26,
        address: {title: 'Kazan'}
    }

   // let add = user.address

    let husband: UserType = {
        name: 'Name',
        age: 32,
        address: wife.address
    }


    husband.address.title = 'Istanbul'

    expect(wife.address.title).toBe('Istanbul')


})

test('reference type test2', () => {

    const address = {
        title: 'Kazan'
    }

    let wife = {
        name: 'Ais',
        age: 26,
        address: address
    }

    // let add = user.address

    let husband: UserType = {
        name: 'Name',
        age: 32,
        address: address
    }

    address.title = 'Tatarstan, Kazan'

    expect(wife.address).toBe(husband.address)
    expect(wife.address.title).toBe('Tatarstan, Kazan')


})

test('reference type array test2', () => {

    const address = {
        title: 'Kazan'
    }

    let wife = {
        name: 'Ais',
        age: 26,
        address: address
    }

    // let add = user.address

    let husband: UserType = {
        name: 'Name',
        age: 32,
        address: address
    }

    const family = [wife, husband, {name: 'Child', age: 1, address: address}]

   const adults = [wife, husband]

    adults[0].name = 'Aisylu'

    expect(adults[0].name).toBe('Aisylu')
    expect(wife.name).toBe('Aisylu')


})

test('sort array test', () => {
    const letters = ['c','a', 'b' ]
    letters.sort()

    expect(letters).toBe(['a','b', 'c' ])
})


test('sort array test2', () => {
    const letters = ['c','a', 'b' ]

    sorter(letters)


    expect(letters).toEqual(['c','a', 'b' ])
})

function sorter(items: Array<string>) {
    const copy = [...items].sort()
    console.log(copy)
}