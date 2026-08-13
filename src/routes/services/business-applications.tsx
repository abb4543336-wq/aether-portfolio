import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, type ServicePageData } from "@/components/ServicePageLayout";

const pageData: ServicePageData = {
  hero: {
    title: "Business Applications",
    subtitle: "Enterprise resource planning and point of sale solutions",
  },
  services: [
    {
      title: "ERP Implementation & Integration",
      subtitle: "Streamline your business processes with comprehensive ERP solutions",
      description: "LateralWorx specializes in ERP implementation services, offering expert implementation of SAP Business One (SAP B1) and LateralWorx ERP solutions. We help businesses integrate and optimize their operations through comprehensive enterprise resource planning systems, ensuring seamless integration with existing applications and providing comprehensive training and ongoing support.",
      bullets: [
        "## Our ERP Solutions:",
        "### SAP Business One (SAP B1)",
        "SAP B1 is a comprehensive ERP solution designed for small and medium-sized businesses. We provide end-to-end implementation services including system configuration, customization, and integration with your existing business processes.",
        "### LateralWorx ERP",
        "Our proprietary LateralWorx ERP solution is tailored to meet the specific needs of your business. We offer custom implementation, configuration, and integration services to streamline your operations.",
        "## Our Services Include:",
        "SAP B1 implementation and configuration",
        "LateralWorx ERP implementation and customization",
        "ERP system selection and planning",
        "System integration with existing applications",
        "Data migration and conversion",
        "Custom module development",
        "User training and ongoing support",
        "Post-implementation optimization and maintenance",
      ],
    },
    {
      title: "Cloud POS Solution",
      subtitle: "Comprehensive Point of Sale solutions for modern businesses",
      description: "LateralWorx provides comprehensive POS (Point of Sale) solutions designed to streamline your retail operations, improve customer experience, and enhance business efficiency. Our POS solutions integrate seamlessly with your existing systems and provide real-time insights into your business operations.",
      bullets: [
        "POS system implementation and configuration",
        "Hardware and software integration",
        "Inventory management integration",
        "Payment processing solutions",
        "Sales reporting and analytics",
        "Multi-location support",
        "Customer relationship management (CRM) integration",
        "Training and ongoing support",
      ],
    },
  ],
  cta: {
    title: "Ready to Streamline Your Business Operations?",
    subtitle: "Contact us today to discuss your business application needs",
  },
};

export const Route = createFileRoute("/services/business-applications")({
  component: () => <ServicePageLayout data={pageData} />,
});
