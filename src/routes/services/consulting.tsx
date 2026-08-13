import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, type ServicePageData } from "@/components/ServicePageLayout";

export const Route = createFileRoute("/services/consulting")({
  component: ConsultingPage,
});

const pageData: ServicePageData = {
  hero: {
    title: "Consulting & Digital Services",
    subtitle: "Strategic IT consulting, web development, and digital marketing solutions",
  },
  services: [
    {
      title: "IT Consulting & Strategy",
      subtitle: "Strategic IT consulting for informed technology decisions",
      description: "Our IT consulting services help businesses make informed technology decisions aligned with their business goals. We provide strategic guidance, technology assessments, and roadmap planning to drive digital transformation.",
      bullets: [
        "IT strategy and roadmap development",
        "Technology assessments and audits",
        "Digital transformation consulting",
        "Vendor evaluation and selection",
        "Cost optimization strategies",
      ],
    },
    {
      title: "Web Development",
      subtitle: "Professional web development services through our trusted partner",
      description: "LateralWorx partners with AWSOL to provide comprehensive web development solutions. Together, we deliver modern, responsive, and scalable web applications tailored to your business needs.\n\nPartnership: We collaborate with AWSOL (www.awsol.net) to bring you expert web development services.",
      bullets: [
        "Custom web application development",
        "Responsive website design and development",
        "E-commerce solutions",
        "Content Management Systems (CMS)",
        "Web application maintenance and support",
        "API development and integration",
      ],
    },
    {
      title: "Digital Marketing",
      subtitle: "Comprehensive digital marketing solutions through strategic partnership",
      description: "LateralWorx partners with AWSOL to offer comprehensive digital marketing services. Our partnership enables us to provide end-to-end digital marketing solutions that drive growth and enhance your online presence.\n\nPartnership: We collaborate with AWSOL (www.awsol.net) to deliver expert digital marketing services.",
      bullets: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Analytics and Performance Tracking",
        "Brand Strategy and Development",
      ],
    }
  ],
  cta: {
    title: "Ready to Grow Your Business?",
    subtitle: "Contact us today to discuss your consulting and digital service needs",
  },
};

function ConsultingPage() {
  return <ServicePageLayout data={pageData} />;
}
