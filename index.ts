const nickname: string = 'Gilerme'
const age: number = 20
const on: boolean = true

let multiType: string | number = 200
multiType = 'Texto'

let allTypes: any = 'Pode tudo'
allTypes = 309
allTypes = false

let iDontKnow: unknown = 'desconheço'
iDontKnow = 145

const arrayString: number[] = []
arrayString.push(3)

const anotherArray: readonly string[] = ['Azulejo', 'Pastel']

const tupla: readonly [string, number, string] = ['Eu', 3, 'Aló']

const obj: {name: string, age: number, handsome: boolean} = {
    name: 'Gilerme',
    age: 20,
    handsome: true
}

const obj2: {color: string, brand?: string} = {
    color: 'blue'
}

const obj3: { name: string, [index: string]: string} = {
    name: 'Robertin',
    'Species': 'Peixe'
}

type CountResult = number 
type Phrase = string

const myResult: CountResult = 634
const myPhrase: Phrase = 'So sei que nada sei'

interface user {
    name: string,
    age: number
}

const gilerme: user = {
    name: 'Gilerme',
    age: 20
}

interface player extends user {
    class: string
}

const sosquiker: player = {
    name: 'sosquiker',
    age: 20,
    class: 'samurai'
}

function test(): string {
    return 'Teste executado com sucesso'
}

function test2(): void {
    console.log('Teste executado com sucesso')
}

function test3(a: number, b:number): number {
    return a + b
}

function test4(a: number, b:number, c?: number): number {
    return a + b - (c || 0)
}

function test5(a: number, b:number, c: number = 0): number {
    return a + b - c
}

function test6({name, age}: {name: string, age: number}): void {
    console.log(`${name} tem ${age} anos`)
}

function printLog<T> (value: T): void {
    console.log(value)
}

printLog<number>(10)
printLog<string>('Alo Alo')

function teste12<T, G, P> (a: T, b: G, c: P): void {
    console.log(`A:${a}, B:${b}, C:${c}`)
}

teste12<number, string, boolean>(12, 'teste', true)

const testFunc = (a: number, b: number): number => {
    return a + b
}

testFunc(2, 3) 