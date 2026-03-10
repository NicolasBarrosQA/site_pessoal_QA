import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/common/FadeIn";
import { principles } from "@/data/principles";

const PrincipleCard = ({
  principle,
  index,
}: {
  principle: (typeof principles)[number];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute left-0 top-0 w-[2px] bg-primary"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
      />

      <div className="glass-border ml-[2px] h-full bg-surface p-8 pl-8 transition-colors duration-500 group-hover:bg-muted/30 md:p-10 md:pl-10">
        <span className="font-heading text-xs font-semibold tracking-wider text-primary">
          {principle.number}
        </span>
        <h3 className="mt-3 mb-4 font-heading text-lg font-medium text-foreground transition-colors duration-500 group-hover:text-primary md:text-xl">
          {principle.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
};

const PrinciplesSection = () => {
  return (
    <section id="pilares" className="relative px-6 py-28 md:px-12 md:py-36 lg:px-24">
      <div className="absolute top-0 left-12 h-[1px] w-12 bg-primary/50 lg:left-24" />

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="section-label mb-4 block">Abordagem</span>
          <h2 className="mb-4 font-heading text-3xl font-semibold md:text-4xl lg:text-5xl">
            Como eu penso
            <br />
            <span className="text-primary">a qualidade</span>
          </h2>
          <p className="mt-4 mb-16 max-w-md text-muted-foreground">
            Três princípios que orientam cada decisão técnica e cada linha de
            validação que escrevo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
