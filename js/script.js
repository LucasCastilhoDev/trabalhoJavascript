import { configurarTema, carregarTemaSalvo } from "./tema.js";
import {
  carregarTarefas,
  configurarFormulario,
  configurarEventosRemocao,
} from "./adicionarTarefa.js";

document.addEventListener("DOMContentLoaded", () => {
  configurarTema();
  carregarTemaSalvo();

  carregarTarefas();
  configurarFormulario();
  configurarEventosRemocao();
});
