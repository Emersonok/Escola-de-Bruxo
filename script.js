function adicionarDados(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome");
  const animal = document.querySelector("#animal");
  const localAtual = document.querySelector("#localAtual");
  const casa = document.querySelector("#casa");

  if (
    !isValidInput(nome.value) ||
    !isValidInput(animal.value) ||
    !isValidInput(localAtual.value) ||
    !isValidInput(casa.value)
  ) {
    alert("Nenhum campo pode ficar vazio");
    return;
  }

  const tableRow = document.createElement("tr");

  const Num = document.createElement("td");
  Num.textContent = "#";

  const Nome = document.createElement("td");
  Nome.textContent = nome.value;

  const Animal = document.createElement("td");
  Animal.textContent = animal.value;

  const Local = document.createElement("td");
  Local.textContent = localAtual.value;

  const Casa = document.createElement("td");
  Casa.textContent = casa.value;

  tableRow.appendChild(Num);
  tableRow.appendChild(Nome);
  tableRow.appendChild(Animal);
  tableRow.appendChild(Local);
  tableRow.appendChild(Casa);

  const tabela = document.querySelector("#tabela");

  const minhaTabela = document.querySelector("table");

  if (!minhaTabela) {
    const table = document.createElement("table");

    const headerLinha = document.createElement("tr");

    const numHeader = document.createElement("th");
    numHeader.textContent = "#";

    const nomeHeader = document.createElement("th");
    nomeHeader.textContent = "Nome";

    const animalHeader = document.createElement("th");
    animalHeader.textContent = "Animal";

    const localHeader = document.createElement("th");
    localHeader.textContent = "Local";

    const casaHeader = document.createElement("th");
    casaHeader.textContent = "Casa";

    headerLinha.appendChild(numHeader);
    headerLinha.appendChild(nomeHeader);
    headerLinha.appendChild(animalHeader);
    headerLinha.appendChild(localHeader);
    headerLinha.appendChild(casaHeader);

    table.appendChild(headerLinha);

    tabela.appendChild(table);
  }

  const newTableRow = document.createElement("tr");

  const numerar = document.createElement("td");
  const novoNome = document.createElement("td");
  const novoAnimal = document.createElement("td");
  const novoLocal = document.createElement("td");
  const novaCasa = document.createElement("td");

  numerar.textContent = minhaTabela ? minhaTabela.rows.length : 1;
  novoNome.textContent = nome.value;
  novoAnimal.textContent = nome.value;
  novoLocal.textContent = nome.value;
  novaCasa.textContent = nome.value;

  const novaTabela = minhaTabela || document.querySelector("table");
  novaTabela.appendChild(tableRow);

  document.getElementById("forms").reset();
}

function isValidInput(value) {
  return typeof value === "string" && value.trim() !== "";
}

const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", adicionarDados);
