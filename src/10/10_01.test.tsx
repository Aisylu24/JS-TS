import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToAnotherHouse, removeBook, updateBook, updateJob, updateJob2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithjobs,
    UserWithLaptop
} from "./10_01";



test('reference type test', () => {

    let user: UserType = {
        name: 'Ais',
        hair: 26,
        address:  {city: 'La'}
    }

    const cutUser = makeHairStyle(user, 2)


    expect(user.hair).toBe(26)
    expect(cutUser.hair).toBe(13)
    expect(cutUser.address).toBe(user.address)
})


test('reference change address', () => {

    let user: UserWithLaptop = {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
        title: 'DNS'
        }
}

    const movedUser = moveUser(user, 'Kiev')

    //user = movedUser


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')


})


test('upgrade laptop to macbook', () => {

    let user: UserWithLaptop = {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        }
    }

    const UserWithUpgradedLaptop = upgradeUserLaptop(user, 'Mac')

    //user = movedUser


    expect(user).not.toBe(UserWithUpgradedLaptop)
    expect(user.address).toBe(UserWithUpgradedLaptop.address)
    expect(user.laptop).not.toBe(UserWithUpgradedLaptop.laptop)
    expect(UserWithUpgradedLaptop.laptop.title).toBe('Mac')
    expect(UserWithUpgradedLaptop.laptop.title).toBe('DNS')

})


test('user to another house', () => {

    let user: UserWithLaptop & UserWithBooksType= {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToAnotherHouse(user, 9)

    //user = movedUser


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user .address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(9)

})


test('add new book', () => {

    let user: UserWithLaptop & UserWithBooksType= {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    //user = movedUser


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})


test('update book', () => {

    let user: UserWithLaptop & UserWithBooksType= {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js','ts')

    //user = movedUser


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)

})


test('update Job', () => {

    let user: UserWithLaptop & UserWithjobs= {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        },
jobs: [{id:1, title: 'Епам'},{id:1, title: 'IT-INC'}]
    }

    const userCopy = updateJob(user, 1,'Epam') as UserWithLaptop & UserWithjobs

    //user = movedUser


    expect(user).not.toBe(userCopy)
    expect(user.jobs).not.toBe(userCopy.jobs)
    expect(user.jobs[0].title).not.toBe(userCopy.jobs[0].title)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('react')
})


test('update Job2', () => {

    let user: UserWithLaptop= {
        name: 'Ais',
        hair: 26,
        address: {
            city: 'La',
            house: 16
        },
        laptop: {
            title: 'DNS'
        },

    }

    let jobs = {
        'Ais': [{id:1, title: 'Епам'},{id:1, title: 'IT-INC'}],
        'Azat': [{id:1, title: 'Azat-ltd'}]
    }


    let copyJobs = {...jobs}

    const copy = updateJob2(jobs, 'Ais',1,'Epam')

    //user = movedUser

    expect(copy['Ais']).not.toBe(jobs['Ais'])
    expect(copy['Azat']).toBe(jobs['Azat'])
    expect(copy['Ais'][0].title).toBe('Epam')

})