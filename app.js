
console.log("Comienza el juego");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;


alert(`Estoy pensando en un número entre 1 y 100. Intenta adivinarlo.`);


while (true) {
    const numeroIngresado = parseInt(prompt(`Ingresa un número:`));

    if (isNaN(numeroIngresado)) {
        alert(`Por favor, ingresa un número válido.`);
    }
    else {
        intentos = intentos + 1;

        if (numeroIngresado === numeroSecreto) {
            alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
            break;
        }
        else if (numeroIngresado < numeroSecreto) {
            alert(`El número es mayor. Intenta de nuevo.`);
        }
        else {
            alert(`El número es menor. Intenta de nuevo.`);
        }
    }
}