export type ManType = {
    name: string
    age: number
}


const people: Array<ManType> = [
    {name: "Andre E", age: 33},
    {name: "Alex X", age: 24},
    {name: 'Dima A', age: 18}
]


const dimaSensei = (man: ManType) => ({

        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]

})

const devs = [
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: "Andre",
        lastName: 'E'

    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: 'Alex',
        lastName: 'X'

    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: 'Dima',
        lastName: 'A'

    }

]

let d1 = dimaSensei(people[0])
let d2 = dimaSensei(people[1])
let d3 = dimaSensei(people[2])

const dev2 = [
     dimaSensei(people[0]), // d1
    dimaSensei(people[1]), // d2
     dimaSensei(people[2]), // d3
]

// const dev3 = people.map(dimaSensei)

const dev3 = people.map(man=> ({

    stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]

}))


// const messagges = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to us`)

export const greetingMessage = (people: Array<ManType>) =>{
    return people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to us`)
}