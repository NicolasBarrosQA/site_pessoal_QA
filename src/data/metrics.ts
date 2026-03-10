export interface ImpactMetric {
  value: string;
  description: string;
  size: "medium" | "small";
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: "Mais de 3 anos",
    description: "de experiência em qualidade, validação e automação de sistemas",
    size: "medium",
  },
  {
    value: "Mais de 60h",
    description: "de trabalho manual reduzidas com automações úteis e rastreáveis",
    size: "medium",
  },
  {
    value: "Mais de 30 projetos",
    description: "de software entregues com foco em confiabilidade e previsibilidade",
    size: "small",
  },
  {
    value: "QA com contexto",
    description: "conectando operação, negócio e engenharia para corrigir mais cedo",
    size: "small",
  },
];
