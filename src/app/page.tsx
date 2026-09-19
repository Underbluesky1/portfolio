import styles from "./page.module.css";

const experience = [
  {
    year: "2024-2026",
    title: "Back-End Developer",
    company: "Studio Shodwe • San Mateo, CA",
    description:
      "Developed and maintained back-end features and APIs using PHP and Laravel for client projects across finance and consumer services. Designed and optimized MySQL databases, troubleshot production issues, and supported third-party integrations and WordPress/Moodle-related tasks while collaborating in Agile workflows.",
  },
  {
    year: "2022-2024",
    title: "Back-End Developer",
    company: "Rimberio Co • Cupertino, CA",
    description:
      "Assisted in developing back-end modules using PHP and Laravel, supported database design, basic MySQL operations, and API endpoint creation, participated in bug fixing, testing, and documentation, and gained hands-on experience with Git and remote collaboration in a fast-paced environment.",
  },
  {
    year: "2020-2022",
    title: "Back-End Developer",
    company: "Thynk Unlimited • San Francisco, CA",
    description:
      "Built and maintained Laravel-based applications and RESTful APIs for e-commerce and service platforms, managed MySQL databases, wrote efficient queries, and improved maintainability and performance while working closely with cross-functional teams and stakeholders.",
  },
  {
    year: "2018-2019",
    title: "Software Engineer Intern",
    company: "Arowwai Industries • Mountain View, CA",
    description:
      "Worked on backend features, APIs, debugging, and internal documentation while gaining hands-on experience with Python, Java, JavaScript, SQL, and object-oriented best practices in a fast-paced development environment.",
  },
];

const skills = [
  "PHP",
  "Laravel",
  "MySQL",
  "API Development",
  "REST APIs",
  "GraphQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C# / .NET",
  "VB6",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "CI/CD",
  "Linux",
  "Stripe",
  "PayPal",
  "OAuth",
  "JWT",
  "OpenAI / Anthropic",
  "AI agents",
  "MCP servers",
  "GitHub Copilot",
  "Cursor",
  "Claude Code",
  "System Design",
  "Agile/Scrum",
  "Unit Testing",
  "Code Review",
  "Security Best Practices",
  "Performance Optimization",
];

const stats = [
  { value: "7+", label: "Years backend experience" },
  { value: "20+", label: "Projects supported" },
  { value: "9+", label: "Core tech skills" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.brand}>Cesar Evaristo Quintana Hernandez</div>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#about">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Software engineer</p>
          <h1>Building dependable backend systems that support business growth and product quality.</h1>
          <p className={styles.lead}>
            Back-end developer with 3+ years of experience building and maintaining reliable web
            applications using PHP and Laravel. I work effectively with APIs, databases, remote teams,
            and AI-assisted workflows to deliver clean, maintainable software for digital products and client projects.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryButton}>Contact me</a>
            <a href="#experience" className={styles.secondaryButton}>View experience</a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Backend engineering profile card">
          <div className={styles.cardLarge}>
            <div className={styles.codePanel}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <pre>{`const backend = {
  stack: ['PHP', 'Laravel', 'MySQL'],
  focus: ['APIs', 'Integrations', 'Performance'],
  goal: 'Reliable delivery'
};`}</pre>
            </div>
          </div>
          <div className={styles.cardSmall}>
            <div className={styles.metricBox}>
              <strong>3+</strong>
              <span>Years in backend</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Professional highlights">
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="experience" className={styles.gallerySection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Experience</p>
          <h2>Backend work across client platforms, e-commerce, and integrations.</h2>
        </div>

        <div className={styles.experienceList}>
          {experience.map((item) => (
            <article key={`${item.year}-${item.title}`} className={styles.experienceItem}>
              <div className={styles.yearColumn}>{item.year}</div>
              <div className={styles.experienceContent}>
                <h3>{item.title}</h3>
                <p className={styles.company}>{item.company}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Summary</p>
          <h2>Detail-oriented builder with strong database and API fundamentals.</h2>
        </div>

        <div className={styles.aboutContent}>
          <p>
            Back-End Developer with 3+ years of experience building and maintaining reliable
            web applications using PHP and Laravel. Strong foundation in MySQL, API development,
            and back-end integrations. Detail-oriented and collaborative team player who works
            effectively with front-end developers, QA, project managers, and remote international teams.
          </p>
          <p>
            Comfortable using AI-assisted tools such as Cursor, Claude, and GitHub Copilot to
            improve productivity while writing clean, maintainable code. Eager to grow in a
            fast-paced digital agency environment and deliver high-quality solutions for global clients.
          </p>
        </div>
      </section>

      <section id="skills" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Skills</p>
          <h2>Technical strengths across backend, integrations, cloud, and delivery.</h2>
        </div>

        <div className={styles.servicesGrid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.serviceCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div>
          <p>Languages: English, Spanish</p>
          <p>Bachelor&apos;s Degree in Computer Science</p>
          <p>Technological University of Tehuacán</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="mailto:bet.hes.uperbes.t116@gmail.com">bet.hes.uperbes.t116@gmail.com</a>
          <a href="tel:+522381113215">+52 238 111 3215</a>
          <a href="https://www.linkedin.com/in/cesar-evaristo-quintana-hernandez-4661677a" target="_blank" rel="noreferrer">linkedin.com/in/cesar-evaristo-quintana-hernandez-4661677a</a>
        </div>
      </footer>
    </main>
  );
}
