import { 
  Info, 
  Bot,
  Hexagon,
  Database,
  Code,
  MonitorSmartphone,
  Cloud
} from "lucide-react";

import { 
  BankIcon,
  RetailIcon,
  HealthIcon,
  TechIcon,
  AutoIcon,
  TravelIcon,
  AiIcon,
  BlockchainIcon,
  DataIcon,
  EngineeringIcon,
  ExperienceIcon,
  CloudGroupIcon
} from "./IndustryIcons";

export const CENTER_LINKS = [
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
];

export const INDUSTRIES_LINKS = [
  { label: "Banking & Financial Services", href: "/industries/banking", icon: BankIcon, desc: "Modernize banking with AI-driven intelligence that transforms risk modeling, fraud detection, and customer engagement into seamless, trusted financial experiences.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" },
  { label: "Retail & Consumer Goods", href: "/industries/retail", icon: RetailIcon, desc: "Drive customer loyalty and operational efficiency with predictive analytics and personalized, omnichannel retail experiences.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare", icon: HealthIcon, desc: "Empower medical professionals and improve patient outcomes through secure data integration and advanced health-tech solutions.", image: "https://images.unsplash.com/photo-1740479050122-54a65ebc22f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Hi-Tech", href: "/industries/hi-tech", icon: TechIcon, desc: "Accelerate product innovation and scale seamlessly with cutting-edge engineering and agile software practices.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { label: "Automotive & Manufacturing", href: "/industries/automotive", icon: AutoIcon, desc: "Optimize supply chains and smart manufacturing with robust IoT integrations and intelligent automation systems.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800" },
  { label: "Travel & Hospitality", href: "/industries/travel", icon: TravelIcon, desc: "Elevate guest experiences and operational agility with connected booking systems and data-driven personalization.", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" },
];

export const SERVICE_GROUPS = [
  {
    label: "Artificial Intelligence",
    icon: AiIcon,
    services: [
      { label: "AI Audits", href: "/services/ai-audit" },
      { label: "Generative AI", href: "/services/generative-ai" },
      { label: "AI Agents & Automation", href: "/services/ai-agents" },
      { label: "RAG Systems", href: "/services/rag-systems" },
      { label: "Secure Private LLM Systems", href: "/services/private-llm" },
      { label: "Machine Learning", href: "/services/machine-learning" },
    ],
  },
  {
    label: "Web3 & Blockchain",
    icon: BlockchainIcon,
    services: [
      { label: "Smart Contract Audits", href: "/services/smart-contracts" },
      { label: "dApp Development", href: "/services/dapp-development" },
      { label: "RWA & Tokenization", href: "/services/rwa-tokenization" },
      { label: "DeFi Protocols", href: "/services/defi-protocols" },
      { label: "VARA / MiCA Compliance", href: "/services/vara-mica" },
    ],
  },
  {
    label: "Data and Intelligence",
    icon: DataIcon,
    services: [
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "Data Analytics & Intelligence", href: "/services/data-analytics" },
      { label: "Business Intelligence", href: "/services/business-intelligence" },
    ],
  },
  {
    label: "Engineering",
    icon: EngineeringIcon,
    services: [
      { label: "Full-Stack Development", href: "/services/full-stack-development" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "API Development", href: "/services/api-development" },
      { label: "AI & Web3 Solutions Building", href: "/services/mvp-development" },
    ],
  },
  {
    label: "Experience",
    icon: ExperienceIcon,
    services: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Product Discovery", href: "/services/product-discovery" },
      { label: "Product Market Fit", href: "/services/product-discovery" },
      { label: "Product Management", href: "/services/product-discovery" },
    ],
  },
  {
    label: "Cloud Tech",
    icon: CloudGroupIcon,
    services: [
      { label: "Cloud Transformation", href: "/services/cloud-transformation" },
      { label: "DevOps & CI/CD", href: "/services/devops" },
    ],
  },
];
