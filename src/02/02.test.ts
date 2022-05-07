import {AddressType, TestCityType} from "./02-for-test";


let city: TestCityType

beforeEach(() => {
    city = {
        title: "Kazan",
        houses: [{  id: 1,
            buildedAt: 2012,
            reparied: false,
            address: {number: 100, street: {title: 'White'}}
        },
            {  id:2,
                buildedAt: 2008,
                reparied: false,
                address: {number: 100, street: {title: 'Happy'}}
            },
            {  id:3,
                buildedAt: 2020,
                reparied: false,
                address: {number: 101, street: {title: 'Happy'}}
            }],
        govBuildings: [
            {
            type: "HOSPITAL", budget: 200000,  staffCount: 20,
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


test("test city has 3 houses", () => {

        expect(city.houses.length).toBe(3)

        expect(city.houses[0].buildedAt).toBe(2012)
        expect(city.houses[0].reparied).toBe(false)
        expect(city.houses[0].address.number).toBe(100)
        expect(city.houses[0].address.street.title).toBe("White")

        expect(city.houses[1].buildedAt).toBe(2008)
        expect(city.houses[1].reparied).toBe(false)
        expect(city.houses[1].address.number).toBe(100)
        expect(city.houses[1].address.street.title).toBe("Happy")

        expect(city.houses[2].buildedAt).toBe(2020)
        expect(city.houses[2].reparied).toBe(false)
        expect(city.houses[2].address.number).toBe(101)
        expect(city.houses[2].address.street.title).toBe("Happy")
    }
)


test("test for gov buildings", () => {
    expect(city.govBuildings.length).toBe(2)

    expect(city.govBuildings[0].type).toBe("HOSPITAL")
    expect(city.govBuildings[0].budget).toBe(200000)
    expect(city.govBuildings[0].staffCount).toBe(200)
    expect(city.govBuildings[0].address.street.title).toBe("Central")

    expect(city.govBuildings[1].type).toBe("FIRE-STATION")
    expect(city.govBuildings[1].budget).toBe(500000)
    expect(city.govBuildings[1].staffCount).toBe(1000)
    expect(city.govBuildings[1].address.street.title).toBe("West")

})