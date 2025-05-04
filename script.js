function inserir(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

// Ativar/desativar dark mode
document.getElementById("toggle-dark").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
