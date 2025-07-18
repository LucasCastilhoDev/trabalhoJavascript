import { TarefasStorage } from "./localStorage.js";

function getBadgeClass(prioridade) {
  switch (prioridade) {
    case "Alta":
      return "bg-danger";
    case "Média":
      return "bg-warning text-dark";
    case "Baixa":
      return "bg-secondary";
    default:
      return "bg-light";
  }
}

export function adicionarTarefa(descricao, prioridade, id = Date.now()) {
  const lista = document.getElementById("listaTarefas");
  const novaLinha = document.createElement("tr");
  novaLinha.dataset.id = id;

  novaLinha.innerHTML = `
    <td>${descricao}</td>
    <td><span class="badge ${getBadgeClass(
      prioridade
    )}">${prioridade}</span></td>
    <td><button class="btn btn-success btn-sm">Concluir</button></td>
  `;

  lista.appendChild(novaLinha);
  salvarTodasTarefas();
}

export function salvarTodasTarefas() {
  const tarefas = [];
  document.querySelectorAll("#listaTarefas tr").forEach((linha) => {
    tarefas.push({
      id: linha.dataset.id,
      descricao: linha.cells[0].textContent,
      prioridade: linha.cells[1].querySelector(".badge").textContent,
    });
  });
  TarefasStorage.save(tarefas);
}

export function carregarTarefas() {
  const tarefas = TarefasStorage.get();
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = ""; // limpa todas as linhas existentes
  tarefas.forEach((tarefa) => {
    adicionarTarefa(tarefa.descricao, tarefa.prioridade, tarefa.id);
  });
}

export function configurarFormulario() {
  const form = document.getElementById("formTarefa");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const descricao = document.getElementById("descricao").value.trim();
    const prioridade = document.getElementById("prioridade").value;

    if (descricao && prioridade) {
      adicionarTarefa(descricao, prioridade);
      form.reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
}

export function configurarEventosRemocao() {
  const lista = document.getElementById("listaTarefas");
  if (!lista) return;

  lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-success");
    if (!botao) return;

    const linha = botao.closest("tr");
    if (linha) {
      linha.remove();
      salvarTodasTarefas();
    }
  });
}
