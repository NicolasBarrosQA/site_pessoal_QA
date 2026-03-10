import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import perfilImg from "@/assets/perfil.jpeg";
import { FadeIn } from "@/components/common/FadeIn";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "30%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute top-0 right-[15%] hidden w-[1px] bg-primary/30 lg:block"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-7">
            <FadeIn delay={0.2}>
              <div className="mb-10 flex items-center gap-4 md:mb-12">
                <span className="red-dot" />
                <span className="section-label">Nicolas Barros</span>
                <motion.div
                  className="h-px flex-1 bg-foreground/10"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                Estrutura, validação
                <br />
                <span className="text-primary">e automação</span> para
                <br />
                sistemas que precisam
                <br />
                ser{" "}
                <span className="relative inline-block">
                  confiáveis
                  <motion.span
                    className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                .
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Analista de Qualidade de Software. Estruturo validações, automações e
                evidências para que fluxos digitais críticos sejam previsíveis, seguros e
                rastreáveis.
              </p>
            </FadeIn>

            <FadeIn delay={0.65}>
              <a href="#pilares" className="group mt-12 inline-flex items-center gap-3">
                <span className="font-heading text-sm font-medium tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  Explorar
                </span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-4 w-4 text-primary" />
                </motion.span>
              </a>
            </FadeIn>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end xl:col-span-5">
            <FadeIn delay={0.4} direction="right">
              <div className="relative">
                <div className="absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute -right-3 -bottom-3 h-8 w-8 border-r-2 border-b-2 border-primary" />

                <div className="relative h-80 w-64 overflow-hidden sm:h-96 sm:w-72 lg:h-[420px] lg:w-80">
                  <motion.img
                    src={perfilImg}
                    alt="Nicolas Eduardo Barros Silvério"
                    className="h-full w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 -rotate-90 xl:block">
                  <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-muted-foreground/40">
                    QA Engineer
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 h-12 w-[1px] -translate-x-1/2 bg-primary/30"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
};

export default HeroSection;
