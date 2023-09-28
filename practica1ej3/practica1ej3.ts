
export const ordenarAlfab = (arrayTxt : Array<String>): string => {
    arrayTxt.sort(); //ordeno alfabeticamente las palabras

    const palabraOrdenada = arrayTxt[0]; //palabraOrdenada es la palabra que hay en la primera posicion -> agua

    const separada = palabraOrdenada.split(''); //con split se separa la palabra
    
    return separada.join(' '); //junta todos los elementos del array en un string
}

const miarray = ["hola", "casa", "agua"];

console.log(ordenarAlfab(miarray));