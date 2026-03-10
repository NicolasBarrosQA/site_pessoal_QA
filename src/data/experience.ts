export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  context: string;
  description: string;
  highlight?: string;
  tags: string[];
  current?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Analista de QA",
    company: "EMS",
    period: "Mai/2025 - Atual",
    context: "Indústria farmacêutica",
    description:
      "Conduzo o ciclo de validação de sistemas em ambiente regulado, desenhando testes funcionais, de integração e regressão para garantir confiabilidade, integridade de dados e evidências auditáveis.",
    highlight:
      "Automatizei etapas críticas de validação com Python e APIs REST, acelerando a execução e elevando a rastreabilidade do processo.",
    tags: ["Validação", "Python", "APIs REST", "Rastreabilidade"],
    current: true,
  },
  {
    role: "Suporte Técnico e Validação",
    company: "Velotracker",
    period: "Dez/2024 - Abr/2025",
    context: "Tecnologia",
    description:
      "Atuei na linha de frente da investigação de incidentes, reproduzindo falhas com precisão e traduzindo necessidades dos usuários em insumos claros para o time de desenvolvimento.",
    highlight:
      "Transformei ocorrência operacional em diagnóstico técnico, encurtando o caminho entre problema identificado e correção entregue.",
    tags: ["Investigação", "Suporte", "Comunicação técnica"],
  },
  {
    role: "Processos e Automação",
    company: "ENELO",
    period: "Jan/2023 - Set/2024",
    context: "Consultoria",
    description:
      "Mapeei fluxos operacionais, validei integrações e desenvolvi automações voltadas à consistência de dados entre sistemas, sempre com foco em eficiência e previsibilidade.",
    highlight:
      "Base que consolidou minha visão de qualidade como disciplina de processo, não apenas como etapa final de conferência.",
    tags: ["Processos", "Dados", "Automação"],
  },
];
