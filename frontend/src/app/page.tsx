import Link from "next/link";
import {
  Sparkles,
  GraduationCap,
  School,
  Users,
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PenLine,
  BarChart3,
  CalendarCheck2,
  CalendarRange,
  Award,
  ClipboardList,
} from "lucide-react";
import LandingDemo from "./components/landing-demo";

export default function LandingPage() {
  return (
    <div className="lp-page">
      {/* ===== Header ===== */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" className="lp-logo" aria-label="SASA EduAssess home">
            <span className="lp-logo-mark">
              <GraduationCap size={22} strokeWidth={2.2} />
            </span>
            <span className="lp-logo-text">
              SASA <b>EduAssess</b>
            </span>
          </Link>

          <nav className="lp-nav" aria-label="Main">
            <a href="#teachers">Teachers</a>
            <a href="#schools">Schools</a>
            <a href="#learners">Learners</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <div className="lp-nav-cta">
            <a className="lp-btn lp-btn-ghost" href="/prompt-studio">
              SASA AI
            </a>
            <a className="lp-btn lp-btn-ghost hide-sm" href="/curriculum">
              Curriculum Manager
            </a>
            <a className="lp-btn lp-btn-primary" href="/workspace">
              Teacher Workspace
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="lp-hero">
          <div className="lp-hero-inner">
            <div className="lp-hero-copy">
              <span className="lp-badge">
                <Sparkles size={14} /> NCDC curriculum · UNEB assessment standards
              </span>
              <h1>
                Assessment, built for
                <br />
                Uganda&apos;s classrooms
              </h1>
              <p className="lp-hero-sub">
                SASA EduAssess helps teachers generate curriculum-aligned exam
                questions for Mathematics, Physics, Chemistry and Biology — and
                assemble end-of-term, end-of-year and UNEB end-of-cycle
                assessments from a reviewed question bank.
              </p>
              <div className="lp-hero-actions">
                <a className="lp-btn lp-btn-primary lp-btn-lg" href="/workspace">
                  Open the Teacher Workspace <ArrowRight size={16} />
                </a>
                <a className="lp-btn lp-btn-ghost lp-btn-lg" href="#how-it-works">
                  See how it works
                </a>
              </div>
              <p className="lp-hero-note">
                Every AI question is saved as a draft and requires teacher
                review before it enters your question bank.
              </p>
            </div>

            <LandingDemo />
          </div>
        </section>

        {/* ===== Stats ===== */}
        <section className="lp-stats" aria-label="At a glance">
          <div className="lp-stat">
            <b>4</b>
            <span>core subjects</span>
          </div>
          <div className="lp-stat">
            <b>8+</b>
            <span>question types</span>
          </div>
          <div className="lp-stat">
            <b>6</b>
            <span>Bloom&apos;s cognitive levels</span>
          </div>
          <div className="lp-stat">
            <b>UCE · UACE</b>
            <span>UNEB end-of-cycle</span>
          </div>
          <div className="lp-stat">
            <b>S1 – S6</b>
            <span>6 grade levels</span>
          </div>
        </section>

        {/* ===== For Teachers ===== */}
        <section className="lp-section" id="teachers">
          <div className="lp-section-inner">
            <div className="lp-section-copy">
              <span className="lp-eyebrow">For teachers</span>
              <h2>Your question bank, built in minutes.</h2>
              <p>
                Pick a class, subject and learning outcome. SASA generates
                draft questions aligned to the verified NCDC curriculum — with
                suggested answers, marking guides and Bloom levels.
              </p>
              <ul className="lp-checklist">
                <li>
                  <CheckCircle2 size={18} /> Multiple choice, structured, essay,
                  practical and scenario questions
                </li>
                <li>
                  <CheckCircle2 size={18} /> Review, approve, categorise and
                  reuse questions
                </li>
                <li>
                  <CheckCircle2 size={18} /> Assemble papers to an exact marks
                  total
                </li>
                <li>
                  <CheckCircle2 size={18} /> Export student and teacher PDFs
                  with marking guides
                </li>
              </ul>
            </div>
            <div className="lp-tags">
              <span className="lp-tag">
                <Sparkles size={15} /> AI Question Generator
              </span>
              <span className="lp-tag">
                <BookOpen size={15} /> Question Bank
              </span>
              <span className="lp-tag">
                <FileText size={15} /> Exam Papers
              </span>
            </div>
          </div>
        </section>

        {/* ===== For Schools ===== */}
        <section className="lp-section lp-section-alt" id="schools">
          <div className="lp-section-inner">
            <div className="lp-section-copy">
              <span className="lp-eyebrow">For schools</span>
              <h2>One place for classes, subjects and results.</h2>
              <p>
                SASA is designed to grow into full school administration —
                managing classes, subjects, examination schedules, results and
                academic reports across the academic year.
              </p>
              <ul className="lp-checklist">
                <li>
                  <CheckCircle2 size={18} /> Manage classes, subjects and
                  academic years
                </li>
                <li>
                  <CheckCircle2 size={18} /> Schedule and publish examinations
                </li>
                <li>
                  <CheckCircle2 size={18} /> Track class and learner performance
                </li>
                <li>
                  <CheckCircle2 size={18} /> Role-based access for staff
                </li>
              </ul>
            </div>
            <div className="lp-tags">
              <span className="lp-tag">
                <School size={15} /> Administration
              </span>
              <span className="lp-tag">
                <BarChart3 size={15} /> Analytics
              </span>
              <span className="lp-tag">
                <ShieldCheck size={15} /> Access control
              </span>
            </div>
          </div>
        </section>

        {/* ===== For Learners ===== */}
        <section className="lp-section" id="learners">
          <div className="lp-section-inner">
            <div className="lp-section-copy">
              <span className="lp-eyebrow">For learners</span>
              <h2>Practise, sit exams and track progress.</h2>
              <p>
                Learners will take examinations online, receive feedback on
                their answers, and monitor their own academic progress — with
                weaknesses identified for remedial support.
              </p>
              <ul className="lp-checklist">
                <li>
                  <CheckCircle2 size={18} /> Take published examinations online
                </li>
                <li>
                  <CheckCircle2 size={18} /> Instant feedback on objective
                  questions
                </li>
                <li>
                  <CheckCircle2 size={18} /> Personal progress tracking
                </li>
              </ul>
            </div>
            <div className="lp-tags">
              <span className="lp-tag">
                <Users size={15} /> Learner Portal
              </span>
              <span className="lp-tag">
                <PenLine size={15} /> Feedback
              </span>
              <span className="lp-tag">
                <BarChart3 size={15} /> Progress
              </span>
            </div>
          </div>
        </section>

        {/* ===== How it works ===== */}
        <section className="lp-section lp-section-alt" id="how-it-works">
          <div className="lp-section-inner lp-section-head">
            <span className="lp-eyebrow">How it works</span>
            <h2>From curriculum to printed paper.</h2>
            <p>
              A controlled workflow keeps curriculum content verified and AI
              output teacher-approved.
            </p>
          </div>
          <ol className="lp-steps">
            <li className="lp-step">
              <span className="lp-step-num">1</span>
              <h3>Select class, subject &amp; topic</h3>
              <p>Choose from verified NCDC curriculum units and outcomes.</p>
            </li>
            <li className="lp-step">
              <span className="lp-step-num">2</span>
              <h3>AI generates draft questions</h3>
              <p>Aligned to the topic, outcome, difficulty and Bloom level.</p>
            </li>
            <li className="lp-step">
              <span className="lp-step-num">3</span>
              <h3>Teacher reviews &amp; approves</h3>
              <p>Every question is a draft until a teacher signs it off.</p>
            </li>
            <li className="lp-step">
              <span className="lp-step-num">4</span>
              <h3>Assemble the paper</h3>
              <p>Build a draft examination to an exact marks total.</p>
            </li>
            <li className="lp-step">
              <span className="lp-step-num">5</span>
              <h3>Publish &amp; export</h3>
              <p>Download student papers and teacher marking guides as PDF.</p>
            </li>
          </ol>
        </section>

        {/* ===== Curriculum ===== */}
        <section className="lp-section" id="curriculum">
          <div className="lp-section-inner lp-section-head">
            <span className="lp-eyebrow">Curriculum coverage</span>
            <h2>Four core sciences. Fully aligned.</h2>
            <p>
              We start with the four core subjects of the NCDC lower and
              advanced secondary curriculum — Mathematics, Physics, Chemistry
              and Biology — with official sources verified before they become
              available to teachers.
            </p>
          </div>
          <div className="lp-subject-grid">
            {[
              { icon: "🔢", name: "Mathematics", range: "S1 – S6" },
              { icon: "⚛️", name: "Physics", range: "S1 – S6" },
              { icon: "🧪", name: "Chemistry", range: "S1 – S6" },
              { icon: "🔬", name: "Biology", range: "S1 – S6" },
            ].map((s) => (
              <div className="lp-subject-card" key={s.name}>
                <span className="lp-subject-emoji">{s.icon}</span>
                <span className="lp-subject-name">{s.name}</span>
                <span className="lp-subject-range">{s.range}</span>
              </div>
            ))}
          </div>
          <div className="lp-soon-grid">
            <span className="lp-soon">Coming soon: English Language</span>
            <span className="lp-soon">Coming soon: Social Studies</span>
            <span className="lp-soon">Coming soon: Integrated Science</span>
            <span className="lp-soon">Coming soon: Geography</span>
          </div>
          <p className="lp-section-note">
            A subject becomes selectable in the workspace only after its NCDC
            source document is registered and its entries verified.
          </p>
        </section>

        {/* ===== Assessment types ===== */}
        <section className="lp-section lp-section-alt" id="assessments">
          <div className="lp-section-inner lp-section-head">
            <span className="lp-eyebrow">Assessment types</span>
            <h2>From a topic quiz to the national cycle.</h2>
            <p>
              Aligned to the NCDC curriculum and UNEB assessment standards —
              from quick formative checks to end-of-cycle examinations.
            </p>
          </div>
          <div className="lp-assessment-grid">
            <div className="lp-assessment-card">
              <span className="lp-assessment-icon">
                <ClipboardList size={22} />
              </span>
              <h3>Formative assessments</h3>
              <p>
                Topic-based quizzes and practice questions to check
                understanding week by week.
              </p>
            </div>
            <div className="lp-assessment-card">
              <span className="lp-assessment-icon">
                <CalendarCheck2 size={22} />
              </span>
              <h3>End of term assessments</h3>
              <p>Term papers covering the topics taught across the term.</p>
            </div>
            <div className="lp-assessment-card">
              <span className="lp-assessment-icon">
                <CalendarRange size={22} />
              </span>
              <h3>End of year assessments</h3>
              <p>Cumulative papers that assess the full year&apos;s work.</p>
            </div>
            <div className="lp-assessment-card">
              <span className="lp-assessment-icon">
                <Award size={22} />
              </span>
              <h3>UNEB end-of-cycle assessments</h3>
              <p>
                UCE · UACE preparation aligned to national examination
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section className="lp-cta">
          <h2>Start building better assessments today.</h2>
          <p>
            Open the teacher workspace to generate your first draft questions —
            no account needed in this development milestone.
          </p>
          <div className="lp-hero-actions">
            <a className="lp-btn lp-btn-primary lp-btn-lg" href="/workspace">
              Open the Teacher Workspace <ArrowRight size={16} />
            </a>
            <a className="lp-btn lp-btn-ghost lp-btn-lg" href="/curriculum">
              Manage Curriculum
            </a>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-logo">
            <span className="lp-logo-mark">
              <GraduationCap size={20} strokeWidth={2.2} />
            </span>
            <span className="lp-logo-text">
              SASA <b>EduAssess</b>
            </span>
          </div>
          <nav className="lp-footer-nav" aria-label="Footer">
            <a href="/workspace">Teacher Workspace</a>
            <a href="/prompt-studio">SASA AI</a>
            <a href="/curriculum">Curriculum Manager</a>
            <a href="#teachers">Teachers</a>
            <a href="#how-it-works">How it works</a>
          </nav>
          <p className="lp-footer-note">
            SASA EduAssess Uganda · Development milestone · AI output is draft
            material; teacher verification is required. Not for high-stakes use.
          </p>
        </div>
      </footer>
    </div>
  );
}
