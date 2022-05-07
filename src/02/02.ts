
type CityType = {
    name: string
    republic: string
}

type AddressType = {
    city: CityType
    street: string
}

type TechsType = {
    id: number
    title: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    techs: Array<TechsType>
}


const student: StudentType = {
    id: 1,
    name: "Ais",
    age: 26,
    isActive: true,
    address: {
        city: {
            name: 'Laishevo',
            republic: 'Tatarstan'
        },
        street: 'Lebedeva',
    },
    techs: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }

    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.name)
console.log(student.techs[2].title)
