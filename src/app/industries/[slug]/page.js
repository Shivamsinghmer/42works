import { INDUSTRIES_DATA } from "@/components/data/industries-data";
import IndustryPageTemplate from "@/components/pages/IndustryPageTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return {};
  return {
    title: `${industry.badge} — 42Works`,
    description: industry.subtitle,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
