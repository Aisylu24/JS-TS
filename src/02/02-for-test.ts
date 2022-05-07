export type HouseType = {
    id:number
    buildedAt: number
    reparied: boolean
    address: AddressType
}

export type AddressType ={
    number?: number
    street: StreetType
}

export type StreetType ={
    title:string
}

export type GovBuildType ={
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount:number
    address: AddressType
}

export type TestCityType={
    govBuildings: Array<GovBuildType>;
    title:string
    houses: Array<HouseType>
    citizensNumber: number
}




