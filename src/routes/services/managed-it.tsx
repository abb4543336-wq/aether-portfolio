import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, type ServicePageData } from "@/components/ServicePageLayout";

export const Route = createFileRoute("/services/managed-it")({
  component: ManagedItPage,
});

const pageData: ServicePageData = {
  hero: {
    title: "Managed IT Services",
    subtitle: "24/7 IT support, proactive maintenance, and reliable communication services",
  },
  services: [
    {
      title: "Managed IT Services",
      subtitle: "24/7 IT support and proactive maintenance",
      description: "Our managed IT services provide comprehensive support to keep your IT infrastructure running smoothly. We offer proactive monitoring, maintenance, and support to prevent issues before they impact your business.",
      bullets: [
        "24/7 help desk support",
        "Proactive monitoring and maintenance",
        "Remote and on-site support",
        "IT asset management",
        "Vendor management and coordination",
      ],
    },
    {
      title: "Email & Communication Services",
      subtitle: "Reliable email hosting and communication solutions",
      description: "We provide enterprise-grade email hosting and communication services to keep your business connected. Our solutions include secure email hosting, collaboration tools, and comprehensive communication platforms.",
      bullets: [
        "Enterprise email hosting",
        "Email security and spam filtering",
        "Email migration services",
        "Collaboration tools and calendars",
        "Email backup and archiving",
      ],
    }
  ],
  cta: {
    title: "Ready for Reliable IT Support?",
    subtitle: "Contact us today to discuss your managed IT service needs",
  },
};

function ManagedItPage() {
  return <ServicePageLayout data={pageData} />;
}
