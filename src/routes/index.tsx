import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  CloudCog,
  Database,
  Globe,
  HardDriveDownload,
  Headphones,
  Mail,
  Network,
  ScanFace,
  ServerCog,
  ShieldCheck,
  Store,
  Workflow,
} from "lucide-react";
import { SceneBackground } from "@/components/SceneBackground";
import { ServiceSection, type Service } from "@/components/ServiceSection";
import { ContactModal } from "@/components/ContactModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexLayer — IT & Cloud Solutions for Modern Enterprises" },
      {
        name: "description",
        content:
          "Cloud migration, managed IT, cybersecurity, ERP and network solutions delivered by a 24/7 enterprise engineering team.",
      },
      { property: "og:title", content: "NexLayer — IT & Cloud Solutions" },
      {
        property: "og:description",
        content:
          "Cloud modernization, cybersecurity, ERP, and managed IT operations engineered for uptime.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const cloud: Service[] = [
  {
    title: "Cloud Migration & Transformation",
    description:
      "Assessment, landing zones, and zero-downtime workload migration to AWS, Azure, or hybrid targets.",
    icon: Cloud,
  },
  {
    title: "Cloud Infrastructure Management",
    description:
      "FinOps-tuned, IaC-governed environments with observability, autoscaling, and patch automation.",
    icon: CloudCog,
  },
  {
    title: "Infrastructure & Network Solutions",
    description:
      "Data center build-outs, SD-WAN, structured cabling, and high-availability core switching.",
    icon: ServerCog,
  },
];

const apps: Service[] = [
  {
    title: "ERP Implementation & Integration",
    description:
      "End-to-end ERP rollouts with clean data migration and API integration into your existing stack.",
    icon: Workflow,
  },
  {
    title: "Cloud POS Solution",
    description:
      "Multi-branch, offline-resilient point of sale with real-time inventory and revenue dashboards.",
    icon: Store,
  },
];

const security: Service[] = [
  {
    title: "Cybersecurity Services",
    description:
      "Zero-trust architecture, endpoint hardening, SOC monitoring, and compliance readiness.",
    icon: ShieldCheck,
  },
  {
    title: "Data Backup & Disaster Recovery",
    description:
      "Immutable backups, tested runbooks, and RPO/RTO targets you can prove to auditors.",
    icon: HardDriveDownload,
  },
];

const managed: Service[] = [
  {
    title: "Managed IT Services",
    description:
      "24/7 NOC and helpdesk coverage, proactive maintenance, and SLA-backed incident response.",
    icon: Headphones,
  },
  {
    title: "Email & Communication Services",
    description:
      "Microsoft 365 and Google Workspace management, mail security, and unified collaboration.",
    icon: Mail,
  },
];

const consulting: Service[] = [
  {
    title: "IT Consulting & Strategy",
    description: "Roadmaps, architecture reviews, and technology budgeting aligned to growth plans.",
    icon: BarChart3,
  },
  {
    title: "Web Development",
    description: "High-performance corporate sites and web platforms built for scale and SEO.",
    icon: Globe,
    tag: "via AWSOL",
  },
  {
    title: "Digital Marketing",
    description: "Demand generation, paid search, and content engines measured on pipeline.",
    icon: ScanFace,
    tag: "via AWSOL",
  },
];

const NAV = [
  { href: "#cloud", label: "Cloud" },
  { href: "#applications", label: "Applications" },
  { href: "#security", label: "Security" },
  { href: "#managed", label: "Managed IT" },
  { href: "#consulting", label: "Consulting" },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SceneBackground />

      <header className="fixed inset-x-0 top-0 z-40">
        <div className="glass mx-auto mt-4 flex w-[min(92%,1100px)] items-center justify-between rounded-full px-5 py-3">
          <a href="#cloud" className="flex items-center gap-2 font-display font-semibold">
            <Network className="size-5 text-primary" />
            NexLayer
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-primary/40 px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary/10"
          >
            Talk to us
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="cloud"
        className="relative z-10 flex min-h-screen items-center px-5 pt-28 sm:px-8 lg:px-14"
      >
        <div className="mx-auto w-full max-w-6xl lg:ml-0 lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-primary">
              <Database className="size-3" /> Enterprise IT & Cloud
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              <span className="text-gradient">Cloud & Infrastructure</span>
              <br />
              Modernization
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Comprehensive cloud migration, infrastructure management, and network solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
              >
                Schedule a Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Scroll to plug in
              </span>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {cloud.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4"
              >
                <s.icon className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceSection
        id="applications"
        index="02"
        label="Business Applications"
        heading="Enterprise Business Applications"
        subtext="Core systems that run operations, integrated cleanly with the platforms you already use."
        services={apps}
        align="right"
      />
      <ServiceSection
        id="security"
        index="03"
        label="Security & Data"
        heading="Cyber Security & Data Protection"
        subtext="Defense in depth across identity, endpoint, and network — with recovery you have actually tested."
        services={security}
      />
      <ServiceSection
        id="managed"
        index="04"
        label="Managed Operations"
        heading="24/7 Managed IT & Operations"
        subtext="An always-on engineering team keeping your environment patched, monitored, and answered."
        services={managed}
        align="right"
      />
      <ServiceSection
        id="consulting"
        index="05"
        label="Consulting & Digital"
        heading="Strategic Consulting & Growth"
        subtext="From architecture roadmaps to the digital surface your customers actually touch."
        services={consulting}
      />

      {/* Footer CTA */}
      <footer className="relative z-10 px-5 pb-14 pt-10 sm:px-8 lg:px-14">
        <div className="glass mx-auto max-w-5xl rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to modernize your <span className="text-gradient">infrastructure</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Book a 30-minute session with our architects and leave with a concrete migration or
            security roadmap.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-display text-base font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
          >
            Schedule a Consultation
            <ArrowRight className="size-4" />
          </button>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} NexLayer IT & Cloud Solutions</span>
            <span>Cloud · Security · Managed IT · Consulting</span>
          </div>
        </div>
      </footer>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
