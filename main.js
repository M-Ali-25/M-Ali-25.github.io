const posts = [
  {
    title: "From MDCAT Dreams to Engineering Reality",
    href: "posts/mdcat-dreams-to-engineering-reality.html",
    dateLabel: "April 4, 2026",
    readTime: "8 min read",
    excerpt:
      "A reflective post on shifting from a medical ambition to a serious, intentional path in computer engineering after a narrow MDCAT setback.",
    tags: ["Academic Reflection", "Resilience", "Engineering"],
    cover: "assets/illustrations/journal-cover.svg",
  },
];

function resolvePath(path) {
  const base = document.body.dataset.base || ".";
  return base === "." ? path : `${base}/${path}`;
}

function renderPosts() {
  const containers = document.querySelectorAll("[data-post-list]");

  containers.forEach((container) => {
    const limit = Number(container.dataset.postLimit || posts.length);
    const selected = posts.slice(0, limit);

    container.innerHTML = selected
      .map(
        (post) => `
          <article class="post-card">
            <a class="post-card-image" href="${resolvePath(post.href)}" aria-label="Read ${post.title}">
              <img src="${resolvePath(post.cover)}" alt="Cover image for ${post.title}" />
            </a>
            <div class="post-card-body">
              <div class="post-card-meta">
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
      )
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
