const form = document.querySelector('#formulario');
form.addEventListener('submit', e => {
    e.preventDefault();
    const weightInput = e.target.querySelector('#peso');
    const heightInput = e.target.querySelector('#altura');
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (!weight) {
        displayResult('Peso inválido', false);
        return;
    }
    if (!height) {
        displayResult('Altura inválida', false);
        return;
    }

    const userIMC = calculateIMC(height, weight);
    const userIMCLevel = getIMCLevel(userIMC);

    const finalMSG = `Seu IMC é ${userIMC} (${userIMCLevel}).`;

    displayResult(finalMSG, true);
});

function getIMCLevel(IMC) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (IMC >= 39.9) return level[5];
    if (IMC >= 34.9) return level[4];
    if (IMC >= 29.9) return level[3];
    if (IMC >= 24.9) return level[2];
    if (IMC >= 18.5) return level[1];
    if (IMC < 18.5) return level[0];
}

function calculateIMC(height, weight) {
    const IMC = weight / (height * height);
    return IMC.toFixed(2);
}

function createParagraph() {
    const p = document.createElement('p');
    return p;
}

function displayResult(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragraph = createParagraph();

    if (isValid) {
        paragraph.classList.add('paragrafo-resultado');
    } else {
        paragraph.classList.add('bad');
    }

    paragraph.innerHTML = msg;
    resultado.appendChild(paragraph);
}
