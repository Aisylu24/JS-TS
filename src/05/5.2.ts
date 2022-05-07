import {GovBuildType, HouseType} from "../02/02-for-test";

export const getStreetsTitlesGov = (buildings: Array<GovBuildType>) => {
    return buildings.map( b => b.address.street.title)
}


export const getStreetsTitlesHouses = (houses: Array<HouseType>) => {
    return houses.map( h => h.address.street.title)
}

export const greetingStreets = (houses: Array<HouseType>) => {


    // return houses.map(h => `Hello man from ${h.address.street.title}`)

    let callbackfn = (h: HouseType) => `Hello man from ${h.address.street.title}`


    let newArr = houses.map(callbackfn)
    return newArr
}