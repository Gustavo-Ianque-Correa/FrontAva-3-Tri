// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Seleção de elementos
const imcTable = document.querySelector("#imc-table");

const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");


const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");

const backBtn = document.querySelector("#back-btn");

// Funções
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imcTable.appendChild(div);
  });
}

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

function calcImc(heightInput, weightInput) {
  const imc = (weightInput / (heightInput * heightInput)).toFixed(1);
  return imc;
}



// Init
createTable(data);

// Eventos

calcBtn.addEventListener("input", (e) => {
  const updatedValue = validDigits(e.target.value);

  e.target.value = updatedValue;
});




calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  heightInput = document.querySelector("#height").value;
  weightInput = document.querySelector("#width").value;


  heightInput = heightInput / 100

  console.log(weightInput, heightInput);

  if (!weightInput || !heightInput) return;

  const imc = calcImc(heightInput, weightInput);
  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  imcNumber.innerText = imc;
  imcInfo.innerText = info;

  switch (info) {
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;
    case "Sobrepeso":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Obesidade":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;
    case "Obesidade grave":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;
  }


});


clearBtn.addEventListener("click", (e) => {
  window.location.reload(true);
});

backBtn.addEventListener("click", (e) => {
  cleanInputs();
  window.location.reload(true);
});


function cleanInputs() {

  heightInput = "";
  weightInput = "";
  imcNumber.className = "";
  imcInfo.className = "";
}
//näo sei como ta funcionando, muito dificil esse codigo0



