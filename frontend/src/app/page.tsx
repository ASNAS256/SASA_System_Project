import Link from "next/link";
const features = [
  { icon: "✦", title: "AI-assisted question generation", text: "Create draft questions from selected class, subject, verified curriculum units and learning outcomes." },
  { icon: "▤", title: "Curriculum intelligence", text: "Register NCDC source documents, import curriculum entries and review them against their original references." },
  { icon: "✓", title: "Teacher review and question bank", text: "Review, approve, organise and reuse assessment questions. AI-generated content remains a draft until checked." },
  { icon: "▣", title: "Activities and examination papers", text: "Select approved questions, arrange an assessment and produce a student paper alongside a teacher copy with answers and marking guidance." },
  { icon: "✧", title: "AI Prompt Studio", text: "Work with curriculum sources and lesson notes to refine ideas and prepare question drafts for teacher approval." },
  { icon: "↗", title: "Ugandan classroom context", text: "Designed around Uganda's P1–S6 education levels and workflows that support teachers and schools." },
];

const steps = [
  ["01", "Connect the curriculum", "Register the relevant curriculum source, import its class and subject entries, then verify them against the source document."],
  ["02", "Generate draft questions", "Choose a class, subject, verified topic and learning outcome. Set the question count, format and cognitive level."],
  ["03", "Review and approve", "Check the question, expected answer and marking guide. Approve suitable items into the reusable question bank."],
  ["04", "Build an activity or paper", "Select the questions you want, create an activity or examination, then download the student paper or teacher copy."],
];

export default function LandingPage() {
  return (
    <main className="landing">
      <section className="landing-hero">
        <div className="landing-hero-inner">
          <div className="landing-hero-copy">
            <div className="landing-eyebrow"><span>✧</span> NCDC curriculum · Teacher-reviewed assessment</div>
            <h1>Assessment, built for <em>Uganda’s classrooms.</em></h1>
            <p className="landing-lead">SASA helps teachers prepare curriculum-informed questions, review learning, and assemble activities and examination papers from a managed question bank.</p>
            <div className="landing-hero-actions">
              <Link href="/workspace" className="landing-cta">Open the Teacher Workspace <span>→</span></Link>
              <a href="#how-it-works" className="landing-cta-outline">See how it works</a>
            </div>
            <p className="landing-trust">Every AI-generated question is a draft. A teacher reviews and approves it before it enters the approved question bank.</p>
          </div>

          <div className="landing-preview" aria-label="Illustration of the SASA question generator">
            <div className="preview-top"><div className="preview-dots"><i/><i/><i/></div><b>AI Question Generator</b><span className="preview-status">✦ Draft</span></div>
            <div className="preview-body">
              <label>CLASS</label>
              <div className="preview-chips"><span>S1</span><span className="active">S2</span><span>S4 · UCE</span><span>S5 · UACE</span></div>
              <label>SUBJECT</label>
              <div className="preview-chips"><span>Mathematics</span><span>Physics</span><span>Chemistry</span><span className="active">Biology</span></div>
              <div className="preview-question">
                <b>Which process do green plants use to make their own food?</b>
                <div className="preview-option">○ &nbsp; Respiration</div>
                <div className="preview-option selected">◉ &nbsp; Photosynthesis</div>
                <div className="preview-option">○ &nbsp; Digestion</div>
                <div className="preview-option">○ &nbsp; Transpiration</div>
                <div className="preview-foot"><span>Nutrition in plants · S2</span><b>✓ Awaiting teacher approval</b></div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-metrics">
          <div><b>P1–S6</b><span>Ugandan class directory</span></div>
          <div><b>Teacher-led</b><span>Review and approval</span></div>
          <div><b>Multi-subject</b><span>Curriculum workflows</span></div>
          <div><b>PDF + Print</b><span>Assessment output</span></div>
        </div>
      </section>

      <section className="landing-section" id="teachers">
        <div className="landing-section-heading">
          <span className="landing-kicker">ONE CONNECTED WORKFLOW</span>
          <h2>From curriculum to classroom assessment</h2>
          <p>Bring curriculum references, question drafting, teacher moderation and paper preparation into one organised workspace.</p>
        </div>
        <div className="landing-feature-grid">
          {features.map((feature) => (
            <article className="landing-feature" key={feature.title}>
              <span className="landing-feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-process" id="how-it-works">
        <div className="landing-section-heading">
          <span className="landing-kicker">HOW IT WORKS</span>
          <h2>A clear process. Teachers stay in control.</h2>
          <p>SASA supports preparation and organisation; teachers remain responsible for checking content, answers and marks.</p>
        </div>
        <div className="landing-steps">
          {steps.map(([number, title, text]) => (
            <article className="landing-step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-audience" id="schools">
        <div><span className="landing-kicker">BUILT AROUND SCHOOL WORKFLOWS</span><h2>Support for teachers and school teams</h2><p>Prepare class activities, topic assessments and examination papers with reusable, reviewed questions. Curriculum managers can organise source documents and imported curriculum entries.</p></div>
        <div className="landing-audience-links" id="learners">
          <Link href="/workspace">Go to Teacher Workspace <span>→</span></Link>
          <Link href="/curriculum" id="curriculum">Explore Curriculum Manager <span>→</span></Link>
          <Link href="/prompt-studio">Open AI Prompt Studio <span>→</span></Link>
        </div>
      </section>

      <footer className="landing-footer">
        <Link href="/" className="landing-brand"><span className="landing-brand-mark">S</span><span>SASA</span></Link>
        <p>Intelligent assessment. Better learning.</p>
        <small>AI-generated content must be reviewed by a teacher. Curriculum alignment depends on the accuracy and verification status of the source material imported into SASA.</small>
      </footer>
    </main>
  );
}
