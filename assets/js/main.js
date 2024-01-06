//Captura o evento do submit do formulario
const form = document.querySelector('#formulario');

//Bloqueia o form para não enviar vazio
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(altura, peso)

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const mensagem = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(mensagem, true);

    console.log(imc, nivelImc);


    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1 (LEVE)', 'Obesidade Grau 2 (MODERADA)', 'Obesidade Grau 3 (SEVERA)'];
    
            if (imc >= 39.9) return nivel[5];
            if (imc >= 34.9) return nivel[4];
            if (imc >= 29.9) return nivel[3];
            if (imc >= 24.9) return nivel[2];
            if (imc >= 18.5) return nivel[1];
            if (imc < 18.5) return nivel[0];           

    }

    // Calcula o IMC
    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    };

    // Continua o código
    
});



function criaP (className){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}
function setResultado(mensagem, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado-valido');
    } else {
        p.classList.add('paragrafo-resultado-invalido');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}