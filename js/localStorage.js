export const TarefasStorage = {
  get: () => {
    const tarefas = localStorage.getItem("tarefas");
    return tarefas ? JSON.parse(tarefas) : [];
  },

  save: (tarefas) => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  },
};

export const TemaStorage = {
  saveMode: (isDarkMode) => {
    localStorage.setItem("darkMode", isDarkMode);
  },

  loadMode: () => {
    return localStorage.getItem("darkMode") === "true";
  },
};
