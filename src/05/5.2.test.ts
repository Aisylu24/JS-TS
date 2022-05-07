import {TestCityType} from "../02/02-for-test";
import {getStreetsTitlesGov, getStreetsTitlesHouses, greetingStreets} from "./5.2";

let city: TestCityType

beforeEach(() => {
    city = {
        title: "Kazan",
        houses: [
            {id:1,
                buildedAt: 2012,
                reparied: false,
                address: {number: 100, street: {title: 'White'}}
            },
            {id:2,
                buildedAt: 2008,
                reparied: false,
                address: {number: 100, street: {title: 'Happy'}}
            },
            {id:3,
                buildedAt: 2020,
                reparied: false,
                address: {number: 101, street: {title: 'Happy'}}
            }],
        govBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 20,
                address: {
                    street: {
                        title: "Central"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "West"
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})


test("list of streets titles of a government buildings ", () => {

        let streetsNames = getStreetsTitlesGov(city.govBuildings)

        expect(streetsNames.length).toBe(2)
        expect(streetsNames[0]).toBe('Central')
        expect(streetsNames[1]).toBe('West')
    }
)


test("list of streets titles of house ", () => {

        let streetsNames = getStreetsTitlesHouses(city.houses)

        expect(streetsNames.length).toBe(2)
        expect(streetsNames[0]).toBe('Central')
        expect(streetsNames[1]).toBe('West')
    }
)

test("greeting for streets ", () => {

       let greet = greetingStreets(city.houses)

        expect(greet.length).toBe(2)
        expect(greet[0]).toBe('Hello man from White')
        expect(greet[1]).toBe('Hello man from Happy')
    }
)