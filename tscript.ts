let persona = "nombre"; // Si lo dejamos sin el tipo de dato ya da por entendido que en este caso en un string.
// Recomendado dejar que typescrip tipee el tipo de dato.
// Si queremos lo podemos tipar, ej:
let persona2:string = "juan";   // Tipo de dato string
let und = undefined;            // Tipo de dato undefined
let nu = null;            // Tipo de dato null
let bool = true;                // Tipo de dato booleano
let numero:number = 123;        // Tipo de dato number

let lala:any = "aasd";  // El tipo de dat any. Hace que ignore el tipo de dato
lala = 123;             // puedo modificar el tipo de dato porque esta asignado como any. NO RECOMENDADO USAR any. Y nunca va a dejar de ser any.

let unk:unknown;        // Tipo de dato desconocido, luego esta variable va a tomar el tipo de dato que le asignemos
unk = "asd";
unk = 123;
console.log(`El tipo de dato es: ${typeof unk}`); // Esto retorna number

// **************** Funciones ****************************
// Hay que evitar el any implicito, siempre tratar de ponet el tipo
const funSaludo = (nombre:string) => { // A las funciones si no le paso el tipo de dato lo va a tomar como any porque no sabe el tipo de dato que le va a llegar.
    console.log("Hola " + nombre);
}
funSaludo("Martin");

// Asi tipamos un objeto
const funSaludoObj = ({nombre,edad}:{nombre:string,edad:number}) => { 
    console.log("Hola " + nombre);
}
funSaludoObj({nombre:"Martin" , edad:23});

 // Asi tipamos lo que retorna una funcion
const suma = ({num1,num2}:{num1:number,num2:number}):number => {
    const res:number = num1 + num2;
    return res
}
suma({num1:10 , num2:15});

// Asi tipamos una funcion
const saludoFn = (fun:Function)=>{  //  Function: es como si fuese en any de las funciones, NO esta bien usarlo
    fun("Juan")
}
saludoFn((nombre:string)=>{
    console.log(`Hola ${nombre}`)
})
console.log("first")