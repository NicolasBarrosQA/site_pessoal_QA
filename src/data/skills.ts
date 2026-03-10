export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Testes & QA",
    items: [
      "Testes Funcionais",
      "Testes de Regressão",
      "Testes Exploratórios",
      "Documentação de Testes",
      "Análise de Logs",
      "Bug Tracking",
    ],
  },
  {
    title: "Automação & Tecnologia",
    items: ["Python", "API REST", "SQL", "Selenium", "CI/CD"],
  },
  {
    title: "Métodos & Ferramentas",
    items: ["Scrum", "Kanban", "Jira"],
  },
  {
    title: "Contexto de Atuação",
    items: ["Integridade de Dados", "Sistemas Críticos", "Ambientes Regulados"],
  },
];
