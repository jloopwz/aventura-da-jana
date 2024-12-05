// script.js

// Armazena a história e as escolhas de forma dinâmica
const gameData = {
  currentStep: 0,
  steps: [
    {
      text: "Você está em uma floresta densa e escura. À sua frente há um caminho em duas direções.",
      choices: [
        { text: "Seguir para a esquerda", nextStep: 1 },
        { text: "Seguir para a direita", nextStep: 2 },
        { text: "Ficar parado e esperar", nextStep: 3 }
      ]
    },
    {
      text: "Você encontra uma caverna. Dentro da caverna, há duas passagens.",
      choices: [
        { text: "Entrar na passagem da esquerda", nextStep: 4 },
        { text: "Entrar na passagem da direita", nextStep: 5 },
        { text: "Voltar para a floresta", nextStep: 0 }
      ]
    },
    {
      text: "Você segue para a direita e encontra um rio. Há uma ponte à sua frente.",
      choices: [
        { text: "Cruzando a ponte", nextStep: 6 },
        { text: "Seguir ao longo do rio", nextStep: 7 },
        { text: "Voltar para a floresta", nextStep: 0 }
      ]
    },
    {
      text: "Você ficou parado por um tempo e algo misterioso aconteceu. Agora, você está em um lugar diferente.",
      choices: [
        { text: "Explorar", nextStep: 8 },
        { text: "Ficar parado novamente", nextStep: 0 },
        { text: "Gritar por ajuda", nextStep: 0 }
      ]
    },
    {
      text: "Dentro da caverna, você encontra um tesouro! Parabéns, você ganhou!",
      choices: [
        { text: "Jogar novamente", nextStep: 0 }
      ]
    },
    {
      text: "Dentro da caverna, você encontra uma criatura estranha e não sobrevive. Fim da história.",
      choices: [
        { text: "Jogar novamente", nextStep: 0 }
      ]
    },
    {
      text: "Você cruzou a ponte e encontrou uma aldeia! Você venceu.",
      choices: [
        { text: "Jogar novamente", nextStep: 0 }
      ]
    },
    {
      text: "Você seguiu o rio e encontrou uma outra saída da floresta. Você venceu!",
      choices: [
        { text: "Jogar novamente", nextStep: 0 }
      ]
    },
    {
      text: "Você explora o novo lugar e encontra algo misterioso, mas decide voltar.",
      choices: [
        { text: "Voltar à floresta", nextStep: 0 }
      ]
    }
  ]
};

// Função para atualizar a história e as opções de escolha
function updateStory() {
  const currentStep = gameData.steps[gameData.currentStep];

  // Atualiza o texto da história
  document.getElementById("story-text").textContent = currentStep.text;

  // Atualiza as opções de escolha
  const choices = currentStep.choices;
  for (let i = 0; i < 3; i++) {
    const choiceButton = document.getElementById(`choice${i + 1}`);
    if (choices[i]) {
      choiceButton.textContent = choices[i].text;
      choiceButton.style.display = 'inline-block';
      choiceButton.onclick = () => handleChoice(choices[i].nextStep);
    } else {
      choiceButton.style.display = 'none'; // Oculta o botão caso não haja escolha
    }
  }
}

// Função para lidar com a escolha do jogador
function handleChoice(nextStep) {
  gameData.currentStep = nextStep;
  updateStory();
}

// Inicia o jogo chamando a função de atualização da história
updateStory();
