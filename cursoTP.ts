//DIFERENCIAS ENTRE JS Y TS, INFERENCIA DE TIPOS
let variable1 = 1;
variable1 = 2;


//TIPOS TS

//PRIMITIVOS

//NUMBER
let numero: number = 1;

//STRING
let nombre: string = 'Javier';

//BOOLEAN
let booleano: boolean = true;
let booleano2: boolean = false;

//UNDEFINED
let indefinido: undefined = undefined;

//NULL
let nulo: null = null;

//ANY
let vari;
let variable2: any = 1;
//no recmendado

//ESTRUCTURADOS

//ARRAY
let arrayNumeros: number[] = [1, 2, 3];

//TUPLAS
let tupla: [number, string] = [1, 'Javier'];

//DIFERENCIA ENTRE TUPLA Y ARRAY:
//arrayNumeros = [1, 2, 3, 4, 5];
//console.log(arrayNumeros);
//tupla = [2,'Pedro',4];

//ENUM
enum Dias {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

console.log(Dias.Lunes); // 0

enum Dias2 {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
    Domingo = 7
}

//Los Enum son valores constantes.
//Dias2.Lunes = 10; Error

//DATOS DEFINIDOS

//CLASES

class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }
    getEdad(): number {
        return this.edad;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setEdad(edad: number): void {
        this.edad = edad;
    }
    saludar() {
        console.log('Hola, soy ' + this.nombre);
    }
}

let persona = new Persona('Javier', 30);

//INTERFACES

interface IPersona {
    nombre: string;
    edad: number;
    saludar(): void;
}

//TYPES

type TP = {
    nombre: string;
    edad: number;
    saludar(): void;
}

//LOS TIPOS PUEDEN TRABAJAR CON PRIMITIVOS, LAS INTERFACES SOLO CON OBJETOS

type TP2 = string;
type TP3 = number;

interface TP4 {
    nombre: string;
    edad: number;
}

//FUNCIONES

//EN LAS FUNCIONES SI NO INDICAMOS NADA LOS PARAMETROS INFERIDOS SON ANY
function sumar(a, b) {
    return a + b;
}

// EL TIPO DE RETORNO NO ES NECESARIO AUNQUE SE PUEDE INDICAR
function saludar(nombre: string){
    return 'Hola ' + nombre;
}

//SI LA FUNCION NO RETORNA NADA SE PUEDE INDICAR VOID
function saludar2(nombre: string): void {
    console.log('Hola ' + nombre);
}

//ARROW FUNCTION
const sumar2 = (a: number, b: number): number => {
    return a + b;
}

//OPCIONALES
function saludar3(nombre: string, apellido?: string): void {
    if (apellido) {
        console.log('Hola ' + nombre + ' ' + apellido);
    } else {
        console.log('Hola ' + nombre);
    }
}

type TipoOpcional = {
    nombre: string;
    apellido: string;
}

//SI CREO UN TIPO ME OBLIGA A INDICAR EL VALOR DE TODOS SUS CAMPOS
//let personaOpcional: TipoOpcional = {
//    nombre : 'Pedro'}

//A NO SER QUE LO HAGA OPCIONAL

type TipoOpcional2 = {
    nombre: string;
    apellido?: string;
}

let personaOpcional: TipoOpcional2 = {
    nombre: 'Pedro'
}

//TAMBIÉN PODEMOS DARLE UN VALOR POR DEFECTO EN LA FUNCIÓN
function saludar4(nombre: string, apellido: string = 'Gomez'): void {
    console.log('Hola ' + nombre + ' ' + apellido);
}

//UNION
let numeroOString: number | string;

numeroOString = 1;
numeroOString = '1';

type TipoUnion = {
    nombre: string;
    edad: number | string;
}

//INTERSECCION

type TipoInterseccion = {
    nombre: string;
    edad: number;
}
type TipoInterseccion2 = {
    nombre: string;
    apellido: string;
}
type TipoInterseccion3 = TipoInterseccion & TipoInterseccion2;

let personaInterseccion: TipoInterseccion3 = {
    nombre: 'Pedro',
    edad: 30,
    apellido: 'Gomez'
}

//EXTENDER UNA INTERFACE DE OTRA
interface IPersona2 {
    nombre: string;
    edad: number;
}

interface IPersona3 extends IPersona2 {
    apellido: string;
}

