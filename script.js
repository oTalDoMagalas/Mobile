const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correta: 1,
  },
  {
    pergunta: "Quantos planetas há no Sistema Solar?",
    respostas: ["7", "8", "9", "10"],
    correta: 1,
  },
  {
    pergunta: "Qual animal é conhecido como o rei da selva?",
    respostas: ["Elefante", "Tigre", "Leão", "Urso"],
    correta: 2,
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital da França?",
    respostas: ["Paris", "Londres", "Berlim", "Roma"],
    correta: 0,
  },
  {
    pergunta: "Qual o maior oceano do mundo?",
    respostas: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correta: 3,
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    respostas: ["4", "5", "6", "8"],
    correta: 2,
  },
  {
    pergunta: "Qual é o símbolo químico da água?",
    respostas: ["O2", "H2O", "CO2", "HO"],
    correta: 1,
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    respostas: [
      "Pedro Álvares Cabral",
      "Dom Pedro I",
      "Cristóvão Colombo",
      "Tiradentes",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual o menor país do mundo?",
    respostas: ["Mônaco", "Malta", "Vaticano", "San Marino"],
    correta: 2,
  },
  {
    pergunta: "Em que continente fica o Egito?",
    respostas: ["África", "Ásia", "Europa", "América"],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior animal terrestre?",
    respostas: ["Elefante", "Hipopótamo", "Girafa", "Rinoceronte"],
    correta: 0,
  },
  {
    pergunta: "Qual é o principal idioma falado no Brasil?",
    respostas: ["Espanhol", "Inglês", "Português", "Francês"],
    correta: 2,
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    respostas: ["Machado de Assis", "Miguel de Cervantes", "Camões", "Tolstói"],
    correta: 1,
  },
  {
    pergunta: "Em que ano o homem pisou na Lua?",
    respostas: ["1969", "1972", "1959", "1965"],
    correta: 0,
  },
  {
    pergunta: "Qual a cor do sangue?",
    respostas: ["Azul", "Roxo", "Vermelho", "Verde"],
    correta: 2,
  },
  {
    pergunta: "Quantos segundos tem um minuto?",
    respostas: ["60", "100", "120", "80"],
    correta: 0,
  },
  {
    pergunta: "Qual desses é um mamífero?",
    respostas: ["Tubarão", "Golfinho", "Polvo", "Camarão"],
    correta: 1,
  },
  {
    pergunta: "Quantos dias tem um ano bissexto?",
    respostas: ["365", "366", "364", "360"],
    correta: 1,
  },
  {
    pergunta: "Qual o resultado de 8 × 7?",
    respostas: ["56", "42", "64", "49"],
    correta: 0,
  },
  {
    pergunta: "Qual o maior estado do Brasil?",
    respostas: ["Bahia", "São Paulo", "Amazonas", "Minas Gerais"],
    correta: 2,
  },
  {
    pergunta: "O que é HTML?",
    respostas: [
      "Linguagem de programação",
      "Linguagem de marcação",
      "Sistema operacional",
      "Editor de texto",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual desses é um navegador de internet?",
    respostas: ["Chrome", "Word", "Windows", "Excel"],
    correta: 0,
  },
  {
    pergunta: "Qual planeta é conhecido como planeta vermelho?",
    respostas: ["Terra", "Júpiter", "Marte", "Vênus"],
    correta: 2,
  },
  {
    pergunta: "Quem foi Albert Einstein?",
    respostas: ["Poeta", "Físico", "Pintor", "Astronauta"],
    correta: 1,
  },
  {
    pergunta: "Qual o coletivo de abelhas?",
    respostas: ["Revoada", "Cardume", "Enxame", "Manada"],
    correta: 2,
  },
  {
    pergunta: "Quem é o autor de 'O Pequeno Príncipe'?",
    respostas: [
      "J.K. Rowling",
      "Antoine de Saint-Exupéry",
      "Monteiro Lobato",
      "Machado de Assis",
    ],
    correta: 1,
  },
  {
    pergunta: "O que significa FIFA?",
    respostas: [
      "Federação Internacional de Futebol Amador",
      "Federação Internacional de Futebol Associado",
      "Federação Internacional de Futebol de Areia",
      "Federação Intercontinental de Futebol Associado",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior osso do corpo humano?",
    respostas: ["Fêmur", "Tíbia", "Úmero", "Coluna"],
    correta: 0,
  },
  {
    pergunta: "Qual é o país mais populoso do mundo?",
    respostas: ["Estados Unidos", "China", "Índia", "Indonésia"],
    correta: 1,
  },
];

let indiceAtual = 0;

function mostrarPergunta() {
  const pergunta = perguntas[indiceAtual];
  document.getElementById("question").textContent = pergunta.pergunta;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  pergunta.respostas.forEach((resposta, index) => {
    const btn = document.createElement("button");
    btn.textContent = resposta;
    btn.classList.add("answer-btn");
    btn.onclick = () => verificarResposta(index);
    answersDiv.appendChild(btn);
  });
}

function verificarResposta(indexSelecionado) {
  const correta = perguntas[indiceAtual].correta;
  const botoes = document.querySelectorAll(".answer-btn");
  botoes.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correta) {
      btn.style.background = "#4caf50";
    } else if (index === indexSelecionado) {
      btn.style.background = "#f44336";
    }
  });
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual >= perguntas.length) {
    document.getElementById("quiz").innerHTML =
      "<h2>🎉 Fim das perguntas Parabéns!</h2>";
  } else {
    mostrarPergunta();
  }
}

document.addEventListener("DOMContentLoaded", mostrarPergunta);
