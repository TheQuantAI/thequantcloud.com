# thequantcloud.com

Product website for **[TheQuantCloud](https://thequantcloud.com)** — Quantum Computing as a Service.

## ☁️ Live Site

**[https://thequantcloud.com](https://thequantcloud.com)**

## About

This repository contains the source code for TheQuantCloud's product landing page. TheQuantCloud is the cloud platform by [TheQuantAI](https://thequantai.in) that lets developers write quantum circuits once and run them on any backend — IBM Quantum, IonQ, GPU simulators, and more.

Key features highlighted on the site:
- **QuantSDK** — Framework-agnostic Python SDK with 50+ gates
- **QuantRouter** — Smart backend routing and optimization
- **Multi-Backend** — IBM Quantum, IonQ, Rigetti, Aer, local simulator
- **Documentation** — Full API reference at [docs.thequantcloud.com](https://docs.thequantcloud.com)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (custom properties, responsive grid) |
| **Scripting** | Vanilla JavaScript |
| **Analytics** | Plausible Analytics |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions (`deploy.yml`) |
| **DNS** | GoDaddy (A + CNAME records) |

## Development

```bash
# Clone
git clone https://github.com/TheQuantAI/thequantcloud.com.git
cd thequantcloud.com

# Serve locally
python -m http.server 8000
# Open http://localhost:8000
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions to GitHub Pages with the custom domain `thequantcloud.com`.

## Related Repos

| Repository | Description |
|------------|-------------|
| [quantsdk](https://github.com/TheQuantAI/quantsdk) | Core quantum computing SDK |
| [thequantai.in](https://github.com/TheQuantAI/thequantai.in) | TheQuantAI corporate website |
| [thequantdefense.com](https://github.com/TheQuantAI/thequantdefense.com) | TheQuantDefense coming-soon page |

## License

All rights reserved. © 2025 TheQuantAI.
