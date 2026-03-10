import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/FadeIn";
import { skillGroups } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section className="relative px-6 py-28 md:px-12 md:py-36 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="section-label mb-4 block">Stack</span>
          <h2 className="mb-16 font-heading text-3xl font-semibold md:text-4xl lg:text-5xl">
            Ferramentas e
            <br />
            <span className="text-primary">Disciplinas</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.1}>
              <div>
                <h3 className="mb-6 border-b border-primary/20 pb-3 font-heading text-xs font-semibold uppercase tracking-wider text-primary">
                  {group.title}
                </h3>
                <StaggerContainer>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <StaggerItem key={item}>
                        <li className="cursor-default text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                          {item}
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