let personaInterseccion2: IPersona3 = {
    nombre: 'Pedro',
    edad: 30,
    apellido: 'Gomez'
}

//SHAPE. NOSOTROS PODEMOS PASAR UN TIPO QUE TENGA EL MISMO SHAPE QUE EL QUE ESPERA LA FUNCIÓN AUNQUE NO SEA DEL TIPO QUE ESPERA
type TipoShape = {
    nombre: string;
    edad: number;
}

type NoShape = {
    nombre: string;
    edad: number;
}

function shape (varShape: TipoShape){
    return {
        nombre: varShape.nombre,
        edad: varShape.edad
    }
}

let personaNoShape: NoShape = {
    nombre: 'Pedro',
    edad: 30
}

let personaShape = shape(personaNoShape);
console.log(personaShape);

//ENUMS COMO TIPOS
enum Dias3 {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
    Domingo = 7
}

let dia: Dias3 = Dias3.Lunes;

//RECORD
type TipoRecord = Record<string, number>;

let personaRecord: TipoRecord = {
    España: 34,
    Portugal: 351,
    Alemania: 49,
    UK: 44
}

type TipoRecord2 = Record<"España"| "Portugal", number>;

let personaRecord2: TipoRecord2 = {
    España: 34,
    Portugal: 351,
    //UK: 44 DARIA ERROR
}

//PARTIAL HACE QUE TODOS LOS CAMPOS SEAN OPCIONALES

type TipoPartial = {
    nombre: string;
    edad: number;
}

type TipoPartial2 = Partial<TipoPartial>;

let personaPartial: TipoPartial2 = {
    nombre: 'Pedro'
}

//OMIT

type TipoOmit = {
    nombre: string;
    edad: number;
}

type TipoOmit2 = Omit<TipoOmit, 'nombre'>;

// let personaOmit: TipoOmit2 = {
//      nombre: 'Pedro',
//      edad: 30
// } DARIA ERROR

let personaOmit: TipoOmit2 = {
    edad: 30
}

//EXCLUDE EXCLUYE TIPOS DE UNION

type TipoExclude = 0 | 1 | 2 | 3 | 4;


type TipoPares = Exclude<TipoExclude, 0 | 1 | 3>;

let numeroPares: TipoPares = 2;
//let numeroPares2: TipoPares = 1; DARIA ERROR

//PICK
type TipoPick = {
    nombre: string;
    edad: number;
    apellido: string;
}

type TipoPick2 = Pick<TipoPick, 'nombre' | 'edad'>;
// let personaPick: TipoPick2 = {
//     nombre: 'Pedro',
//     edad: 30,
//     apellido: 'Gomez'
// } DARIA ERROR

let personaPick: TipoPick2 = {
    nombre: 'Pedro',
    edad: 30
}

//CAMPOS READONLY

type TipoReadonly = {
    nombre: string;
    edad: number;
}
type TipoReadonly2 = Readonly<TipoReadonly>; //TODOS LOS CAMPOS SON READONLY
let personaReadonly: TipoReadonly2 = {
    nombre: 'Pedro',
    edad: 30
}
//personaReadonly.nombre = 'Juan'; DARIA ERROR

type TipoReadonly3 = {
    readonly nombre: string;
    edad: number;
}

let personaReadonly2: TipoReadonly3 = {
    nombre: 'Pedro',
    edad: 30
}
//personaReadonly2.nombre = 'Juan'; DARIA ERROR
personaReadonly2.edad = 31;

//AS CONST

let arrayConst = [1, 2, 3] as const; //LOS VALORES SON CONSTANTES
//arrayConst[0] = 2; DARIA ERROR

//GENERICOS
function funcionGenerica<T>(parametro: T): T {
    return parametro;
}

let variableGenerica = funcionGenerica<number>(1);
let variableGenerica2 = funcionGenerica<string>('hola');

//VARIOS GENERICOS
function funcionGenerica2<T, U>(parametro1: T, parametro2: U): [T, U] {
    return [parametro1, parametro2];
}

//SOBRECARGA DE FUNCIONES

function sumarSobrecarga(a: number, b: number): number;
function sumarSobrecarga(a: string, b: string): string;

function sumarSobrecarga(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b + ' string';
    }
    else {
        return 'Error';
    }
}








