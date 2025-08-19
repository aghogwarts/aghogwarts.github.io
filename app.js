// Application Data
const appData = {
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "https://via.placeholder.com/400x250/0066cc/ffffff?text=E-Commerce+Platform",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Mobile-first task management application with real-time updates",
      technologies: ["Vue.js", "Firebase", "PWA"],
      image:
        "https://via.placeholder.com/400x250/009900/ffffff?text=Task+Manager",
      github: "https://github.com/username/taskmanager",
      demo: "https://taskmanager-demo.com",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing complex datasets",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      image:
        "https://via.placeholder.com/400x250/cc6600/ffffff?text=Data+Dashboard",
      github: "https://github.com/username/dashboard",
      demo: "https://dashboard-demo.com",
      category: "Data Science",
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "Intelligent chatbot using natural language processing",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      image:
        "https://via.placeholder.com/400x250/9900cc/ffffff?text=AI+Chatbot",
      github: "https://github.com/username/chatbot",
      demo: "https://chatbot-demo.com",
      category: "Machine Learning",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      category: "Technical",
      date: "2024-01-15",
      excerpt:
        "A comprehensive guide to modern web development practices and tools in 2024.",
      readTime: 8,
      content:
        "# Getting Started with Modern Web Development\n\nWeb development has evolved significantly over the past few years. In this post, we'll explore the current landscape of web development and the tools that are shaping the future.\n\n## Current Trends\n\n- **Component-based architecture**: Frameworks like React, Vue, and Angular continue to dominate\n- **JAMstack**: Static site generators are becoming more popular\n- **Serverless**: Function-as-a-Service platforms are changing how we deploy\n- **Progressive Web Apps**: The line between web and native apps continues to blur\n\n## Tools and Technologies\n\nThe modern web developer's toolkit includes:\n\n1. **Version Control**: Git remains essential\n2. **Package Managers**: npm, yarn, pnpm\n3. **Build Tools**: Vite, Webpack, Parcel\n4. **CSS Frameworks**: Tailwind CSS, Bootstrap, Bulma\n5. **JavaScript Frameworks**: React, Vue, Angular, Svelte\n\n## Conclusion\n\nStaying current with web development trends is crucial for building modern, efficient, and user-friendly applications.",
    },
    {
      id: 2,
      title: "My Journey Learning to Code",
      category: "Personal",
      date: "2024-01-20",
      excerpt:
        "Reflecting on my coding journey and the lessons learned along the way.",
      readTime: 5,
      content:
        "# My Journey Learning to Code\n\nLooking back at my coding journey, I'm amazed at how far I've come and how much I've learned.\n\n## The Beginning\n\nIt all started with a simple HTML page. I remember the excitement of seeing my first \"Hello, World!\" displayed in a browser. Those early days were filled with:\n\n- Endless Stack Overflow searches\n- Tutorial hell (we've all been there)\n- The frustration of debugging simple syntax errors\n- The joy of finally making something work\n\n## The Learning Process\n\nWhat I've learned about learning to code:\n\n1. **Practice consistently**: Even 30 minutes a day makes a difference\n2. **Build projects**: Theory is important, but practice is everything\n3. **Don't be afraid to break things**: Some of my best learning came from fixing what I broke\n4. **Join communities**: The developer community is incredibly supportive\n5. **Stay curious**: Technology changes fast, embrace continuous learning\n\n## Where I Am Now\n\nToday, I'm comfortable with multiple programming languages and frameworks. But more importantly, I've learned how to learn, and that's the most valuable skill in this field.\n\n## Advice for New Developers\n\n- Be patient with yourself\n- Celebrate small wins\n- Don't compare your journey to others\n- Focus on problem-solving, not just syntax\n- Build things you're passionate about",
    },
    {
      id: 3,
      title: "The Future of Remote Work",
      category: "Non-technical",
      date: "2024-01-25",
      excerpt:
        "Exploring how remote work is changing the professional landscape and what it means for the future.",
      readTime: 6,
      content:
        "# The Future of Remote Work\n\nThe pandemic accelerated the adoption of remote work, but what does the future hold for this new way of working?\n\n## Current State\n\nRemote work has become the norm for many professionals, especially in the tech industry. Companies have had to adapt quickly, implementing new tools and processes to maintain productivity.\n\n## Benefits of Remote Work\n\n- **Flexibility**: Better work-life balance\n- **Cost savings**: No commuting, reduced office expenses\n- **Global talent pool**: Companies can hire from anywhere\n- **Environmental impact**: Reduced carbon footprint\n- **Productivity**: Many report being more productive at home\n\n## Challenges\n\n- **Communication**: Maintaining clear communication across time zones\n- **Collaboration**: Building team cohesion remotely\n- **Work-life balance**: Difficulty switching off\n- **Career development**: Mentoring and networking challenges\n- **Technology fatigue**: Too many video calls\n\n## The Hybrid Future\n\nI believe the future lies in hybrid models that combine the best of both worlds:\n\n- Flexible schedules\n- Remote-first policies\n- Regular in-person gatherings\n- Asynchronous communication\n- Results-focused evaluation\n\n## Conclusion\n\nRemote work is here to stay, but it will continue to evolve. Organizations that embrace flexibility and invest in the right tools and culture will thrive in this new landscape.",
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      category: "Technical",
      date: "2024-02-01",
      excerpt:
        "Practical tips and techniques for improving React application performance.",
      readTime: 10,
      content:
        "# Optimizing React Performance\n\nReact applications can become slow as they grow. Here are proven techniques to keep your React apps fast and responsive.\n\n## Common Performance Issues\n\n1. **Unnecessary re-renders**\n2. **Large bundle sizes**\n3. **Inefficient state management**\n4. **Memory leaks**\n5. **Poor list rendering**\n\n## Optimization Techniques\n\n### 1. Memoization\n\n```jsx\n// Use React.memo for components\nconst MyComponent = React.memo(({ data }) => {\n  return <div>{data.name}</div>;\n});\n\n// Use useMemo for expensive calculations\nconst expensiveValue = useMemo(() => {\n  return computeExpensiveValue(data);\n}, [data]);\n\n// Use useCallback for functions\nconst handleClick = useCallback(() => {\n  onClick(id);\n}, [onClick, id]);\n```\n\n### 2. Code Splitting\n\n```jsx\n// Lazy loading components\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\n// Route-based splitting\nconst Home = lazy(() => import('./Home'));\nconst About = lazy(() => import('./About'));\n```\n\n### 3. Virtual Scrolling\n\nFor long lists, use libraries like react-window or react-virtualized.\n\n### 4. Bundle Analysis\n\nUse tools like webpack-bundle-analyzer to identify large dependencies.\n\n## Measuring Performance\n\n- React DevTools Profiler\n- Chrome DevTools Performance tab\n- Web Vitals metrics\n- Lighthouse audits\n\n## Conclusion\n\nPerformance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply the appropriate techniques. Remember, premature optimization is the root of all evil – profile first, optimize second.",
    },
  ],
};

