/**
 * Single source of truth for the site's identity and page registry.
 *
 * Everything that needs to know "which pages exist and in what order" reads
 * from here: the header wordmark, the foldable sidebar, the footer, the
 * prev/next pager, the search seed and src/pages/sitemap.xml.ts.
 *
 * Adding a page is one entry below plus one file under src/pages/.
 */

export const SITE = {
  name: 'SC-500 Study Notes',
  shortName: 'Study Notes',
  exam: 'SC-500',
  examTitle: 'Implementing End-to-End Security Controls for Cloud and AI Workloads',
  certification: 'Microsoft Certified: Cloud and AI Security Engineer Associate',
  /** The skills-measured revision these notes are written against. */
  skillsMeasured: 'April 26, 2026',
  origin: 'https://marcogrimaldi29.com',
  repo: 'https://github.com/marcogrimaldi29/sc-500-study-notes',
  studyGuide: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500',
  certPage: 'https://learn.microsoft.com/en-us/credentials/certifications/cloud-and-ai-security-engineer-associate/',
  course: 'https://learn.microsoft.com/en-us/training/courses/sc-500t00',
  author: {
    name: 'Marco Grimaldi',
    role: 'Cloud Solution Architect',
    site: 'https://marcogrimaldi29.com/',
    github: 'https://github.com/marcogrimaldi29',
    linkedin: 'https://www.linkedin.com/in/marco-grimaldi29/',
  },
} as const;

export type PageGroup = 'start' | 'skills' | 'extras';

export interface NotePage {
  /** URL segment; '' is the home page. */
  slug: string;
  /** Full label, used in the footer, the pager and search results. */
  label: string;
  /**
   * Condensed label for the sidebar. Carries no skill number: the rail badge
   * beside it already shows that, so repeating it reads as a duplicate.
   */
  navLabel: string;
  /** Compact marker shown beside the label, and alone in the collapsed rail. */
  rail: string;
  /** Eyebrow shown on cards and page headers. */
  badge: string;
  /** CSS custom property holding this page's accent colour. */
  accent: string;
  /** Card / meta description. */
  blurb: string;
  group: PageGroup;
  /** Exam weighting, for the skill pages only. */
  weight?: string;
  /** Mid-point of the weighting range, used to size the progress bars. */
  weightPct?: number;
}

export const PAGES: NotePage[] = [
  {
    slug: '',
    label: 'Home',
    navLabel: 'Home',
    rail: '⌂',
    badge: 'Overview',
    accent: 'var(--s0)',
    blurb: 'Exam overview, skills weighting and how to use these notes.',
    group: 'start',
  },
  {
    slug: 'security-foundations',
    label: 'Security Foundations',
    navLabel: 'Foundations',
    rail: '◆',
    badge: 'Foundations · Prerequisite',
    accent: 'var(--s0)',
    blurb:
      'The mental model everything else hangs off: the Zero Trust pillars, the Defender / Entra / Purview / Sentinel product map, the two RBAC systems, the management-group hierarchy and the renames that trip candidates up.',
    group: 'start',
  },
  {
    slug: 'skill-1-identity-access-governance',
    label: 'Manage identity, access, and governance',
    navLabel: 'Identity & Governance',
    rail: '1',
    badge: 'Skill 1 · 20–25%',
    accent: 'var(--s1)',
    blurb:
      'Entra ID hardening with PIM, Conditional Access, MFA and passwordless; app registrations, consent and managed identities; Key Vault deployment, access models and firewalls; and governance through Azure Policy, RBAC, locks, Backup and infrastructure as code.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'skill-2-storage-databases-networking',
    label: 'Secure storage, databases, and networking',
    navLabel: 'Storage, Data & Network',
    rail: '2',
    badge: 'Skill 2 · 25–30%',
    accent: 'var(--s2)',
    blurb:
      'The heaviest domain: storage account hardening, SAS and access policies, Azure SQL platform security and auditing, Defender for Storage and Databases, and the full network stack — NSGs, Virtual Network Manager, Azure Firewall, Private Link, VPN and Entra Private Access.',
    group: 'skills',
    weight: '25–30%',
    weightPct: 27.5,
  },
  {
    slug: 'skill-3-secure-compute',
    label: 'Secure compute',
    navLabel: 'Secure Compute',
    rail: '3',
    badge: 'Skill 3 · 20–25%',
    accent: 'var(--s3)',
    blurb:
      'Securing AI workloads and agents, servers and VMs — disk encryption, Bastion, JIT, Arc, Defender for Servers and trusted launch — plus the application platform: containers, AKS, ACR, Functions, Logic Apps, App Service, WAF and API Management.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'skill-4-security-posture-monitoring',
    label: 'Manage and monitor security posture',
    navLabel: 'Posture & Monitoring',
    rail: '4',
    badge: 'Skill 4 · 20–25%',
    accent: 'var(--s4)',
    blurb:
      'Defender CSPM, regulatory compliance and multicloud connectors; then Microsoft Sentinel end to end — workspaces, roles, content hub, data connectors, DCRs, custom tables, retention tiers, automation rules and playbooks — and Microsoft Security Copilot.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'ai-agent-security',
    label: 'AI & agent security deep dive',
    navLabel: 'AI & Agents',
    rail: '✦',
    badge: 'Deep dive · Cross-cutting',
    accent: 'var(--s5)',
    blurb:
      'The content that makes SC-500 more than a rebadged AZ-500, gathered in one place: oversharing and Purview DSPM for AI, Copilot Studio runtime protection, Entra Agent ID and blast radius, Foundry guardrails, Defender for AI Services and the AI Gateway in API Management.',
    group: 'extras',
  },
  {
    slug: 'exam-tips',
    label: 'Exam tips & caveats',
    navLabel: 'Exam Tips',
    rail: '★',
    badge: 'Final review',
    accent: 'var(--s6)',
    blurb:
      'Key numbers, decision trees, the naming traps that cost marks, a scenario-to-answer lookup table and a pre-exam checklist for the night before.',
    group: 'extras',
  },
];

export const GROUP_LABELS: Record<PageGroup, string> = {
  start: 'Start here',
  skills: 'Skills measured',
  extras: 'Final review',
};

/** Pages that carry an exam weighting, in outline order. */
export const SKILL_PAGES = PAGES.filter((p) => p.group === 'skills');

export function pageBySlug(slug: string): NotePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Previous / next page for the pager, skipping the home page. */
export function neighbours(slug: string) {
  const ordered = PAGES.filter((p) => p.slug !== '');
  const i = ordered.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? ordered[i - 1] : undefined, next: i >= 0 ? ordered[i + 1] : undefined };
}
