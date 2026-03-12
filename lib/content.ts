export type NavItem = { label: string; href: string };

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Capability = {
  title: string;
  description: string;
};

export type Metric = {
  label: string;
  value: string;
  note: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  domains: string[];
  stack: string[];
  problem: string;
  context: string;
  constraints: string[];
  architecture: string[];
  securityScaleCompliance: string[];
  contributions: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const personalBrand = {
  name: "Maheshwaran Ramesh",
  title: "Blockchain Architect | DeFi Protocols | Tokenized Finance | Avalanche Subnets | Solana | DePIN | AI-Driven Web3 Systems",
  shortBio:
    "I design and ship production-grade blockchain systems across protocol engineering, infrastructure, tokenized finance, and AI-assisted on-chain automation.",
  location: "Dindigul, Tamil Nadu, India",
  email: "maheshwarankr.98@gmail.com",
  phone: "+91-822-044-8359",
  linkedin: "https://www.linkedin.com/in/maheswaran-kr/",
  github: "https://github.com/Maheshwaranx15",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Architecture", href: "/architecture" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export const heroLines = [
  "I architect blockchain systems that feel built for the future.",
  "From validator infrastructure to tokenized finance, I design systems that ship.",
  "Dark, resilient, production-grade architecture for Web3.",
];

export const capabilities: Capability[] = [
  {
    title: "Protocol Engineering",
    description: "Design of AMM mechanics, liquidity infrastructure, and core token flows for production DeFi systems.",
  },
  {
    title: "Smart Contracts",
    description: "Secure, gas-aware contracts in Solidity plus cross-ecosystem exposure across Sway, PyTeal, and sCrypt.",
  },
  {
    title: "Blockchain Infrastructure",
    description: "Mainnet/testnet launch workflows, explorers, faucets, miner nodes, and chain operations from zero to live.",
  },
  {
    title: "DeFi Systems",
    description: "Swap architecture, concentrated liquidity, meta-transactions, disbursal rails, and lending-oriented execution paths.",
  },
  {
    title: "Tokenized Finance",
    description: "Real-asset and gold-backed finance rails with permissioned controls, KYC, and auditable transaction design.",
  },
  {
    title: "DePIN / Decentralized Compute",
    description: "Privacy-first distributed compute participation with real-world node/device onboarding models.",
  },
  {
    title: "AI-Assisted On-Chain Systems",
    description: "Signal-driven automation, risk classification, and low-latency execution logic for real-time chain interaction.",
  },
  {
    title: "Full-Stack Web3 Delivery",
    description: "Next.js + Node/Nest + wallet integration + microservices + cloud delivery for complete Web3 product stacks.",
  },
];

export const metrics: Metric[] = [
  {
    label: "NFT Minting Throughput",
    value: "40,000",
    note: "Scalable minting engine delivered for Jump.Trade operations.",
  },
  {
    label: "USDT Disbursed",
    value: "500k+",
    note: "BulkDisburse contract remains live with sustained usage.",
  },
  {
    label: "Shadow Wallets Created",
    value: "12k+",
    note: "Account abstraction wallet deployment for mobile-first flows.",
  },
  {
    label: "Gasless Transfers Executed",
    value: "45k+",
    note: "EIP-712 meta-transaction rails running in production.",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Calibraint",
    role: "Lead Blockchain Developer",
    period: "May 2025 - Present",
    location: "India",
    highlights: [
      "Leading architecture and implementation of blockchain systems spanning NFT gaming ecosystems, social platforms, and protocol integrations.",
      "Driving smart contract and protocol delivery with production-grade reliability and scale focus.",
      "Owning cross-functional Web3 execution across contracts, backend orchestration, and product integration.",
    ],
  },
  {
    company: "Chainscript Labs",
    role: "Lead Blockchain Engineer",
    period: "May 2024 - May 2025",
    location: "India",
    highlights: [
      "Leading architecture and implementation of blockchain systems spanning NFT gaming ecosystems, social platforms, and protocol integrations.",
      "Delivered contracts and integration layers for tournament logic, NFT reward systems, and marketplace pipelines.",
      "Drove decentralized product direction combining smart contracts, backend orchestration, and user-facing Web3 experiences.",
    ],
  },
  {
    company: "RyukLabs",
    role: "Senior Blockchain Engineer",
    period: "Jul 2023 - May 2024",
    location: "Bangalore, India",
    highlights: [
      "Built BulkDisburse system with 500k+ USDT already processed.",
      "Delivered account abstraction shadow wallets with 12k+ smart contract wallets provisioned.",
      "Implemented SmartTransfer gasless flow (EIP-712) with 45k+ live transactions.",
    ],
  },
  {
    company: "Guardian Link",
    role: "Senior Blockchain Engineer",
    period: "Feb 2022 - Jul 2023",
    location: "Chennai, India",
    highlights: [
      "Contributed to Jump.Trade marketplace architecture and contract integration workflows.",
      "Engineered minting pipeline supporting up to 40,000 NFT mints under high demand.",
      "Supported marketplace reliability and integration depth for large-scale NFT operations.",
    ],
  },
  {
    company: "Netobjex (Contract)",
    role: "Associate Blockchain Developer",
    period: "Jul 2021 - Feb 2022",
    location: "Remote",
    highlights: [
      "Built Algorand NFT marketplace using PyTeal and AlgoSigner wallet integration.",
      "Implemented Node.js backend services connecting on-chain contracts and off-chain systems.",
      "Optimized persistence architecture for marketplace data and transaction workflows.",
    ],
  },
  {
    company: "Osiz Technologies",
    role: "Junior Blockchain Developer",
    period: "Oct 2020 - Jul 2021",
    location: "Madurai, India",
    highlights: [
      "Developed Solidity smart contracts in a blockchain R&D team.",
      "Authored internal NFT and DeFi process documentation that standardized delivery over a five-month cycle.",
      "Participated in mainnet deployments and lifecycle operations.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "nxtchain",
    name: "NXTchain",
    tagline: "Privacy-first decentralized cloud and DePIN participation network.",
    role: "Blockchain Developer and Architect",
    period: "Recent Work",
    domains: ["DePIN", "Infrastructure", "Distributed Compute"],
    stack: ["Blockchain Infrastructure", "Node Participation", "Reward Mechanics", "Web3 Platform"],
    problem: "Cloud access and compute ownership are concentrated, making participation and privacy difficult for everyday users.",
    context:
      "NXTchain introduces NXTreme devices and NXTreme Core participation to decentralize compute contribution and reward distribution.",
    constraints: [
      "Participation model needed to be simple for non-technical users.",
      "Architecture had to remain privacy-first while supporting distributed contribution.",
      "System required clear reward pathways tied to compute participation.",
    ],
    architecture: [
      "Designed decentralized cloud participation flows around household and licensed data-center nodes.",
      "Structured reward-aligned compute contribution model to support real-world network scaling.",
      "Aligned platform architecture for accessibility, privacy, and progressive onboarding.",
    ],
    securityScaleCompliance: [
      "Participation and ownership model designed for transparent contribution accounting.",
      "Network approach emphasizes privacy-preserving architecture choices.",
      "Infrastructure framing supports gradual scaling through distributed nodes.",
    ],
    contributions: [
      "Positioned and engineered core blockchain architecture for decentralized cloud participation.",
      "Connected infrastructure narrative to DePIN and real-world compute onboarding.",
      "Supported technical direction across platform components and ecosystem integration.",
    ],
    outcomes: [
      "Established foundation for a decentralized compute ecosystem with practical user participation.",
      "Created a high-credibility DePIN case in the portfolio narrative.",
    ],
    links: [
      { label: "Docs", href: "https://docs.nxtchain.com/" },
      { label: "Website", href: "https://www.nxtchain.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/nxtchain/" },
    ],
    featured: true,
  },
  {
    slug: "raw-essentials",
    name: "Raw Essentials",
    tagline: "Gold-backed trade finance infrastructure on Avalanche Evergreen Subnet.",
    role: "Blockchain Architect",
    period: "Recent Work",
    domains: ["Tokenized Finance", "RWA", "Avalanche"],
    stack: ["Avalanche Evergreen Subnet", "Permissioned Architecture", "KYC Rails", "Auditable Ledger"],
    problem: "Traditional trade finance can take 2-4 weeks, creating liquidity bottlenecks for supply chain operations.",
    context:
      "Built for Dubai/MENA trade corridors, the platform tokenizes physical gold and cash into liquidity pools for faster, auditable approvals.",
    constraints: [
      "Needed strict permissioned participation with KYC verification for every participant.",
      "Had to align with Dubai VARA-oriented regulatory expectations.",
      "System required closed-loop transaction visibility for auditable operation.",
    ],
    architecture: [
      "Designed closed-loop subnet architecture for institutional-grade participant control.",
      "Structured tokenized gold and cash liquidity rails to support B2B trade finance flows.",
      "Implemented decisioning path enabling financing approvals in under 20 minutes.",
    ],
    securityScaleCompliance: [
      "KYC-gated access model across all user classes.",
      "Audit-ready transaction paths for compliance and reporting.",
      "Permissioned design reduces unauthorized access and speculative misuse.",
    ],
    contributions: [
      "Owned architecture framing for tokenized RWA trade finance design.",
      "Mapped regulatory and system constraints into blockchain-first implementation choices.",
      "Shaped enterprise narrative for institutional adoption in Dubai/MENA markets.",
    ],
    outcomes: [
      "Approval cycle framed at under 20 minutes versus multi-week conventional flow.",
      "Established a credible tokenized finance case for regulated markets.",
    ],
    featured: true,
  },
  {
    slug: "calibdex",
    name: "CalibDex",
    tagline: "Concentrated-liquidity DEX protocol engineering.",
    role: "Protocol Engineer",
    period: "Recent Work",
    domains: ["DeFi", "AMM", "Liquidity Management"],
    stack: ["Solidity", "AMM Math", "Liquidity Pools", "Swap Router"],
    problem: "Liquidity providers and traders need capital-efficient swaps with fine-grained price-range control.",
    context: "CalibDex is designed as a concentrated-liquidity DEX with architecture inspired by Uniswap v3-style mechanics.",
    constraints: [
      "Required deterministic and efficient swap execution paths.",
      "Needed precise liquidity management for segmented price ranges.",
      "Architecture had to support robust accounting across pool operations.",
    ],
    architecture: [
      "Implemented concentrated liquidity primitives for capital-efficient pools.",
      "Designed AMM swap and routing workflow for predictable execution behavior.",
      "Built liquidity lifecycle handling for mint, rebalance, and fee capture flows.",
    ],
    securityScaleCompliance: [
      "Focused on safe accounting and edge-case handling in swap pathways.",
      "Applied protocol-level guardrails around liquidity state transitions.",
      "Designed with production DeFi operations in mind.",
    ],
    contributions: [
      "Owned core protocol engineering for concentrated liquidity mechanics.",
      "Shaped DeFi infrastructure direction and smart contract behavior.",
      "Contributed swap architecture and liquidity management strategy.",
    ],
    outcomes: [
      "Delivered a robust DEX architecture narrative aligned to modern DeFi expectations.",
    ],
    featured: true,
  },
  {
    slug: "g8chain",
    name: "G8chain",
    tagline: "Layer-1 infrastructure launch from scratch.",
    role: "Blockchain Infrastructure Engineer / Architect",
    period: "Recent Work",
    domains: ["Mainnet", "Testnet", "Explorer", "Ops"],
    stack: ["Chain Setup", "Explorer", "Faucet", "Miner Node", "Web Platform"],
    problem: "New chain ecosystems fail without complete operational infrastructure and developer access paths.",
    context: "G8chain required end-to-end infra setup including chain environments and ecosystem tooling.",
    constraints: [
      "All core infra needed from zero baseline.",
      "Developer onboarding required dependable explorer and faucet services.",
      "Mainnet and testnet operations needed clear operational consistency.",
    ],
    architecture: [
      "Set up explorer, testnet, mainnet, faucet, and miner node layers.",
      "Established infrastructure patterns for reliable chain operations.",
      "Integrated blockchain website experience with infra and ecosystem visibility.",
    ],
    securityScaleCompliance: [
      "Focused on reliability, observability, and controlled operational rollouts.",
      "Structured infra surfaces to reduce deployment and runtime risk.",
      "Created an extensible base for ecosystem growth.",
    ],
    contributions: [
      "Owned infrastructure architecture and deployment sequencing.",
      "Delivered the technical backbone for public network operation.",
      "Built chain-adjacent tooling required for real usage.",
    ],
    outcomes: [
      "Provisioned a complete L1 operational stack from scratch.",
    ],
    links: [
      { label: "Mainnet", href: "https://mainnet.g8chain.com/" },
      { label: "Testnet", href: "https://testnet.g8chain.com/" },
      { label: "Website", href: "https://g8chain.com/" },
    ],
    featured: true,
  },
  {
    slug: "mo-token",
    name: "MO Token",
    tagline: "Business-rule-driven enterprise token contract.",
    role: "Smart Contract Architect",
    period: "Recent Work",
    domains: ["Token Design", "Access Control", "Enterprise"],
    stack: ["ERC-20/SPL", "Role-based Access", "Mint/Burn", "Transfer Controls"],
    problem: "Enterprise token systems need business-enforced controls beyond standard fungible token behavior.",
    context: "MO Token introduces fixed initial price framing, authorized mint/burn, optional non-transferability, and admin role controls.",
    constraints: [
      "Token needed governance-safe admin pathways.",
      "Spec had to support optional anti-speculation mode.",
      "Business logic required deterministic role-based execution.",
    ],
    architecture: [
      "Implemented role-based controls for privileged actions.",
      "Designed mint/burn authorization logic for controlled supply handling.",
      "Added optional non-transferability mode to align token behavior with business policy.",
    ],
    securityScaleCompliance: [
      "Role boundaries designed to protect administrative controls.",
      "Business-rule constraints encoded directly into token behavior.",
      "Architecture suitable for enterprise policy-led deployments.",
    ],
    contributions: [
      "Translated business requirements into contract-level constraints.",
      "Designed token architecture with explicit governance and risk controls.",
    ],
    outcomes: [
      "Produced an enterprise token template aligned with controlled market participation.",
    ],
    featured: true,
  },
  {
    slug: "pluton-bot",
    name: "Pluton Bot",
    tagline: "AI-assisted low-latency Solana memecoin trading automation.",
    role: "On-Chain Automation Architect",
    period: "Recent Work",
    domains: ["Solana", "Automation", "Risk Detection", "AI"],
    stack: ["Solana", "Signal Processing", "Honeypot Detection", "Dynamic Execution"],
    problem: "Memecoin markets move at extreme speed and are exposed to rug pulls, honeypots, and manipulated pumps.",
    context: "Pluton Bot focuses on real-time detection, classification, and execution to automate defensible on-chain trading behavior.",
    constraints: [
      "Execution latency needed to stay competitive with high-frequency market conditions.",
      "Risk screening had to run pre-trade with minimal delay.",
      "Decisioning had to balance aggressiveness and safety.",
    ],
    architecture: [
      "Built signal pipeline for new token detection and pump classification.",
      "Integrated honeypot and rug-pull checks into execution gating.",
      "Implemented dynamic buy/sell logic guided by AI-assisted decision heuristics.",
    ],
    securityScaleCompliance: [
      "Pre-trade risk controls reduce exposure to known exploit patterns.",
      "Execution architecture designed for low-latency high-volume conditions.",
      "System narrative emphasizes pragmatic risk mitigation.",
    ],
    contributions: [
      "Owned architecture direction for bot logic and risk-aware execution.",
      "Integrated AI-assisted logic with real-time on-chain automation flow.",
    ],
    outcomes: [
      "Delivered high-frequency bot architecture blueprint for Solana ecosystem trading.",
    ],
    featured: true,
  },
  {
    slug: "jump-trade",
    name: "Jump.Trade",
    tagline: "High-scale NFT marketplace systems and minting infrastructure.",
    role: "Senior Blockchain Engineer",
    period: "Feb 2022 - Jul 2023",
    domains: ["NFT", "Marketplace", "Scale"],
    stack: ["Solidity", "Nest.js", "ethers.js", "MongoDB", "Docker"],
    problem: "Large NFT events require reliable minting throughput and resilient marketplace integrations.",
    context: "Contributed to one of Asia's largest NFT marketplace environments.",
    constraints: [
      "High-demand mint events with strict reliability needs.",
      "Marketplace had to maintain smooth user experience under load.",
    ],
    architecture: [
      "Delivered integration scripts and minting engine logic for high-throughput release operations.",
      "Improved platform-level contract interaction reliability.",
    ],
    securityScaleCompliance: [
      "Production-hardening focus for load-sensitive operations.",
      "Defensive reliability choices around event-time execution.",
    ],
    contributions: [
      "Implemented scalable minting architecture handling up to 40,000 NFT mints.",
    ],
    outcomes: [
      "Improved operational confidence for large-scale NFT rollouts.",
    ],
  },
  {
    slug: "kgen",
    name: "KGen",
    tagline: "DAO-powered gamer identity and reward systems.",
    role: "Senior Blockchain Engineer",
    period: "Aug 2023 - Dec 2023",
    domains: ["DAO", "Gaming", "Microservices"],
    stack: ["Solidity", "Node.js", "Nest.js", "AWS", "Microservices"],
    problem: "Web3 gamer ecosystems need provable identity, reward pipelines, and wallet abstraction at scale.",
    context: "Part of a multi-chain gaming framework with Proof of Gamer (P.O.G.) positioning.",
    constraints: [
      "Reward distribution needed automation and scale.",
      "Cross-service interactions required resilient service design.",
    ],
    architecture: [
      "Built contracts for tournaments, rewards, and tokenized interactions.",
      "Designed microservice-driven reward automation architecture.",
    ],
    securityScaleCompliance: [
      "Scalable services and contract boundaries for reliable operation.",
      "Account abstraction wallets for improved user onboarding.",
    ],
    contributions: [
      "Contributed to shadow wallet architecture and tournament reward contract design.",
    ],
    outcomes: [
      "Delivered scalable gamer onboarding and reward execution layers.",
    ],
  },
  {
    slug: "karma-league",
    name: "KarmaLeague",
    tagline: "Layer-1 decentralized social graph with tokenized engagement.",
    role: "Senior Blockchain Engineer",
    period: "Aug 2023 - Dec 2023",
    domains: ["SocialFi", "Layer1", "DeFi"],
    stack: ["Solidity", "Node.js", "Next.js", "Loopback", "Wallet Integration"],
    problem: "Conventional social systems lack user-owned engagement and transparent reward mechanics.",
    context: "Built decentralized social interactions with tokenized incentives and cross-experience integration.",
    constraints: [
      "Needed real-time social feature support with on-chain provenance.",
      "Required balanced point generation and reward logic.",
    ],
    architecture: [
      "Implemented on-chain feed storage and interaction contract flows.",
      "Created quality-and-engagement point engine mapped to ERC-20 rewards.",
      "Added DeFi swap pathways for ETH/USDT/MATIC/USDC-related liquidity movement.",
    ],
    securityScaleCompliance: [
      "Transparent engagement ledger through contract-backed feed artifacts.",
      "Token and swap flows designed for flexible ecosystem participation.",
    ],
    contributions: [
      "Owned core social contract patterns and reward architecture.",
    ],
    outcomes: [
      "Delivered decentralized social utility with integrated tokenized incentives.",
    ],
  },
  {
    slug: "production-defi-contracts",
    name: "Production DeFi Contracts",
    tagline: "Long-running DeFi deployment practice across ecosystems.",
    role: "Blockchain Engineer",
    period: "Oct 2020 - Present",
    domains: ["DeFi", "Lending", "Swaps", "Flash Loans"],
    stack: ["Solidity", "ethers.js", "Fuel", "Ethereum"],
    problem: "DeFi products demand secure and gas-efficient contract systems that can scale in production.",
    context: "Built and deployed contracts integrating Uniswap, PancakeSwap, Aave-style flows, and custom lending/borrowing logic.",
    constraints: [
      "Needed gas optimization without sacrificing correctness.",
      "Required broad protocol interoperability.",
    ],
    architecture: [
      "Implemented staking, flash loan, and token swap systems.",
      "Engineered custom lending and borrowing workflows.",
      "Optimized contract execution for cost and throughput.",
    ],
    securityScaleCompliance: [
      "Gas-optimized and reliability-focused contract design.",
      "Production deployment mindset across multiple ecosystems.",
    ],
    contributions: [
      "Sustained delivery of production-grade DeFi systems since early career stage.",
    ],
    outcomes: [
      "Created a strong operational foundation in protocol-level engineering.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const systemsMap = [
  { name: "EVM", detail: "Solidity architecture, gas strategy, DeFi primitives" },
  { name: "Solana", detail: "Low-latency automation and token intelligence" },
  { name: "Avalanche", detail: "Evergreen subnet design for permissioned finance" },
  { name: "RWA", detail: "Gold-backed liquidity and auditable finance rails" },
  { name: "DePIN", detail: "Distributed compute ownership and participation" },
  { name: "Infra", detail: "Mainnet/testnet, explorer, faucet, validator operations" },
  { name: "DeFi", detail: "AMM, concentrated liquidity, swaps, lending execution" },
  { name: "AI Automation", detail: "Signal pipelines, risk detection, adaptive execution" },
  { name: "Security Mindset", detail: "Role controls, transaction integrity, failure awareness" },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Solidity", "Rust", "TypeScript", "JavaScript", "Sway", "PyTeal", "sCrypt"],
  },
  {
    title: "Frontend + Product",
    items: ["Next.js", "React", "Tailwind CSS", "Wallet Integration", "Tactical UI delivery"],
  },
  {
    title: "Backend + Services",
    items: ["Node.js", "Nest.js", "Loopback", "Microservice Architecture", "Swagger APIs"],
  },
  {
    title: "Data + Infrastructure",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "AWS", "IPFS"],
  },
  {
    title: "Blockchain Domains",
    items: ["DeFi", "NFT", "RWA", "Tokenomics", "Account Abstraction", "Cross-Ecosystem Research"],
  },
];

export const timelineNarrative = [
  "2020: Began mainnet-focused Solidity engineering with strong R&D grounding.",
  "2021: Expanded to Algorand ecosystem delivery and wallet-linked marketplace architecture.",
  "2022-2023: Scaled NFT systems for Jump.Trade with high-throughput minting infrastructure.",
  "2023-2024: Built production DeFi rails at RyukLabs (disbursal, shadow wallets, gasless transfers).",
  "2024-2025: Led architecture direction for advanced blockchain product systems at Chainscript Labs.",
  "2025-Present: Leading blockchain development and architecture initiatives at Calibraint.",
  "Current Arc: Advancing into DePIN, tokenized trade finance, L1 infra deployment, and AI-assisted on-chain automation.",
];