// Application State
let currentPage = "about";
let currentFilter = "all";
let filteredPosts = [...appData.blogPosts];

// DOM Elements
let fileItems,
  pages,
  tabBar,
  breadcrumb,
  statusBar,
  themeToggle,
  loadingSpinner;

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  fileItems = document.querySelectorAll(".file-item");
  pages = document.querySelectorAll(".page");
  tabBar = document.querySelector(".tab-bar");
  breadcrumb = document.querySelector(".breadcrumb");
  statusBar = document.querySelector(".status-bar .current-file");
  themeToggle = document.querySelector(".theme-toggle");
  loadingSpinner = document.getElementById("loading-spinner");

  initializeApp();
  setupEventListeners();
  startTypingAnimation();
  loadProjects();
  loadBlogPosts();
});

// Initialize application
function initializeApp() {
  // Set initial theme
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  setTheme(savedTheme);

  // Show initial page
  showPage("about");

  // Set initial active states
  setActiveNavigation("about");
}

// Setup event listeners
function setupEventListeners() {
  // Navigation - Fixed: Properly handle sidebar navigation
  fileItems.forEach((item) => {
    item.addEventListener("click", handleNavigation);
  });

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Hero buttons navigation - Fixed: Properly handle hero button clicks
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-page]") || e.target.closest("[data-page]")) {
      e.preventDefault();
      const button = e.target.matches("[data-page]")
        ? e.target
        : e.target.closest("[data-page]");
      const page = button.dataset.page;
      if (page) {
        showPage(page);
        setActiveNavigation(page);
        updateHistory(page);
      }
    }
  });

  // Blog filters - Fixed: Prevent default behavior and handle properly
  setupBlogFilters();

  // Blog search
  setupBlogSearch();

  // Contact form
  setupContactForm();

  // Mobile sidebar toggle
  setupMobileNavigation();
}

