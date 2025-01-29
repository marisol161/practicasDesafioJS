let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora del Desafío'


function btnClickConsole() {
    console.log('El botón fue clicado')
}

function btnClickprompt() {
    let nombreCiudad = prompt('Inserta el nombre de una ciudad de tu México:')
    alert(`Estuve en ${nombreCiudad} y me acordé de ti.`)
}

function btnAlerta() {
    alert('Yo amo JS')
}

function btnSuma() {
    let numeroInsertado1 = parseInt(prompt('Inserta el primer número:'))
    let numeroInsertado2 = parseInt(prompt('Inserta el segundo número:'))

    let suma = numeroInsertado1 + numeroInsertado2

    alert(`La suma de ${numeroInsertado1} + ${numeroInsertado2} = ${suma}`)
}