export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Análise de Fluxo Ponta a Ponta",
    description:
      "Mapeio o caminho completo do dado para entender dependências, pontos de falha e oportunidades de validação, garantindo que o sistema funcione como um todo coeso.",
  },
  {
    number: "02",
    title: "Automação com Propósito",
    description:
      "Crio automações não para eliminar o humano, mas para amplificar sua capacidade. O foco é reduzir o esforço repetitivo em validações críticas, liberando tempo para análise complexa.",
  },
  {
    number: "03",
    title: "Investigação e Rastreabilidade",
    description:
      "Em ambientes regulados, cada ação precisa de um rastro. Investigo a causa raiz dos defeitos via logs e APIs, documentando com a precisão necessária para garantir a integridade dos dados.",
  },
];