// Fixed: Handle navigation properly
function handleNavigation(e) {
  e.preventDefault();
  e.stopPropagation();

  const page = e.currentTarget.dataset.page;
  if (page) {
    showPage(page);
    setActiveNavigation(page);
    updateHistory(page);
  }
}

// Show page function
function showPage(pageId) {
  showLoading();

  setTimeout(() => {
    // Hide all pages
    pages.forEach((page) => page.classList.remove("active"));

    // Show target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
      targetPage.classList.add("active");
    }

    // Update tab
    updateTab(pageId);

    // Update breadcrumb
    updateBreadcrumb(pageId);

    // Update status bar
    updateStatusBar(pageId);

    currentPage = pageId;
    hideLoading();
  }, 200);
}

// Set active navigation
function setActiveNavigation(pageId) {
  fileItems.forEach((item) => item.classList.remove("active"));
  const activeItem = document.querySelector(
    `[data-page="${pageId}"].file-item`
  );
  if (activeItem) {
    activeItem.classList.add("active");
  }
}

// Update tab
function updateTab(pageId) {
  const fileMap = {
    about: { icon: "📄", name: "about.md" },
    projects: { icon: "🗂️", name: "projects.json" },
    blog: { icon: "📝", name: "blog.ts" },
    contact: { icon: "📧", name: "contact.js" },
  };

  const file = fileMap[pageId];
  const tab = document.querySelector(".tab");

  if (tab && file) {
    const iconEl = tab.querySelector(".tab-icon");
    const nameEl = tab.querySelector(".tab-name");
    if (iconEl) iconEl.textContent = file.icon;
    if (nameEl) nameEl.textContent = file.name;
    tab.dataset.page = pageId;
  }
}

// Update breadcrumb
function updateBreadcrumb(pageId) {
  const fileMap = {
    about: "about.md",
    projects: "projects.json",
    blog: "blog.ts",
    contact: "contact.js",
  };

  const currentItem = breadcrumb?.querySelector(".current");
  if (currentItem) {
    currentItem.textContent = fileMap[pageId];
  }
}

// Update status bar
function updateStatusBar(pageId) {
  const fileMap = {
    about: "about.md",
    projects: "projects.json",
    blog: "blog.ts",
    contact: "contact.js",
  };

  if (statusBar) {
    statusBar.textContent = fileMap[pageId];
  }
}

// Theme functions
function toggleTheme() {
  const currentTheme = document.body.dataset.colorScheme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
}

function setTheme(theme) {
  document.body.dataset.colorScheme = theme;
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Typing animation
function startTypingAnimation() {
  const text = "Hello, I'm Ansh Goyal";
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) return;

  typingElement.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 1000);
}

