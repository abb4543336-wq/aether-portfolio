import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, type ServicePageData } from "@/components/ServicePageLayout";

const pageData: ServicePageData = {
  hero: {
    title: "Security & Data Management",
    subtitle: "Protect your business with comprehensive cybersecurity and data backup solutions",
  },
  services: [
    {
      title: "Cybersecurity Services",
      subtitle: "Protect your business with comprehensive cybersecurity solutions",
      description: "In today's digital landscape, cybersecurity is critical. We provide comprehensive security services including threat assessment, monitoring, incident response, and compliance management to protect your business from cyber threats.",
      bullets: [
        "Security assessments and audits",
        "Threat monitoring and detection",
        "Firewall and intrusion prevention",
        "Security awareness training",
        "Compliance management (ISO, GDPR, etc.)",
      ],
    },
    {
      title: "Data Backup & Disaster Recovery",
      subtitle: "Ensure business continuity with robust backup solutions",
      description: "Protect your critical business data with comprehensive backup and disaster recovery solutions. We design and implement backup strategies to ensure quick recovery and minimal downtime in case of data loss or disasters.",
      bullets: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Data replication and synchronization",
        "Recovery testing and validation",
        "Business continuity planning",
      ],
    },
  ],
  cta: {
    title: "Ready to Secure Your Business?",
    subtitle: "Contact us today to discuss your security and data management needs",
  },
};

export const Route = createFileRoute("/services/security-data")({
  component: () => <ServicePageLayout data={pageData} />,
});
