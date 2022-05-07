import {GovBuildType, TestCityType} from "../02/02-for-test";

export const demolishHousesOnTheStreet = (city: TestCityType, street: string) => {
city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const buildWithCorrectStaffCount = (buildings: Array<GovBuildType>, number: number) => {
    return buildings.filter(build => build.staffCount > number)
}