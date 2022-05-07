type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType = {}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dima'},
        '566': {id: 566, name: 'Nata'},
        '12': {id: 12, name: 'Val'},
        '86': {id: 86, name: 'Kate'}
    }
})

test('update user from obj', () => {

    users['86'].name = 'Ekaterina'
    expect(users['86'].name).toBe('Ekaterina')

    expect(users['86']).toEqual({id: 86, name:'Ekaterina'})
})


test('delete user from obj', () => {

    delete users['86']
    expect(users['86']).toBeUndefined()

})