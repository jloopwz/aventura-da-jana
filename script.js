let story = document.getElementById('story');
let choices = document.getElementById('choices');

function choose(option) {
  if (option === 1) {
    story.innerHTML = `
      <p>Você se aventura na floresta alienígena e logo encontra uma criatura estranha com tentáculos. Ela te observa com curiosidade, mas não parece hostil. O que você faz?</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(1.1)">Tentar se comunicar com a criatura</button>
      <button onclick="choose(1.2)">Cautelosamente, se afastar e voltar para a nave</button>
    `;
  } else if (option === 2) {
    story.innerHTML = `
      <p>Você examina os equipamentos da nave. A nave parece estar em boas condições, mas você encontra um dispositivo estranho na cabine. O que você faz?</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(2.1)">Tentar ligar o dispositivo</button>
      <button onclick="choose(2.2)">Deixar o dispositivo e explorar mais a área externa</button>
    `;
  } else if (option === 1.1) {
    story.innerHTML = `
      <p>Você tenta se comunicar com a criatura. Para sua surpresa, ela entende sua língua e começa a te contar sobre o planeta! A criatura te oferece uma planta que pode ser útil mais tarde.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(3)">Agradecer à criatura e explorar mais o planeta</button>
      <button onclick="choose(4)">Voltar para a nave e estudar o dispositivo estranho</button>
    `;
  } else if (option === 1.2) {
    story.innerHTML = `
      <p>Você decide se afastar cuidadosamente da criatura e voltar para a nave. Quando chega lá, percebe que a nave foi danificada enquanto você estava fora!</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(4)">Tentar consertar a nave com os equipamentos disponíveis</button>
      <button onclick="choose(2)">Inspecionar o dispositivo estranho que você encontrou antes</button>
    `;
  } else if (option === 2.1) {
    story.innerHTML = `
      <p>Você tenta ligar o dispositivo e, de repente, uma tela holográfica aparece, mostrando informações sobre o planeta e recursos que você pode explorar. Isso será útil para a exploração!</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(3)">Sair da nave e explorar o planeta com as novas informações</button>
      <button onclick="choose(4)">Voltar para a floresta alienígena para falar com a criatura</button>
    `;
  } else if (option === 2.2) {
    story.innerHTML = `
      <p>Você decide sair da nave e explorar mais a área externa. O planeta é vasto e cheio de paisagens alienígenas incríveis. Enquanto explora, você encontra uma caverna com marcas misteriosas nas paredes.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(5)">Entrar na caverna para investigar as marcas misteriosas</button>
      <button onclick="choose(6)">Voltar à nave e tentar consertá-la</button>
    `;
  } else if (option === 3) {
    story.innerHTML = `
      <p>Com as informações da criatura e o dispositivo, você encontra uma área rica em recursos. Você decide montar um acampamento para passar a noite e se preparar para mais descobertas no planeta.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(7)">Passar a noite no acampamento e explorar mais pela manhã</button>
    `;
  } else if (option === 4) {
    story.innerHTML = `
      <p>Você volta para a nave e começa a trabalhar no dispositivo estranho. Após um tempo, você consegue reativar a nave, mas a criatura estranha aparece na sua frente novamente, oferecendo ajuda.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(8)">Aceitar a ajuda da criatura e explorar mais o planeta juntos</button>
      <button onclick="choose(5)">Decidir explorar a caverna misteriosa que você encontrou</button>
    `;
  } else if (option === 5) {
    story.innerHTML = `
      <p>Você entra na caverna e começa a examinar as marcas misteriosas. Dentro da caverna, encontra um artefato alienígena que parece ter poderosas propriedades energéticas!</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(9)">Tentar estudar o artefato para descobrir seu poder</button>
      <button onclick="choose(10)">Levar o artefato para a nave para análise posterior</button>
    `;
  } else if (option === 6) {
    story.innerHTML = `
      <p>Você decide voltar para a nave e tentar consertá-la. Com as ferramentas disponíveis, você consegue fazer os reparos necessários e a nave volta a funcionar. Porém, você está mais curioso sobre o planeta agora.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(3)">Explorar o planeta com a nave agora funcional</button>
      <button onclick="choose(5)">Investigar a caverna misteriosa que você encontrou antes</button>
    `;
  } else if (option === 7) {
    story.innerHTML = `
      <p>Você passa a noite em segurança no acampamento e, pela manhã, está pronto para novas descobertas. O que você fará agora?</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(5)">Explorar a caverna misteriosa</button>
      <button onclick="choose(6)">Investigar uma montanha distante que você avistou de longe</button>
    `;
  } else if (option === 8) {
    story.innerHTML = `
      <p>A criatura te ajuda a explorar mais a fundo o planeta. Vocês encontram uma cidade alienígena abandonada e começam a investigar os mistérios daquele lugar.</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(9)">Investigar as ruínas da cidade alienígena</button>
    `;
  } else if (option === 9) {
    story.innerHTML = `
      <p>O artefato revela ser um dispositivo de comunicação com outras formas de vida inteligentes no planeta. Você consegue estabelecer um contato pacífico com uma civilização alienígena avançada!</p>
    `;
    choices.innerHTML = `
      <button onclick="choose(10)">Estabelecer uma aliança com a civilização alienígena</button>
    `;
  } else if (
