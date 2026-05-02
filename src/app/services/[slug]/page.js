import { SERVICES_DATA } from "@/components/data/services-data";
import ServicePageTemplate from "@/components/pages/ServicePageTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};
  return {
    title: `${service.badge} — 42Works`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
