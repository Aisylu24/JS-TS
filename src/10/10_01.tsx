export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}


export type LaptopType = {
    title:string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
   books: Array<string>
}

type JobType = { id: number, title: string };
export type UserWithjobs= {
    jobs: Array<JobType>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = { ...u,
        hair: u.hair / power

    }
    // copy.hair = u.hair / power
    return copy
}



export function moveUser(u: UserWithLaptop, city: string) {
    return {...u, address: {...u.address, city:city}}
}


export function upgradeUserLaptop(u: UserWithLaptop, model: string) {
    return {...u,laptop: {...u.laptop, title:model}}
}


export function moveUserToAnotherHouse(u: UserWithLaptop & UserWithBooksType , house: number) {
    return {...u, address: {...u.address, house: house}}
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType , newBook: string) {

    return {...u, books: [...u.books, newBook]}
}

export const updateBook=(u: UserWithLaptop & UserWithBooksType , prevBook:string, newBook: string) =>({
    ...u,
    books: u.books.map(b=> b === prevBook ? newBook : b)
})


export const removeBook = (u: UserWithLaptop & UserWithBooksType , removingBook:string) => ({

...u,
        books: u.books.filter(b => b !== removingBook)

})


export const updateJob = (u: UserWithLaptop & UserWithjobs, JobID:number,newJobTitle:string) => ({

    ...u,
    jobs:  u.jobs.map(j => j.id === JobID ? {...j, title: newJobTitle} : j)

})


export const updateJob2 = (jobs: {[key:string]: Array<JobType> }, userName:string, JobID:number,newTitle:string) => {
    let copyJobs = {...jobs}

    copyJobs[userName] =  copyJobs[userName].map(j => j.id === JobID ? {...j, title: newTitle} : j)
return copyJobs
}