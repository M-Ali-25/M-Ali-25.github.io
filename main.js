const posts = [
  {
    title: "Walking into Programming Fundamentals with Zero Background",
    href: "/posts/walking-into-programming-fundamentals-with-zero-background/",
    label: "Week 03 Reflection",
    dateLabel: "April 4, 2026",
    readTime: "7 min read",
    excerpt:
      "A reflection on entering Programming Fundamentals without prior coding experience and learning Python, logic, and core concepts from scratch.",
    highlights: [
      "Starting Python without any prior coding experience",
      "Facing confusion around variables, loops, and logic",
      "Learning the basics under pressure while others were already ahead",
    ],
    tags: ["Programming Fundamentals", "Python", "Learning Journey"],
    cover: "/assets/illustrations/programming-zero-background.svg",
    coverAlt: "Illustration of a student learning programming fundamentals from scratch with Python concepts on screen.",
  },
  {
    title: "A Late Start: When First Semester Was Already Half Gone",
    href: "/posts/a-late-start-when-first-semester-was-already-half-gone/",
    label: "Week 02 Reflection",
    dateLabel: "March 28, 2026",
    readTime: "6 min read",
    excerpt:
      "A reflection on entering first semester late, trying to understand programming near mid exams, and dealing with the pressure of catching up quickly.",
    highlights: [
      "Reaching programming concepts seriously only near mid exams",
      "Seeing classmates already comfortable with the semester pace",
      "Trying to recover lost ground in very limited time",
    ],
    tags: ["First Semester", "Adjustment", "Academic Pressure"],
    cover: "/assets/illustrations/late-start-semester.svg",
    coverAlt: "Illustration of a delayed semester start with a half-complete timeline, study notes, and a clock.",
  },
  {
    title: "From MDCAT Dreams to Engineering Reality",
    href: "/posts/mdcat-dreams-to-engineering-reality/",
    label: "Week 01 Reflection",
    dateLabel: "March 21, 2026",
    readTime: "8 min read",
    excerpt:
      "A reflective post on shifting from a medical ambition to a serious, intentional path in computer engineering after a narrow MDCAT setback.",
    highlights: [
      "Medical ambition shaped by pressure and expectation",
      "A narrow miss that forced a reset",
      "Engineering chosen as a serious path forward",
    ],
    tags: ["Academic Reflection", "Resilience", "Engineering"],
    cover: "/assets/illustrations/journal-cover.svg",
    coverAlt: "Illustration showing a student shifting from medical goals toward an engineering future.",
  },
];

function resolvePath(path) {
  if (path.startsWith("/")) return path;
  const base = document.body.dataset.base || ".";
  return base === "." ? path : `${base}/${path}`;
}

function renderPosts() {
  const containers = document.querySelectorAll("[data-post-list]");

  containers.forEach((container) => {
    const limit = Number(container.dataset.postLimit || posts.length);
    const layout = container.dataset.postLayout || "grid";
    const selected = posts.slice(0, limit);

    container.innerHTML = selected
      .map((post) => {
        const highlights = (post.highlights || [])
          .map((item) => `<li>${item}</li>`)
          .join("");

        if (layout === "list") {
          return `
          <article class="blog-list-entry" data-reveal>
            <a class="blog-list-image" href="${resolvePath(post.href)}" aria-label="Read ${post.title}">
              <img src="${resolvePath(post.cover)}" alt="${post.coverAlt || `Cover image for ${post.title}`}" />
            </a>
            <div class="blog-list-body">
              <div class="blog-list-topline">
                <span class="blog-list-label">${post.label || "Journal Entry"}</span>
                <span>${post.dateLabel}</span>
                <span>${post.readTime}</span>
              </div>
              <h2><a href="${resolvePath(post.href)}">${post.title}</a></h2>
              <p>${post.excerpt}</p>
              ${
                highlights
                  ? `<ul class="blog-list-points">${highlights}</ul>`
                  : ""
              }
              <div class="post-card-tags">
                ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
              <a class="post-card-link" href="${resolvePath(post.href)}">Read full article <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>
        `;
        }

        return `
          <article class="post-card">
            <a class="post-card-image" href="${resolvePath(post.href)}" aria-label="Read ${post.title}">
              <img src="${resolvePath(post.cover)}" alt="${post.coverAlt || `Cover image for ${post.title}`}" />
            </a>
            <div class="post-card-body">
              <div class="post-card-meta">
                <span>${post.label || "Journal Entry"}</span>
                <span>${post.dateLabel}</span>
                <span>${post.readTime}</span>
              </div>
              <h3><a href="${resolvePath(post.href)}">${post.title}</a></h3>
              <p>${post.excerpt}</p>
              <div class="post-card-tags">
                ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
              <a class="post-card-link" href="${resolvePath(post.href)}">Read article <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>
        `
      })
      .join("");
  });

  const postCount = document.querySelector("[data-post-count]");
  if (postCount) {
    postCount.textContent = String(posts.length);
  }

  const latestPostDate = document.querySelector("[data-latest-post-date]");
  if (latestPostDate && posts[0]) {
    latestPostDate.textContent = posts[0].dateLabel;
  }
}

function renderTagCloud() {
  const cloud = document.querySelector("[data-tag-cloud]");
  if (!cloud) return;

  const tags = [...new Set(posts.flatMap((post) => post.tags))];
  cloud.innerHTML = tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav-links]");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setActiveNav() {
  const links = document.querySelectorAll(".site-nav a");
  if (!links.length) return;

  const forcedKey = document.body.dataset.navCurrent;
  if (forcedKey) {
    const match = document.querySelector(`.site-nav a[data-nav-key="${forcedKey}"]`);
    if (match) {
      match.classList.add("is-active");
      return;
    }
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const normalized = href.split("#")[0] || "index.html";

    if (normalized === currentPath || (currentPath === "" && normalized === "index.html")) {
      link.classList.add("is-active");
    }
  });
}

function setupReadingProgress() {
  const progressBar = document.querySelector("[data-reading-progress]");
  if (!progressBar) return;

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const width = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressBar.style.width = `${Math.min(width, 100)}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function setupArticleToc() {
  const tocLinks = [...document.querySelectorAll(".article-toc a")];
  if (!tocLinks.length) return;

  const sections = tocLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const syncActiveLink = () => {
    const current = sections
      .filter((item) => item.target.getBoundingClientRect().top <= 150)
      .pop();

    tocLinks.forEach((link) => link.classList.remove("is-active"));
    (current || sections[0]).link.classList.add("is-active");
  };

  syncActiveLink();
  window.addEventListener("scroll", syncActiveLink, { passive: true });
}

document.body.classList.add("js-enhanced");
renderPosts();
renderTagCloud();
revealOnScroll();
setCurrentYear();
setupMenu();
setActiveNav();
setupReadingProgress();
setupArticleToc();
