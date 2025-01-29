


function holaMundo() {
    console.log('Hola mundo')
    return;
}


function btnEnviarNombre(nombre) {
    nombre = document.getElementById('nombreUser').value
    console.log(`Hola, ${nombre}`)
    return nombre; 
}

function btnEnviarNumero(numero) {
    numero = parseInt(document.getElementById('numeroUser').value)
    console.log(numero*2);
    return numero;
}

function elementosHTML(elemento, texto) {
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto
    return;
}

function promedioNumeros(a,b,c){
    a = parseInt(document.getElementById('number1').value)
    b = parseInt(document.getElementById('number2').value)
    c = parseInt(document.getElementById('number3').value)
    let promedio = (a+b+c)/3;
    console.log(`Promedio: ${promedio}`)
return promedio;
}


function numeroMayor(numero1, numero2){
    numero1 = parseInt(document.getElementById('numero1').value)
    numero2 = parseInt(document.getElementById('numero2').value)

    if (numero1>numero2){
        console.log(`El número mayor es: ${numero1}`)
    } else if (numero1 < numero2 ){
        console.log(`El número mayor es: ${numero2}`)
    } else {
        console.log(`Los números son iguales`)
    }

    return numero1, numero2;
}

function dobleNumero(numero) {
    numero = parseInt(document.getElementById('numero').value)
    console.log(`Multiplicación por si mismo: ${numero*numero}`)
    return numero;
}


elementosHTML('h1', 'Prácticas de desafío del módulo dos - Curso 2');
elementosHTML('p', 'Inserta 3 números');

