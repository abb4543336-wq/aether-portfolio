import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag?: string;
};

export function ServiceSection({
  id,
  index,
  label,
  heading,
  subtext,
  services,
  align = "left",
}: {
  id: string;
  index: string;
  label: string;
  heading: string;
  subtext?: string;
  services: Service[];
  align?: "left" | "right";
}) {
  return (
    <section
      id={id}
      className="relative z-10 flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-14"
    >
      <div
        className={`mx-auto w-full max-w-6xl ${align === "right" ? "lg:ml-auto lg:mr-0 lg:max-w-2xl" : "lg:mr-auto lg:ml-0 lg:max-w-2xl"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-xs tracking-[0.35em] text-primary">{index}</span>
            <span className="h-px w-14 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subtext ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {subtext}
            </p>
          ) : null}
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="glass group relative overflow-hidden rounded-xl p-5"
              style={{ boxShadow: "var(--shadow-neon)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-60"
                style={{ background: "var(--gradient-neon)" }}
                aria-hidden
              />
              <s.icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              {s.tag ? (
                <span className="mt-4 inline-block rounded-full border border-accent/40 px-3 py-1 text-[11px] uppercase tracking-widest text-accent">
                  {s.tag}
                </span>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
