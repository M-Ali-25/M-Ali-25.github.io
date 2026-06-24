const posts = [
  {
    number: 1,
    title: "From MDCAT Dreams to Engineering Reality",
    href: "/posts/mdcat-dreams-to-engineering-reality/",
    label: "Blog 1",
    dateLabel: "March 21, 2026",
    readTime: "11 min read",
    excerpt: "A first-person reflection on missing MDCAT by a small margin, choosing computer engineering, and learning how one changed dream can still become a serious direction.",
    highlights: ["Engineering Journey","Resilience","Digital Footprint"],
    tags: ["Student Journey","Engineering","Reflection"],
    cover: "/assets/illustrations/journal-cover.svg",
    coverAlt: "Illustration showing a student moving from medical goals toward an engineering future.",
  },
  {
    number: 2,
    title: "A Late Start: When First Semester Was Already Half Gone",
    href: "/posts/a-late-start-when-first-semester-was-already-half-gone/",
    label: "Blog 2",
    dateLabel: "March 28, 2026",
    readTime: "11 min read",
    excerpt: "A reflection on entering the semester late, facing pressure near mid exams, and learning that preparation cannot be delayed without consequences.",
    highlights: ["First Semester","Time Management","Academic Pressure"],
    tags: ["First Semester","Discipline","Reflection"],
    cover: "/assets/illustrations/late-start-semester.svg",
    coverAlt: "Illustration of a delayed semester start with notes, a clock, and a half-complete timeline.",
  },
  {
    number: 3,
    title: "Walking into Programming Fundamentals with Zero Background",
    href: "/posts/walking-into-programming-fundamentals-with-zero-background/",
    label: "Blog 3",
    dateLabel: "April 4, 2026",
    readTime: "11 min read",
    excerpt: "A first-hand account of learning Python, variables, loops, functions, and logic when I had no previous programming background.",
    highlights: ["Python","Logic Building","Beginner Learning"],
    tags: ["Programming Fundamentals","Python","Learning Journey"],
    cover: "/assets/illustrations/programming-zero-background.svg",
    coverAlt: "Illustration of a student learning programming fundamentals from scratch.",
  },
  {
    number: 4,
    title: "Learning Under Pressure: Nights of Self-Study",
    href: "/posts/learning-under-pressure-nights-of-self-study/",
    label: "Blog 4",
    dateLabel: "April 11, 2026",
    readTime: "11 min read",
    excerpt: "A reflection on late-night self-study, missed concepts, lab pressure, and the discipline that slowly helped me recover.",
    highlights: ["Self Study","Discipline","Practice"],
    tags: ["Self Study","Programming Practice","Discipline"],
    cover: "/assets/illustrations/self-study-nights.svg",
    coverAlt: "Illustration of late-night study with code notes and a laptop.",
  },
  {
    number: 5,
    title: "My First Achievement: Machine Learning Project",
    href: "/posts/my-first-achievement-machine-learning-project/",
    label: "Blog 5",
    dateLabel: "April 18, 2026",
    readTime: "11 min read",
    excerpt: "A reflection on my first machine learning achievement and how it changed the way I saw programming, data, and real-world problem solving.",
    highlights: ["Machine Learning","Python Project","Achievement"],
    tags: ["Machine Learning","Python Project","Achievement"],
    cover: "/assets/illustrations/machine-learning-project.svg",
    coverAlt: "Illustration of a machine learning dashboard with charts and code.",
  },
  {
    number: 6,
    title: "Introduction to Databases: Where My Heart Failure Prediction Project Began",
    href: "/posts/introduction-to-databases-heart-failure-project/",
    label: "Blog 6",
    dateLabel: "June 1, 2026",
    readTime: "11 min read",
    excerpt: "My first serious view of databases came through a heart failure prediction project where data stopped feeling like rows in a file and started looking like a system.",
    highlights: ["Database basics","Digital footprint","Real-world data"],
    tags: ["Database Systems","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-02.jpeg",
    coverAlt: "Project report screenshot showing the heart failure prediction system coursework.",
  },
  {
    number: 7,
    title: "Understanding the Actual Purpose of Databases in a Medical Prediction System",
    href: "/posts/actual-purpose-of-databases-medical-prediction/",
    label: "Blog 7",
    dateLabel: "June 3, 2026",
    readTime: "12 min read",
    excerpt: "This post reflects on why databases exist, what problems they solve, and why data integrity became serious when the dataset represented patient health factors.",
    highlights: ["Data integrity","Security","Business value"],
    tags: ["Database Purpose","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-03.jpeg",
    coverAlt: "Screenshot from the database project showing heart failure dataset work.",
  },
  {
    number: 8,
    title: "Deep Dive into Databases: Tables, Keys, Relationships, and ACID Thinking",
    href: "/posts/deep-dive-databases-tables-keys-relationships/",
    label: "Blog 8",
    dateLabel: "June 5, 2026",
    readTime: "12 min read",
    excerpt: "A detailed reflection on the database concepts that became practical when I separated the heart failure dataset into related tables.",
    highlights: ["Keys","Constraints","Normalization"],
    tags: ["Relational Design","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-04.jpeg",
    coverAlt: "Screenshot showing database design and schema work in the project report.",
  },
  {
    number: 9,
    title: "Designing the Actual Database for My Heart Failure Dataset",
    href: "/posts/designing-actual-database-heart-failure-dataset/",
    label: "Blog 9",
    dateLabel: "June 7, 2026",
    readTime: "13 min read",
    excerpt: "This post follows my real database design process: requirement analysis, entity identification, ER thinking, relational schema creation, and normalization.",
    highlights: ["ER design","Schema","MySQL Workbench"],
    tags: ["Database Design","Heart Failure Project","MLProject"],
    cover: "/assets/photos/heart-failure-erd.png",
    coverAlt: "Entity relationship diagram for the normalized heart failure prediction database.",
  },
  {
    number: 10,
    title: "Project Discussions: What I Built, Why It Mattered, and How I Planned It",
    href: "/posts/project-discussions-heart-failure-system/",
    label: "Blog 10",
    dateLabel: "June 9, 2026",
    readTime: "12 min read",
    excerpt: "A first-person discussion of the project problem statement, objectives, solution design, implementation strategy, and expected outcomes.",
    highlights: ["Problem statement","Objectives","Implementation"],
    tags: ["Project Planning","Heart Failure Project","MLProject"],
    cover: "/assets/photos/database-systems-exhibition.jpeg",
    coverAlt: "Muhammad Ali Nazir presenting beside the Database Systems Exhibition banner.",
  },
  {
    number: 11,
    title: "Real-World Dataset Selection and the Challenges I Faced",
    href: "/posts/real-world-dataset-selection-challenges/",
    label: "Blog 11",
    dateLabel: "June 11, 2026",
    readTime: "12 min read",
    excerpt: "A reflection on finding a reliable Kaggle dataset, checking authenticity, assessing quality, and understanding ethical responsibility in medical data.",
    highlights: ["Kaggle","Data quality","Ethics"],
    tags: ["Dataset Selection","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-10.jpeg",
    coverAlt: "Screenshot showing dataset and analysis work from the heart failure project.",
  },
  {
    number: 12,
    title: "Designing a Database for the Selected Heart Failure Dataset",
    href: "/posts/database-for-selected-heart-failure-dataset/",
    label: "Blog 12",
    dateLabel: "June 13, 2026",
    readTime: "13 min read",
    excerpt: "How I moved from dataset structure to entities, ER diagram, relational schema, data loading, validation, and export for ML.",
    highlights: ["Data loading","Validation","CSV export"],
    tags: ["Implementation","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-12.jpeg",
    coverAlt: "Screenshot of database implementation tables from the heart failure project report.",
  },
  {
    number: 13,
    title: "Training an ML Model for Real-World Use: My Heart Disease Prediction Workflow",
    href: "/posts/training-ml-model-real-world-heart-disease/",
    label: "Blog 13",
    dateLabel: "June 15, 2026",
    readTime: "13 min read",
    excerpt: "A first-hand account of preparing data, visualizing patterns, encoding features, training models, evaluating results, and saving the best model.",
    highlights: ["EDA","Random Forest","Evaluation"],
    tags: ["Machine Learning","Heart Failure Project","MLProject"],
    cover: "/assets/project-report/heart-failure-project-14.png",
    coverAlt: "Screenshot of machine learning code or output from the project report.",
  },
  {
    number: 14,
    title: "Deploying the Model Using FastAPI: Turning Predictions into a Usable Service",
    href: "/posts/deploying-model-using-fastapi-heart-disease/",
    label: "Blog 14",
    dateLabel: "June 17, 2026",
    readTime: "12 min read",
    excerpt: "How the saved model and inference script point toward FastAPI deployment, prediction endpoints, database integration, and monitoring.",
    highlights: ["FastAPI","Inference","Endpoints"],
    tags: ["Deployment","Heart Failure Project","MLProject"],
    cover: "/assets/photos/heart-failure-gui.png",
    coverAlt: "Graphical user interface for the Heart Failure Prediction System.",
  },
  {
    number: 15,
    title: "Complete Journey: From Data to Production in My Heart Failure Prediction System",
    href: "/posts/complete-journey-data-to-production-heart-failure/",
    label: "Blog 15",
    dateLabel: "June 19, 2026",
    readTime: "13 min read",
    excerpt: "A complete semester reflection on dataset validation, database implementation, machine learning development, inference, deployment thinking, and lessons learned.",
    highlights: ["End-to-end pipeline","Lessons learned","Future work"],
    tags: ["Journey Summary","Heart Failure Project","MLProject"],
    cover: "/assets/photos/heart-failure-gui.png",
    coverAlt: "Heart Failure Prediction System interface for entering patient clinical data.",
  }
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

        if (layout === "minimal") {
          return `
          <li class="blog-minimal-item" data-reveal>
            <a class="blog-minimal-link" href="${resolvePath(post.href)}" aria-label="Read ${post.title}">
              <span class="blog-minimal-number">Blog ${post.number}</span>
              <span class="blog-minimal-title">${post.title}</span>
              <span class="blog-minimal-meta">
                <span>${post.dateLabel}</span>
                <span>${post.readTime}</span>
              </span>
            </a>
          </li>
        `;
        }

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
  if (latestPostDate && posts[posts.length - 1]) {
    latestPostDate.textContent = posts[posts.length - 1].dateLabel;
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
