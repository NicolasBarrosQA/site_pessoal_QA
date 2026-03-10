export interface ContactLink {
  label: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:nicolasescaleta@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nicolas-barros-910852197" },
  { label: "GitHub", href: "https://github.com/NicolasBarrosQA" },
];

export const footerProfile = {
  name: "Nicolas Eduardo Barros Silvério",
  summary: "QA focado em validação, automação e confiabilidade operacional para sistemas que não podem falhar.",
  location: "Hortolândia, SP · 2026",
};
