
// const fun = ((nombre)=>{
//     return nombre()
// })

// fun(
//     (martin)=>{
//     console.log("hoola");
//     }
// )

const rr = (x, fn)=>{
    console.log(x)
    fn(x);
}

rr("asd", (nombre)=>{ console.log("Hola "+nombre)});