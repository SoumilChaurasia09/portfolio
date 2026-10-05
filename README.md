# Soumil Chaurasia - GitHub Pages Portfolio & Personal Homepage

A high-performance, dark-themed developer portfolio and personal website designed for **Soumil Chaurasia** (B.Tech CSE Cyber Security & Digital Forensics @ VIT Bhopal, AWS Certified Solutions Architect).

Built with zero external framework dependencies (HTML5, CSS3, JavaScript) for instant hosting on **GitHub Pages**.

---

## 🌟 Key Features

- **Cyber Security & AWS Aesthetic**: Electric cyan and deep indigo glassmorphism UI styled with CSS custom properties.
- **Dynamic Typing Subtitle**: Auto-rotating role titles (Cyber Security, AWS Architect, Packet Analyzer, Data Engineer).
- **Featured Projects Showcase**:
  - **PacketX**: Network Packet Analyzer & Sniffer (`Python`, `Scapy`, `Tkinter`, `Pandas`)
  - **VulnGuard-Web-Scanner**: Web Vulnerability Auditor (`Python`, `Flask`, `OWASP Top 10`)
  - **E-Commerce Analytics Suite**: Customer Intelligence & Retention Heatmap (`Power BI`, `DAX`, `SQL`)
- **Responsive Layout**: Designed for mobile, tablet, and ultra-wide displays.
- **Dark / Light Mode Toggle**: Instant theme switching with local storage memory.

---

## 🚀 How to Publish to GitHub Pages

### Direct GitHub Repository Setup (Recommended)

1. Create a new public repository on GitHub named:
   - `SoumilChaurasia09.github.io` (for user homepage) OR any repository name like `portfolio`.
2. Initialize git and commit files in this folder:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio for Soumil Chaurasia"
   git branch -M main
   git remote add origin https://github.com/SoumilChaurasia09/SoumilChaurasia09.github.io.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to your GitHub repository -> **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, choose **GitHub Actions** (or `Deploy from a branch` selecting `main` branch / `/root`).
4. Your site will automatically go live at:
   `https://SoumilChaurasia09.github.io/`

---

## 🛠️ Local Development & Testing

To test locally on your computer:
```bash
# Using Python builtin server:
python -m http.server 8086

# Or using Node serve:
npx serve .
```
Then open `http://localhost:8086` in your web browser.

---

© 2026 **Soumil Chaurasia** — All Rights Reserved.
