import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { contactLinks, footerProfile } from "@/data/contact";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-28 md:px-12 md:py-36 lg:px-24">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-primary/20" />
      <div className="absolute bottom-12 right-12 hidden h-24 w-24 border border-foreground/[0.04] lg:block" />
      <div className="absolute top-12 left-12 hidden h-8 w-8 border border-primary/10 lg:block" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <FadeIn>
          <span className="section-label mb-6 block">Contato</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Construindo sistemas
            <br />
            <span className="text-primary">confiáveis.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-14 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Sigo aprofundando minha atuação em engenharia e qualidade de software, com foco
            em fluxos confiáveis, automações úteis e tomada de decisão baseada em
            evidências.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 border border-foreground/10 px-5 py-3 font-heading text-sm font-medium text-foreground transition-all duration-400 hover:border-primary hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-24 flex flex-col gap-4 border-t border-foreground/[0.08] pt-6 md:flex-row md:items-end md:justify-between md:pt-8">
            <div>
              <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-primary">
                {footerProfile.name}
              </p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground/60">
                {footerProfile.summary}
              </p>
            </div>
            <p className="font-heading text-xs uppercase tracking-[0.22em] text-muted-foreground/40">
              {footerProfile.location}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
