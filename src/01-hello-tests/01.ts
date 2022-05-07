

export function sum(a:number,b: number) {
  return a+b
}

export function mult(a:number,b: number) {
   return a*b
}


export function splitIntoWords(sentence: string) {
   const words = sentence.toLowerCase().split(' ')


      return words.filter(w =>
          w !== "" && w !== "-")
       .map(w => w
           .replace('!',"")
          .replace('.',""))
}


export function filterUpperCase(sentence:string) {

    let sent = sentence.split(' ')
    let res = sent.filter(word => word === word.toUpperCase())
    return res.join()
}