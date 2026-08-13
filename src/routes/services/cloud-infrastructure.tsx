import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, type ServicePageData } from "@/components/ServicePageLayout";

const pageData: ServicePageData = {
  hero: {
    title: "Cloud & Infrastructure",
    subtitle: "Comprehensive cloud migration, infrastructure management, and network solutions",
  },
  services: [
    {
      title: "Cloud Migration & Transformation",
      subtitle: "Seamlessly migrate your infrastructure to the cloud with minimal disruption",
      description: "Our cloud migration services help businesses transition from on-premises infrastructure to cloud-based solutions efficiently and securely. We provide comprehensive planning, execution, and optimization services to ensure a smooth migration process.",
      bullets: [
        "Comprehensive migration planning and assessment",
        "Data migration and application porting",
        "Cloud architecture design and optimization",
        "Post-migration support and optimization",
        "Multi-cloud and hybrid cloud solutions",
      ],
    },
    {
      title: "Cloud Infrastructure Management",
      subtitle: "Optimize and manage your cloud infrastructure for maximum performance",
      description: "We provide ongoing management and optimization of your cloud infrastructure to ensure optimal performance, cost efficiency, and reliability. Our team monitors, maintains, and optimizes your cloud resources 24/7.",
      bullets: [
        "24/7 cloud infrastructure monitoring",
        "Cost optimization and resource management",
        "Performance tuning and scaling",
        "Security compliance and monitoring",
        "Automated backup and disaster recovery",
      ],
    },
    {
      title: "Infrastructure & Network Solutions",
      subtitle: "Design and implement robust network infrastructure solutions",
      description: "We design, implement, and maintain comprehensive network infrastructure solutions tailored to your business requirements. From local area networks to wide area networks, we ensure reliable connectivity and optimal performance.",
      bullets: [
        "Network design and architecture",
        "LAN/WAN implementation and configuration",
        "Wireless network solutions",
        "Network security and firewall management",
        "Network monitoring and maintenance",
      ],
    },
  ],
  cta: {
    title: "Ready to Modernize Your Infrastructure?",
    subtitle: "Contact us today to discuss your cloud and infrastructure needs",
  },
};

export const Route = createFileRoute("/services/cloud-infrastructure")({
  component: () => <ServicePageLayout data={pageData} />,
});
