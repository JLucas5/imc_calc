function calcula_imc(){
    var altura = document.getElementById("altura");
    var peso = document.getElementById("peso");

    var quadrado = (altura * altura);

    var resultado = (peso/quadrado);
    if(resultado<18.5){
        alert("Seu indice indic;a que você está abaixo do peso: " + resultado);
    }
    else if(resultado>=18.5 && resultado<24.9){
        alert("Seu indice indica que você está no peso ideal: " + resultado);
    }

    else if(resultado>=25 && resultado<29.9) {
        alert("Seu indice indica que você está acima do peso: " + resultado);
    }
    else if(resultado>=30 && resultado<39.9) {
        alert("Seu indice indica que você está com obesidade: " + resultado);
    }
    else if (resultado>40)
        alert("Seu indice indica que você está com obesidade grave: " + resultado);
}