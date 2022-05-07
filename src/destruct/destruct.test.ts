import {ManType} from "./Destruct";


let props: ManType
beforeEach(()=> {
     props = {
        name: "Ais",
        age: 26,
        lessons: [{title:'1'}, {title:"2"}, {title:"3", name:'react'}],
        address: {
            street: {
                title: 'Lebedeva'
            }
        }
    }

})




test("", () => {
    let props = {
        name: "Ais",
        age: 26,
        lessons: [{title:'1'}, {title:"2"}, {title:"3", name:'react'}],
        address: {
            street: {
                title: 'Lebedeva'
            }
        }
    }

    // const age = props.age
    // const lessons = props.lessons

    const {age,lessons, address: {street: {title}}} = props

   // const {title} = props.address.street


    expect(age).toBe(26)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Lebedeva')
})

test("hey", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]


    // const [ls1,ls2]= props.lessons

   // const [,,ls3] = props.lessons

    const [ls1, ...restLessons] = props.lessons


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
   // expect(ls3.title).toBe('3')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')

   // expect(props.lessons[2]).toBe('2')

    expect(restLessons[1]).toStrictEqual({title:"3", name:'react'})


})