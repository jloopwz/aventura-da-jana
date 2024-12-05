// script.js
let currentStep = 0;

const storyText = document.getElementById("story-text");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

const storyData = [
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
];

// Função para atualizar a história e as escolhas
function updateStory() {
  const step = storyData[currentStep];
  storyText.textContent = step.text;
  choice1.textContent = step.choices[0].text;
  choice2.textContent = step.choices[1].text;
  choice3.textContent = step.choices[2] ? step.choices[2].text : '';
  
  choice1.onclick = () => handleChoice(step.choices[0].nextStep);
  choice2.onclick = () => handleChoice(step.choices[1].nextStep);
  choice3.onclick = () => step.choices[2] && handleChoice(step.choices[2].nextStep);
}

// Função para gerenciar a escolha do jogador
function handleChoice(nextStep) {
  currentStep = nextStep;
  updateStory();
}

// Inicializa o jogo
updateStory();
