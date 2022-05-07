import {filterUpperCase, splitIntoWords, sum} from "./01";

//data
let a: number
let b: number
let c: number

beforeEach(()=> {
    a=1
    b=2
    c=3
})

test ("sum should be correct", ()=> {
    //data
//action
const res1 = sum(a,b)
    const res2 = sum(b,c)
    //expect result
    expect(res1).toBe(3)
    expect(res2).toBe(5)
})

test ("mult should be correct", ()=> {
//action
    const res1 = sum(a,b)
    const res2 = sum(b,c)
    //expect result
    expect(res1).toBe(2)
    expect(res2).toBe(6)
})


test('split into words is correct', ()=>{
    //data
    const sent1 = "Hello my friends!"
    const sent2 = "JS - the best program lang."
//action
    const res11 = splitIntoWords(sent1)
    const res2 = splitIntoWords(sent2)

    //expect
    expect(res11.length).toBe(3)
    expect(res11[0]).toBe("hello")
    expect(res11[1]).toBe("my")
    expect(res11[2]).toBe("friends")

    expect(res2.length).toBe(5)
    expect(res2[0]).toBe("js")
    expect(res2[1]).toBe("the")
    expect(res2[2]).toBe("best")
    expect(res2[3]).toBe("program")
    expect(res2[4]).toBe("lang")
})


let sentence:string

beforeEach(()=>
sentence= 'MY FAV'
)

test('upperCase should be correct', ()=>{
    const result = filterUpperCase(sentence)

    expect(result[0]).toBe("M")
    expect(result).toBe("MY FAV")
    }

)