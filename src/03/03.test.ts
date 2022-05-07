import {StudentType} from "../02/02";
import {addSkill, StudentFromCity, StudentIsActive} from "./03";


let student: StudentType
beforeEach(()=>{
    student = {
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
})
test("add skill for student", ()=>{
    expect(student.techs.length).toBe(3)

addSkill(student, "JS")

    expect(student.techs.length).toBe(4)
    expect(student.techs[3].title).toBe("JS")

})

test("student is active", ()=>{
    expect(student.isActive).toBe(true)

    StudentIsActive(student)

    expect(student.isActive).toBe(false)

})


test("is student from city?", ()=>{


   let res1 = StudentFromCity(student, "Moscow")
    let res2 = StudentFromCity(student, "Laishevo")

    expect(res1).toBe(false)
    expect(res2).toBe(true)

})


