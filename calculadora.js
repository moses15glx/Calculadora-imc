 // Obtém o elemento do formulário pelo seu ID
const form = document.getElementById("form");

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores do peso e da altura dos elementos de entrada
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calcula o IMC com duas casas decimais
    const bmi = (weight / (height * height)).toFixed(2);

    // Obtém a referência ao elemento onde o valor do IMC será exibido
    const value = document.getElementById('value');
    let description = ''; // Inicializa a descrição do IMC

    // Adiciona a classe 'attention' ao elemento do valor do IMC
    value.classList.add('attention');

    // Remove a classe 'hidden' do elemento de informações
    document.getElementById('infos').classList.remove('hidden');

    var imagemSrc; // Inicializa a variável para o caminho da imagem

    //--------------------------------------------------------------------

    // Condições para determinar a descrição e a imagem com base no valor do IMC
    if (bmi < 18.5) {
        description = 'cuidado você está abaixo do peso!';
        imagemSrc = "medicos.svg"; // Define o caminho da imagem para o caso de IMC abaixo do peso
   
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "você está no seu peso ideal";
        value.classList.remove('attention');
        value.classList.add('normal');
        imagemSrc = "bom hábito.svg"; // Define o caminho da imagem para o caso de IMC ideal
    
    } else {
        description = "cuidado você está com sobre peso";
        imagemSrc = "personal trainer.svg"; // Define o caminho da imagem para o caso de IMC acima do peso
    }

    // Atualiza o texto do valor do IMC, substituindo o ponto por vírgula para formatação regional
    value.textContent = bmi.replace('.', ',');
    // Define o texto da descrição do IMC
    document.getElementById("description").textContent = description;
    // Define o caminho da imagem
    document.getElementById("img").src = imagemSrc;
});




