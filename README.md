# SC-500 Study Notes

Exam-focused study notes for **Microsoft Exam SC-500: Implementing End-to-End Security Controls for Cloud and AI
Workloads**, the exam behind the *Microsoft Certified: Cloud and AI Security Engineer Associate* certification.

**📖 Read them at [marcogrimaldi29.com/sc-500-study-notes](https://marcogrimaldi29.com/sc-500-study-notes/)**

⭐ If they help, **star the repo** — it is how other SC-500 candidates find them.

Written against the **skills measured as of April 26, 2026**.

---

## 📚 What's Inside

| Page | Covers | Exam weight |
| --- | --- | --- |
| [Security Foundations](https://marcogrimaldi29.com/sc-500-study-notes/security-foundations/) | Zero Trust, the Microsoft security product map, Azure RBAC versus Microsoft Entra roles, the scope hierarchy, shared responsibility, the Microsoft cloud security benchmark, control plane versus data plane — and the renames you will meet both sides of | Prerequisite |
| [Skill 1 · Identity, access and governance](https://marcogrimaldi29.com/sc-500-study-notes/skill-1-identity-access-governance/) | PIM, Conditional Access, MFA and passwordless, app registrations and consent, managed identities and workload identity federation, Azure Key Vault, Azure Policy, RBAC and custom roles, resource locks, Azure Backup security, infrastructure as code | 20–25% |
| [Skill 2 · Storage, databases and networking](https://marcogrimaldi29.com/sc-500-study-notes/skill-2-storage-databases-networking/) | Storage hardening and SAS, Defender for Storage, Azure SQL platform security and auditing, Defender for Databases, NSGs and ASGs, Azure Virtual Network Manager, Azure Firewall, Virtual WAN, VPN, Entra Private Access, Private Link, Network Watcher | 25–30% |
| [Skill 3 · Secure compute](https://marcogrimaldi29.com/sc-500-study-notes/skill-3-secure-compute/) | Security for AI, disk encryption, Azure Bastion, just-in-time VM access, Azure Arc, Defender for Servers, trusted launch, Machine Configuration, Defender for Containers, AKS, ACR, Functions, Logic Apps, App Service, WAF, API Management | 20–25% |
| [Skill 4 · Posture and monitoring](https://marcogrimaldi29.com/sc-500-study-notes/skill-4-security-posture-monitoring/) | Defender CSPM, regulatory compliance, workload protection plans, multicloud connectors, Defender Vulnerability Management, Defender EASM, Microsoft Sentinel end to end, Purview Audit, Microsoft Security Copilot | 20–25% |
| [AI & agent security deep dive](https://marcogrimaldi29.com/sc-500-study-notes/ai-agent-security/) | The cross-cutting AI material in one narrative: SharePoint oversharing and Restricted Content Discovery, Purview DSPM, Foundry guardrails and Prompt Shields, the AI Gateway, Entra Agent ID and Conditional Access for agents, Defender real-time protection | — |
| [Exam tips & caveats](https://marcogrimaldi29.com/sc-500-study-notes/exam-tips/) | Key numbers, decision trees, constantly confused boundaries, the traps that cost marks, a scenario-to-answer lookup table and a two-week plan | Final review |

Every page carries Mermaid diagrams, decision tables, configuration samples and exam-caveat callouts.

## ✨ Features

- **Light / dark mode** with a switcher drawn as the site's own sunrise brand mark, which opens into a full sun in light
  mode — floating at the bottom left of every page, so the header keeps room for the full wordmark on a phone
- **Two-rail navigation** — a foldable left sidebar for moving between pages (collapsing to an icon rail, then to a
  drawer on small screens), and a right-hand **On this page** outline with a marker that slides between sections as you
  scroll. Below the aside breakpoint the outline folds into a collapsible card between the page title and the body
- **Site-wide search** opened with <kbd>Ctrl/Cmd+K</kbd>, indexing the rendered content of every page — prose, tables,
  callouts, code samples and diagram labels — and deep-linking to the matching section
- **Mermaid diagrams** that re-render with the active theme
- **Build-time syntax highlighting** with Shiki — no highlighter ships to the browser
- Floating **Home** and **Back to top** buttons that appear on scroll, bottom right
- Accessible by design: skip link, visible focus, semantic landmarks, reduced-motion support, print stylesheet
- Cookieless analytics via [Umami](https://umami.is/)

## 🗂️ Project Structure

```
src/
├── components/     Header, Footer, Sidebar, OnThisPage, Search, ThemeToggle, Mermaid, CodeBlock, Callout…
├── data/site.ts    Single source of truth: site identity + page registry
├── layouts/        BaseLayout (head, header, footer) and NoteLayout (sidebar + content)
├── lib/urls.ts     Base-path helpers for links, assets and canonical URLs
├── pages/          One directory per note page
└── styles/         global.css — the whole design system
public/images/      Brand mark and profile image
```

Navigation, sidebar, footer, pager and search all read from the page registry in
[`src/data/site.ts`](src/data/site.ts), so adding a page is one entry plus one file.

## 🧰 Built With

[Astro](https://astro.build/) · [Mermaid](https://mermaid.js.org/) · [Shiki](https://shiki.style/) ·
[Umami](https://umami.is/) — all open source.

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code)** in this case — working from the official Microsoft Learn documentation, the SC-500 study guide and the SC-500T00-A course syllabus. Every page was reviewed before publication, but AI-assisted writing can still get details wrong, and Microsoft's security portfolio is renamed and re-scoped constantly — the AI security surface especially. Treat these notes as a study companion and verify anything decision-critical against the [official documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/).

## 🤝 Contributing

Microsoft security tooling changes fast and features get renamed often, so corrections are genuinely useful. Open an [issue](https://github.com/marcogrimaldi29/sc-500-study-notes/issues) or a pull request.

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by Microsoft. Always verify against the [official SC-500 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500)
and the [Microsoft security documentation](https://learn.microsoft.com/en-us/security/) before relying on any detail here.

## 👋 Let's Connect

**Marco Grimaldi** — Cloud Solution Architect

- [![marcogrimaldi29.com](https://img.shields.io/badge/marcogrimaldi29.com-0b1422?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjUiIHkxPSIxNiIgeDI9IjI3IiB5Mj0iMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiOTUwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzJlYzVjNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDQ5M2Y4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM%2BCiAgPGcgc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2Utd2lkdGg9IjEuOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjEwLjUiIHgyPSIxNiIgeTI9IjcuNSIgLz4KICAgIDxsaW5lIHgxPSIxMC4yIiB5MT0iMTIuNiIgeDI9IjguNCIgeTI9IjEwLjgiIC8%2BCiAgICA8bGluZSB4MT0iMjEuOCIgeTE9IjEyLjYiIHgyPSIyMy42IiB5Mj0iMTAuOCIgLz4KICA8L2c%2BCiAgPHBhdGggZD0iTTguNSAyMCBhNy41IDcuNSAwIDAgMSAxNSAwIHoiIGZpbGw9InVybCgjZykiIC8%2BCiAgPGxpbmUgeDE9IjQuNSIgeTE9IjIwIiB4Mj0iMjcuNSIgeTI9IjIwIiBzdHJva2U9IiMyZWM1YzUiIHN0cm9rZS13aWR0aD0iMS45IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8%2BCjwvc3ZnPgo%3D&logoColor=white)](https://marcogrimaldi29.com/) — My central hub for study notes, certification reviews, and other resources
- [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/marcogrimaldi29) — You're already here; feel free to explore, star, or fork anything useful
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-grimaldi29/) — Let's connect, collaborate, or just say hello
