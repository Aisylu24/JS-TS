import {TestCityType} from "../02/02-for-test";
import {addMoneyToBudget, greetCity, greetingCity, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: TestCityType

beforeEach(() => {
    city = {
        title: "Kazan",
        houses: [
            { id: 1,
            buildedAt: 2012,
            reparied: false,
            address: {number: 100, street: {title: 'White'}}
        },
            { id: 2,
                buildedAt: 2008,
                reparied: false,
                address: {number: 100, street: {title: 'Happy'}}
            },
            { id: 3,
                buildedAt: 2020,
                reparied: false,
                address: {number: 101, street: {title: 'Happy'}}
            }],
        govBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address:{
                    street: {
                        title: "Central"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000,  staffCount: 1000,
                address:{
                    street: {
                        title: "West"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})



// 01. создайте в отдельном файле функциюб чтобы тесты прошли

test("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(city.govBuildings[0], 100000);
    expect(city.govBuildings[0].budget).toBe(300000);
});


// 01. Тест должен пройти


test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.govBuildings[1], -100000);

    expect(city.govBuildings[1].budget).toBe(400000);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].reparied).toBeTruthy();
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("staff should be increased", () => {
    toFireStaff(city.govBuildings[0], 20);

    expect(city.govBuildings[0].staffCount).toBe(180);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House should be repaired", () => {
    toHireStaff(city.govBuildings[0], 20);
    toHireStaff(city.govBuildings[1], 100);

    expect(city.govBuildings[0].staffCount).toBe(220);
    expect(city.govBuildings[1].staffCount).toBe(1100);
});

test("Greeting message", () => {
     let res = greetCity(city, "Hello");


    expect(res).toBe('Hello New York')

});


test("Greeting", () => {
    //let message =  greetingCity(city);
   // expect(message).toBe('Hello New York citizens, all 1000000!')
    expect(greetingCity(city)).toBe('Hello New York citizens, all 1000000!')
});