// Load projects
function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = "";

  appData.projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });
}

// Create project card
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${
    project.title
  }" class="project-image" loading="lazy">
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.technologies
          .map((tech) => `<span class="tech-tag">${tech}</span>`)
          .join("")}
      </div>
      <div class="project-links">
        <a href="${
          project.github
        }" target="_blank" class="project-link">GitHub</a>
        <a href="${
          project.demo
        }" target="_blank" class="project-link">Live Demo</a>
      </div>
    </div>
  `;

  return card;
}

// Load blog posts
function loadBlogPosts() {
  const container = document.getElementById("blog-container");
  if (!container) return;

  displayBlogPosts(filteredPosts);
}

// Display blog posts
function displayBlogPosts(posts) {
  const container = document.getElementById("blog-container");
  if (!container) return;

  container.innerHTML = "";

  posts.forEach((post) => {
    const postElement = createBlogPostElement(post);
    container.appendChild(postElement);
  });
}

// Create blog post element
function createBlogPostElement(post) {
  const postDiv = document.createElement("div");
  postDiv.className = "blog-post";
  postDiv.innerHTML = `
    <div class="blog-post-header">
      <div>
        <h3 class="blog-post-title">${post.title}</h3>
        <div class="blog-post-meta">
          <span class="blog-post-category">${post.category}</span>
          <span>${formatDate(post.date)}</span>
          <span>${post.readTime} min read</span>
        </div>
      </div>
    </div>
    <p class="blog-post-excerpt">${post.excerpt}</p>
  `;

  // Fixed: Properly handle blog post clicks
  postDiv.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    showBlogPost(post);
  });

  return postDiv;
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Fixed: Show blog post detail
function showBlogPost(post) {
  const detailPage = document.getElementById("blog-detail-page");
  const detailContent = document.getElementById("blog-detail-content");

  if (!detailPage || !detailContent) return;

  detailContent.innerHTML = `
    <div class="back-to-blog">
      <button class="back-btn" onclick="backToBlog()">← Back to Blog</button>
    </div>
    <div class="blog-detail-header">
      <h1 class="blog-detail-title">${post.title}</h1>
      <div class="blog-detail-meta">
        <span class="blog-post-category">${post.category}</span>
        <span>${formatDate(post.date)}</span>
        <span>${post.readTime} min read</span>
      </div>
    </div>
    <div class="blog-detail-body">
      ${markdownToHtml(post.content)}
    </div>
  `;

  // Hide other pages and show detail
  pages.forEach((page) => page.classList.remove("active"));
  detailPage.classList.add("active");

  // Update UI elements
  updateTab("blog");
  updateBreadcrumb("blog");
  updateStatusBar("blog");
}

// Fixed: Back to blog function
function backToBlog() {
  showPage("blog");
  setActiveNavigation("blog");
}

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
  return markdown
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|l|p])/gm, "<p>")
    .replace(/(?<![>])$/gm, "</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<h[1-6]>)/g, "$1")
    .replace(/(<\/h[1-6]>)<\/p>/g, "$1")
    .replace(/<p>(<li>)/g, "<ul>$1")
    .replace(/(<\/li>)<\/p>/g, "$1</ul>")
    .replace(/<\/ul><ul>/g, "");
}

// Fixed: Setup blog filters
function setupBlogFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const filter = button.dataset.filter;

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter posts
      filterBlogPosts(filter);
      currentFilter = filter;
    });
  });
}

// Filter blog posts
function filterBlogPosts(filter) {
  if (filter === "all") {
    filteredPosts = [...appData.blogPosts];
  } else {
    filteredPosts = appData.blogPosts.filter(
      (post) => post.category === filter
    );
  }

  displayBlogPosts(filteredPosts);
}

// Setup blog search
function setupBlogSearch() {
  const searchInput = document.getElementById("blog-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    searchBlogPosts(searchTerm);
  });
}

// Search blog posts
function searchBlogPosts(searchTerm) {
  let postsToSearch =
    currentFilter === "all"
      ? appData.blogPosts
      : appData.blogPosts.filter((post) => post.category === currentFilter);

  if (searchTerm) {
    filteredPosts = postsToSearch.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
    );
  } else {
    filteredPosts = postsToSearch;
  }

  displayBlogPosts(filteredPosts);
}

// Setup contact form
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleContactSubmission(form);
  });
}

// Fixed: Handle contact form submission with proper feedback
function handleContactSubmission(form) {
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validate form data
  if (!data.name || !data.email || !data.message) {
    showFormMessage("Please fill in all fields.", "error");
    return;
  }

  // Show loading
  showLoading();

  // Simulate form submission
  setTimeout(() => {
    hideLoading();

    // Show success message
    showFormMessage(
      "Thank you for your message! I'll get back to you soon.",
      "success"
    );

    // Reset form
    form.reset();
  }, 1500);
}

// Fixed: Add form message display function
function showFormMessage(message, type = "info") {
  // Remove existing messages
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.style.cssText = `
    padding: 12px 16px;
    margin: 16px 0;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    ${
      type === "success"
        ? "background: var(--vscode-success); color: white;"
        : ""
    }
    ${type === "error" ? "background: var(--vscode-error); color: white;" : ""}
    ${
      type === "info"
        ? "background: var(--vscode-bg-secondary); color: var(--vscode-text-primary); border: 1px solid var(--vscode-border);"
        : ""
    }
  `;
  messageDiv.textContent = message;

  // Insert message
  const form = document.getElementById("contact-form");
  if (form) {
    form.insertBefore(messageDiv, form.firstChild);

    // Auto-remove success messages after 5 seconds
    if (type === "success") {
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.remove();
        }
      }, 5000);
    }
  }
}

// Setup mobile navigation
function setupMobileNavigation() {
  // Mobile navigation can be expanded here if needed
}

// Loading functions
function showLoading() {
  if (loadingSpinner) {
    loadingSpinner.style.display = "flex";
  }
}

function hideLoading() {
  if (loadingSpinner) {
    loadingSpinner.style.display = "none";
  }
}

// Handle browser back/forward buttons
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    showPage(e.state.page);
    setActiveNavigation(e.state.page);
  }
});

// Fixed: Update URL and history
function updateHistory(page) {
  const title = `Ansh.G - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
  const url = `#${page}`;

  history.pushState({ page }, title, url);
  document.title = title;
}

