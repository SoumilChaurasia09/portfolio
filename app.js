/* ==========================================================================
   Soumil Chaurasia - Interactive Portfolio Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAutoTyping();
    initNav();
    initMatrixRain();
    initProjectFilters();
    initProjectModals();
    initCopyButtons();
});

/* --------------------------------------------------------------------------
   1. Theme Toggler (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('soumil_theme') || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('soumil_theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, icon) {
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

/* --------------------------------------------------------------------------
   2. Auto Typing Effect
   -------------------------------------------------------------------------- */
function initAutoTyping() {
    const target = document.getElementById('typed-text');
    if (!target) return;

    const phrases = [
        "Cyber Security & Forensics Specialist",
        "AWS Certified Solutions Architect",
        "Network Analyzer & Packet Engineer",
        "Data Analytics & Python Developer"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIdx];

        if (isDeleting) {
            target.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            target.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentPhrase.length) {
            speed = 2200; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400; // Pause before new phrase
        }

        setTimeout(type, speed);
    }

    type();
}

/* --------------------------------------------------------------------------
   3. Navbar Scroll & Mobile Menu Toggle
   -------------------------------------------------------------------------- */
function initNav() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        });
    });

    // Active Section Highlight on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   4. Cyber Matrix Rain Canvas Animation
   -------------------------------------------------------------------------- */
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01ABCDEFGHJKLMNPQRSTUVWXYZ$#@&%*+<>~';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(11, 15, 25, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00f2fe';
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 40);
}

/* --------------------------------------------------------------------------
   5. Project Category Filter
   -------------------------------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   6. Project Detail Modals
   -------------------------------------------------------------------------- */
const projectData = {
    packetx: {
        title: "PacketX – Network Packet Analyzer & Sniffer",
        link: "https://tinyurl.com/soumil1",
        tags: ["Python", "Scapy", "Tkinter", "Pandas", "FPDF"],
        image: "assets/packetx.png",
        overview: "PacketX is a high-performance network packet sniffer and traffic analyzer developed using Python and Scapy. Designed for live network monitoring, protocol filtering, and forensic packet inspection.",
        features: [
            "Real-time Packet Capture for TCP, UDP, ICMP, and ARP protocols with packet payload decoding.",
            "Multi-threaded capture engine integrated with an interactive Tkinter GUI interface.",
            "Protocol filtering controls and bandwidth traffic statistics visualization.",
            "Comprehensive reporting module exporting network logs to TXT, CSV, XML, and PDF formats."
        ]
    },
    vulnguard: {
        title: "VulnGuard-Web-Scanner – Automated Vulnerability Audit Tool",
        link: "https://tinyurl.com/Soumil2",
        tags: ["Python", "Flask", "BeautifulSoup", "Requests", "OWASP Top 10"],
        image: "assets/vulnguard.png",
        overview: "VulnGuard is an end-to-end web security auditor engineered to identify OWASP Top 10 vulnerabilities across target web endpoints.",
        features: [
            "Automated crawler and URL parameter scanner detecting SQL Injection (SQLi), XSS, CSRF, and information leakage.",
            "Multi-threaded execution engine with real-time audit logging.",
            "Dual-interface availability: Modern Flask Web Application Dashboard and Tkinter Desktop GUI.",
            "HTTP Header analysis & technology version audit generating automated ReportLab PDF vulnerability reports."
        ]
    },
    analytics: {
        title: "E-Commerce & Customer Intelligence Analytics Suite",
        link: "https://tinyurl.com/Soumil4",
        tags: ["Power BI", "SQL", "DAX", "Star Schema", "Python"],
        image: "assets/analytics.png",
        overview: "Enterprise customer retention and revenue optimization intelligence dashboard built on a 5,700+ record Star Schema analytical database.",
        features: [
            "Executive Overview dashboard with dynamic DAX Time-Intelligence metrics (YoY Growth, AOV, Profit Margins).",
            "RFM (Recency, Frequency, Monetary) behavioral model segmenting 600 customers into Champions, Loyal, and At-Risk tiers.",
            "Isolated $242K+ in at-risk revenue for targeted re-engagement campaigns.",
            "M0–M12 customer cohort retention heatmap revealing key stickiness stabilization after Month 3."
        ]
    }
};

function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');
    const closeBtn = document.getElementById('close-project-modal');
    const openBtns = document.querySelectorAll('.open-modal-btn');

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-project');
            const data = projectData[key];
            if (!data) return;

            modalBody.innerHTML = `
                <div class="modal-project-header">
                    <img src="${data.image}" alt="${data.title}" style="width:100%; height:240px; object-fit:cover; border-radius:12px; margin-bottom:1.25rem;">
                    <h2 style="font-size:1.6rem; color:var(--text-primary); margin-bottom:0.5rem;">${data.title}</h2>
                    <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1rem;">
                        ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <p style="color:var(--text-secondary); margin-bottom:1.25rem; font-size:1rem; line-height:1.6;">${data.overview}</p>
                    
                    <h3 style="font-size:1.2rem; color:var(--accent-cyan); margin-bottom:0.75rem;">Key Architecture & Features</h3>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.5rem;">
                        ${data.features.map(f => `<li style="display:flex; gap:0.6rem; color:var(--text-primary); font-size:0.95rem;"><i class="fa-solid fa-circle-check" style="color:var(--accent-emerald); margin-top:4px;"></i> <span>${f}</span></li>`).join('')}
                    </ul>

                    <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-up-right-from-square"></i> Visit Project Link (${data.link})
                    </a>
                </div>
            `;

            modal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

/* --------------------------------------------------------------------------
   7. Utility Copy Buttons & Form Handling
   -------------------------------------------------------------------------- */
function initCopyButtons() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('soumilchaurasia30@gmail.com').then(() => {
                const icon = copyEmailBtn.querySelector('i');
                icon.className = 'fa-solid fa-check';
                icon.style.color = '#10b981';
                setTimeout(() => {
                    icon.className = 'fa-regular fa-copy';
                    icon.style.color = '';
                }, 2000);
            });
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you ${name}! Your message has been sent. Soumil will get back to you shortly.`);
    document.getElementById('contact-form').reset();
}
