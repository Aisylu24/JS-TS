import {StudentType} from "../02/02";
import {GovBuildType, HouseType, TestCityType} from "../02/02-for-test";

debugger
export const sum1 = (a:number, b:number) => {
    return a+b
}
const res = sum1(sum1(1,2),sum1(2,3))

export const addSkill = (student: StudentType, skill: string) => {
    student.techs.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function StudentIsActive(s: StudentType) {
    s.isActive = false

}

export const StudentFromCity = (s:StudentType, cityName: string) => {
    return s.address.city.name === cityName
}

export const addMoneyToBudget = (gov: GovBuildType, budget:number) => {
return gov.budget += budget
}

export const repairHouse = (house: HouseType) => {
  return house.reparied = true
}

export const toFireStaff = (gov: GovBuildType, staffCountToFire: number) => {
gov.staffCount -= staffCountToFire
}

export const  toHireStaff = (gov: GovBuildType,staffCountToHire : number) => {
    gov.staffCount += staffCountToHire
}

export const greetCity = (c: TestCityType, greet: string)=> {
    return greet + ' ' + c.title
}

export const greetingCity = (props: TestCityType)=> {
   // return "Hello " + props.title + " citizens, all " + props.citizensNumber + "!"
    return `Hello ${props.title} citizens, all ${props.citizensNumber}!`
}