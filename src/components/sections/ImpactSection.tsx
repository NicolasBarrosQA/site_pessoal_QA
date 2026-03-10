import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/common/FadeIn";
import { impactMetrics } from "@/data/metrics";

const ImpactCard = ({
  metric,
  index,
}: {
  metric: (typeof impactMetrics)[number];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const textSize = metric.size === "medium" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.12 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[1px] bg-foreground/20"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.4, delay: index * 0.12, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[1px] bg-foreground/20"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.15, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[1px] bg-foreground/20"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[1px] bg-foreground/20"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.45, ease: "easeOut" }}
          style={{ transformOrigin: "bottom" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 h-[2px] w-4 bg-primary"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.12 + 0.5 }}
      />
      <motion.div
        className="absolute top-0 left-0 h-4 w-[2px] bg-primary"
        initial={{ scaleY: 0, originY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.12 + 0.5 }}
      />

      <div className="bg-surface p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.5 }}
        >
          <p className={`mb-3 font-heading font-semibold leading-[1.05] tracking-tight ${textSize}`}>
            {metric.value}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {metric.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36 lg:px-24">
      <motion.div
        className="absolute right-0 top-1/2 hidden h-[1px] w-32 bg-primary/20 lg:block"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-20 text-center">
            <span className="section-label mb-4 block">Resultados</span>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl lg:text-5xl">
              Impacto
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {impactMetrics.map((metric, index) => (
            <ImpactCard key={metric.description} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
