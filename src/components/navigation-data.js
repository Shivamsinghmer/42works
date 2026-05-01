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
  { label: "Banking & Financial Services", icon: BankIcon, desc: "Modernize banking with AI-driven intelligence that transforms risk modeling, fraud detection, and customer engagement into seamless, trusted financial experiences.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" },
  { label: "Retail & Consumer Goods", icon: RetailIcon, desc: "Drive customer loyalty and operational efficiency with predictive analytics and personalized, omnichannel retail experiences.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
  { label: "Healthcare & Life Sciences", icon: HealthIcon, desc: "Empower medical professionals and improve patient outcomes through secure data integration and advanced health-tech solutions.", image: "https://images.unsplash.com/photo-1740479050122-54a65ebc22f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Hi-Tech", icon: TechIcon, desc: "Accelerate product innovation and scale seamlessly with cutting-edge engineering and agile software practices.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { label: "Automotive & Manufacturing", icon: AutoIcon, desc: "Optimize supply chains and smart manufacturing with robust IoT integrations and intelligent automation systems.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800" },
  { label: "Travel & Hospitality", icon: TravelIcon, desc: "Elevate guest experiences and operational agility with connected booking systems and data-driven personalization.", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" },
];

export const SERVICE_GROUPS = [
  {
    label: "AI & Web3",
    icon: AiIcon,
    services: [
      "AI & Web3 Audits",
      "Generative AI & Smart Contracts",
      "AI Agents & Web3 Automation",
      "RAG Systems",
      "Secure Private LLM Systems",
      "Machine Learning",
    ],
  },
  {
    label: "Web3.0 Blockchain",
    icon: BlockchainIcon,
    services: [
      "dApp Development",
      "Smart Contract Audits",
      "RWA & Tokenization",
    ],
  },
  {
    label: "Data and Intelligence",
    icon: DataIcon,
    services: [
      "Data Engineering",
      "Data Analytics & Intelligence",
      "Business Intelligence",
    ],
  },
  {
    label: "Engineering",
    icon: EngineeringIcon,
    services: [
      "Full-Stack Development",
      "Mobile App Development",
      "API Development",
      "MVP Development",
    ],
  },
  {
    label: "Experience",
    icon: ExperienceIcon,
    services: [
      "UI/UX design",
      "Product Discovery",
      "Product Market Fit",
      "Product Management",
    ],
  },
  {
    label: "Cloud Tech",
    icon: CloudGroupIcon,
    services: [
      "Cloud Transformation",
      "DevOps & CI/CD",
    ],
  },
];
