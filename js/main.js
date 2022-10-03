/*console.log('Hola mundo cruel');

let num = 5 
let string = 'Hola mundo'
let bool = true;

console.log(num, string, bool);
*/

let edad = 19;

if (edad >= 18) {
    console.log("Puedes entrar a ver la peli");
}else{
    console.log('No puedes entrar a ver la peli');
}

//Genera un codigo JS que evalue una variable (mes) y que te diga mediante un SWITCH si estás en Verano, Otoño, Invierno o Primavera, te lo dirá por console log
let mes = 'Octubre'

switch (mes) {
    case 'Diciembre':
    case 'Enero':
    case 'Febrero':  
        console.log('Es invierno');
        break;

    case 'Marzo':
    case 'Abril':
    case 'Mayo':  
        console.log('Es Primavera');  
        break;

    case 'Junio':
    case 'Julio':
    case 'Agosto':  
        console.log('Es Verano');      
        break;

    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':  
        console.log('Es Otoño');      
        break;

    default:
        console.log('Revisa el mes introducido');
        break;
}