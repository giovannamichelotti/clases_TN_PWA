

/* FETCH y ASYNC */

/* Qué es fetch?
Es una funcion natia de JS
Qué permite hacer?
Emitir consultas http

Recibe dos parametros: la direccion a la que vamos a emitir la consulta http y el segundo es la configuracion para esa consulta mediante un objeto
Me va a responder con un JSON
Tiene un valor de retorno que es una Promise
Las promesas tienen estados:
-Pending => indica que dicha promesa aun esta pendiente de resolucion
-Resolved => indica que la promesa fue resuelta
-Rejected => ocurre cuando la promesa fue rechazada o hubo un fallo al resolverse
Es una funcion asincronica
*/




//const obtenerAnakin = async () => {
//    const respuesta = await fetch('https://swapi.dev/api/people/1', {
//        method: 'GET'
//    })
//    const data = await respuesta.json() /* Decodificar la respuesta en forma de promesa */
//    console.log('persona 1', data)
//}


/* const obtenerAnakin2 = async () => {
    const respuesta = await fetch('https://swapi.dev/api/people/1', {
        method: 'GET'
    })
    console.log('persona 2', respuesta)
}

obtenerAnakin()
obtenerAnakin2() */


/* Callback es una funcion pasada por parametro */

const usuarios = [
    {
        nombre: 'Pepe',
        edad: 30
    },
    {
        nombre: 'Maria',
        edad: 49
    },
    {
        nombre: 'Jose',
        edad: 56
    },

]
console.log(usuarios)

/* Las callbacks que recibe forEach, recibe un elemento, un indice (posicion), listaDeUsuarios
forEach recibe una funcnion, la cual invocara por detras
*/
/* usuarios.forEach((usuario, indice, listaDeUsuarios) => {
    console.log('hola ' + usuario.nombre)
}) */

/* Hacer un filter avanzado */

const filterPro = (array, accionCallbackFn) => {
    const resultado = []

    for(const elemento of array){
        if(accionCallbackFn(elemento)){
            resultado.push(elemento)
        }
    }

    return resultado
}

const resultado = filterPro(usuarios, (usuario) =>{
    return usuario.edad > 35
})

console.log(resultado)