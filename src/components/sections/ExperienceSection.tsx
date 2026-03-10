import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/common/FadeIn";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/experience";

const TimelineItem = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isRight = index % 2 !== 0;

  return (
    <div ref={ref} className="relative pb-10 last:pb-0 md:pb-14">
      <motion.div
        className="absolute left-4 top-8 h-px w-8 bg-primary/25 lg:hidden"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.15 }}
      />

      <motion.div
        className={cn(
          "absolute top-8 hidden h-px w-10 bg-primary/25 lg:block",
          isRight ? "left-1/2" : "right-1/2",
        )}
        initial={{ scaleX: 0, originX: isRight ? 0 : 1 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.15 }}
      />

      <motion.div
        className="absolute left-4 top-8 -translate-x-1/2 lg:left-1/2"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.1 }}
      >
        <span className="absolute inset-0 rounded-full bg-primary/25 blur-md" />
        <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-background bg-primary shadow-[0_0_0_6px_rgba(255,255,255,0.03)]" />
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 32, x: isRight ? 28 : -28 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative ml-12 lg:ml-0 lg:w-[calc(50%-2.75rem)]",
          isRight ? "lg:ml-auto" : "lg:mr-auto",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="glass-border relative overflow-hidden bg-surface p-6 backdrop-blur-sm md:p-8">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/70" />
          <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-primary/15" />

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center border border-primary/20 bg-primary/5 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              {experience.period}
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
              {experience.context}
            </span>
            {experience.current && (
              <span className="inline-flex items-center gap-2 text-[10px] font-heading font-semibold uppercase tracking-[0.24em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Atual
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl font-medium text-foreground transition-colors duration-500 group-hover:text-primary md:text-2xl">
            {experience.role}
          </h3>
          <p className="mt-2 font-heading text-sm text-primary">{experience.company}</p>

          <p className="mt-5 text-sm leading-relaxed text-foreground/80 md:text-base">
            {experience.description}
          </p>

          {experience.highlight && (
            <div className="mt-5 border border-primary/15 bg-background/40 px-4 py-4">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {experience.highlight}
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="border border-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:border-primary/20 group-hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ExperienceSection = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-120px" });

  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-12 md:py-36 lg:px-24">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute right-0 top-20 hidden h-24 w-24 border border-primary/10 lg:block" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <span className="section-label mb-4 block">Experiência</span>
          <h2 className="mb-16 font-heading text-3xl font-semibold md:text-4xl lg:text-5xl">
            Trajetória
            <br />
            <span className="text-primary">Profissional</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Uma linha do tempo enxuta, mas precisa: evolução em validação, automação e
            análise operacional aplicada a produtos que exigem clareza, rastreabilidade e
            consistência.
          </p>
        </FadeIn>

        <div ref={timelineRef} className="relative mt-14 md:mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-foreground/[0.08] lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary/70 to-transparent lg:left-1/2 lg:-translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "100%" }}
          />

          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
