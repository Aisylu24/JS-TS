import {TestCityType} from "../02/02-for-test";
import {buildWithCorrectStaffCount, demolishHousesOnTheStreet} from "./04.2";


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


test("destroyed houses", () => {

    demolishHousesOnTheStreet(city, 'Happy')

        expect(city.houses.length).toBe(1)
        expect(city.houses[0].id).toBe(1)

    }
)


test("correct staff count", () => {

    let filterBuildings =
        buildWithCorrectStaffCount(city.govBuildings, 500)

        expect(filterBuildings.length).toBe(1)
        expect(filterBuildings[0].type).toBe("FIRE-STATION")

    }
)