// Handle initial URL hash
window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  if (hash && ["about", "projects", "blog", "contact"].includes(hash)) {
    showPage(hash);
    setActiveNavigation(hash);
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + number keys for quick navigation
  if ((e.ctrlKey || e.metaKey) && e.key >= "1" && e.key <= "4") {
    e.preventDefault();
    const pages = ["about", "projects", "blog", "contact"];
    const pageIndex = parseInt(e.key) - 1;
    if (pages[pageIndex]) {
      showPage(pages[pageIndex]);
      setActiveNavigation(pages[pageIndex]);
      updateHistory(pages[pageIndex]);
    }
  }

  // Escape key to close blog detail
  if (e.key === "Escape") {
    const blogDetailPage = document.getElementById("blog-detail-page");
    if (blogDetailPage && blogDetailPage.classList.contains("active")) {
      backToBlog();
    }
  }
});

// Smooth scrolling for internal links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]:not([data-page])')) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Initialize lazy loading when DOM is ready
document.addEventListener("DOMContentLoaded", setupLazyLoading);

// Add enhanced animations
function addEnhancedAnimations() {
  // Animate skill tags on hover
  document.querySelectorAll(".skill-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-2px) scale(1.05)";
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Initialize enhanced animations
document.addEventListener("DOMContentLoaded", addEnhancedAnimations);

// Export functions for global access
window.backToBlog = backToBlog;
