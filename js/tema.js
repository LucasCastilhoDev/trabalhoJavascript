import { TemaStorage } from "./localStorage.js";

export function aplicarTemaEscuro() {
  document.body.classList.add("bg-dark", "text-light");
  document.body.classList.remove("bg-light", "text-dark");

  const elementos = [
    ...document.querySelectorAll(".card, .form-control, .form-select, .table"),
    document.querySelector("header"),
  ];

  elementos.forEach((el) => {
    if (!el) return;

    el.classList.remove(
      "bg-light",
      "text-dark",
      "table-light",
      "table-striped",
      "btn-outline-secondary"
    );

    el.classList.add(
      "bg-dark",
      "text-light",
      "table-dark",
      "table-hover",
      "btn-outline-light"
    );
  });

  const toggleTheme = document.getElementById("toggleTheme");
  if (toggleTheme) {
    toggleTheme.textContent = "Tema Claro";
  }
}

export function removerTemaEscuro() {
  document.body.classList.add("bg-light", "text-dark");
  document.body.classList.remove("bg-dark", "text-light");

  const elementos = [
    ...document.querySelectorAll(".card, .form-control, .form-select, .table"),
    document.querySelector("header"),
  ];

  elementos.forEach((el) => {
    if (!el) return;

    el.classList.remove(
      "bg-dark",
      "text-light",
      "table-dark",
      "table-hover",
      "btn-outline-light"
    );

    el.classList.add(
      "bg-light",
      "text-dark",
      "table-light",
      "table-striped",
      "btn-outline-secondary"
    );
  });

  const toggleTheme = document.getElementById("toggleTheme");
  if (toggleTheme) {
    toggleTheme.textContent = "Tema Escuro";
  }
}

export function configurarTema() {
  const toggleTheme = document.getElementById("toggleTheme");
  if (!toggleTheme) return;

  toggleTheme.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.contains("bg-dark");

    if (isDarkMode) {
      aplicarTemaEscuro();
    } else {
      removerTemaEscuro();
    }

    TemaStorage.saveMode(isDarkMode);
  });
}

export function carregarTemaSalvo() {
  if (TemaStorage.loadMode()) {
    aplicarTemaEscuro();
  } else {
    removerTemaEscuro();
  }
}
