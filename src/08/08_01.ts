
// export const usersArray = ['Dima', 'Nata', 'Val', 'Kate']

export const usersObg = {
    '0': 'Dima',
    '1':'Nata',
    '2':'Val',
    '3':'Kate'
}


type UsersType = {
    [key:string]: {id:number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dima'},
    '566': {id: 566, name: 'Nata'},
    '12': {id: 12, name: 'Val'},
    '86': {id: 86, name: 'Kate'}
}

console.log(users[86])// быстро найдем, сразу обратимся к этому айди

const user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dima'},
    {id: 566, name: 'Nata'},
    {id: 12, name: 'Val'},
    {id: 86, name: 'Kate'}]

// usersArray.find(u=> u.id === 86) // здесь же происходит итерация
//let usersCopy = [...usersArray.filter(), user]
// let users = usersArray.filter(u=> u.id !== user.id)

console.log(users)