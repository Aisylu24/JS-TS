import {greetingMessage, ManType} from "./05";


let people: Array <ManType> = []

beforeEach( () => {
    people = [
        {name: "Andre E", age: 33},
        {name: "Alex X", age: 24},
        {name: 'Dima A', age: 18}
    ]
})


test('only cheap courses', () => {

    // const messages = people.map(( man => `Hello ${man.name.split(' ')[0]}. Welcome to us`))

    const messages = greetingMessage(people)

    expect( messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andre. Welcome to us")
    expect(messages[1]).toBe("Hello Alex. Welcome to us")
    expect(messages[2]).toBe("Hello Dima. Welcome to us") })

