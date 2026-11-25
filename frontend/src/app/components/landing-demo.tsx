
"use client";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

type DemoItem = {
  question: string;
  options: string[];
  answer: string;
  meta: string;
};

const CLASSES = [
  { id: "S1", label: "S1" },
  { id: "S2", label: "S2" },
  { id: "S4", label: "S4 · UCE" },
  { id: "S5", label: "S5 · UACE" },
];

const SUBJECTS = ["Mathematics", "Physics", "Chemistry", "Biology"];

const DEMO: Record<string, DemoItem> = {
  "S1 Mathematics": {
    question:
      "A school purchases 24 exercise books at UGX 2,500 each. The supplier gives a discount of UGX 5,000 on the total cost. How much does the school pay?",
    options: ["UGX 55,000", "UGX 60,000", "UGX 65,000", "UGX 70,000"],
    answer: "UGX 55,000",
    meta: "Number operations · Commercial arithmetic · S1",
  },

  "S2 Mathematics": {
    question:
      "A school taxi charges a fixed amount and an additional UGX 2,000 for every kilometre travelled. A learner pays UGX 11,000 for a 4 km journey. If the charge is represented by y = 2,000x + c, what is the fixed charge c?",
    options: ["UGX 2,000", "UGX 3,000", "UGX 4,000", "UGX 8,000"],
    answer: "UGX 3,000",
    meta: "Algebra · Linear equations · S2",
  },

  "S4 Mathematics": {
    question:
      "A farmer records the number of bags of maize harvested from five plots as 18, 24, 21, 27 and 30. He wants to use a single value to represent the typical harvest per plot. What is the mean number of bags harvested?",
    options: ["21 bags", "23 bags", "24 bags", "27 bags"],
    answer: "24 bags",
    meta: "Statistics · Measures of central tendency · UCE Mathematics",
  },

  "S5 Mathematics": {
    question:
      "A company estimates that the revenue obtained from selling x units of a product is R(x) = 80x - 2x², where R is measured in thousands of shillings. To determine the production level at which revenue is maximised, which value of x should the company consider?",
    options: ["10 units", "20 units", "30 units", "40 units"],
    answer: "20 units",
    meta: "Calculus · Differentiation and optimisation · UACE Mathematics",
  },

  "S1 Physics": {
    question:
      "A learner places a metal spoon and a wooden spoon in hot water for several minutes. When both are removed, the metal spoon feels hotter to the touch. Which property of the metal best explains this observation?",
    options: [
      "Metal has a higher density than wood.",
      "Metal conducts thermal energy more readily than wood.",
      "Metal absorbs more water than wood.",
      "Metal has a lower melting point than wood.",
    ],
    answer: "Metal conducts thermal energy more readily than wood.",
    meta: "Heat · Thermal conduction · S1",
  },

  "S2 Physics": {
    question:
      "A construction worker uses a wheelbarrow to transport bricks. He places the load between the wheel and the handles, then lifts the handles to move it. Which class of lever is represented by the wheelbarrow, and where is its fulcrum?",
    options: [
      "First class · at the load",
      "Second class · at the wheel",
      "Third class · at the handles",
      "Second class · at the handles",
    ],
    answer: "Second class · at the wheel",
    meta: "Mechanics · Simple machines and levers · S2",
  },

  "S4 Physics": {
    question:
      "A motorist travelling at 72 km/h approaches a stationary vehicle and applies brakes. The vehicle decelerates uniformly at 4 m/s². What distance does it travel before coming to rest?",
    options: ["18 m", "36 m", "50 m", "72 m"],
    answer: "50 m",
    meta: "Mechanics · Linear motion and deceleration · UCE Physics",
  },

  "S5 Physics": {
    question:
      "An engineer uses a transformer to step down a voltage from 240 V to 12 V for a device. The primary coil has 1,200 turns. Assuming an ideal transformer, how many turns should the secondary coil have?",
    options: ["60 turns", "120 turns", "240 turns", "600 turns"],
    answer: "60 turns",
    meta: "Electricity · Electromagnetic induction · UACE Physics",
  },

  "S1 Chemistry": {
    question:
      "A learner pours muddy water into a container and leaves it undisturbed. After some time, soil particles settle at the bottom, leaving clearer water above. Which process is primarily responsible for the separation?",
    options: [
      "Distillation",
      "Filtration",
      "Sedimentation",
      "Evaporation",
    ],
    answer: "Sedimentation",
    meta: "Separation of mixtures · S1",
  },

  "S2 Chemistry": {
    question:
      "A blacksmith heats a piece of iron in the presence of air. After some time, the iron develops a reddish-brown coating. Which statement best explains this change?",
    options: [
      "Iron melts and changes its physical state.",
      "Iron reacts with oxygen and forms a new substance.",
      "Iron absorbs water without undergoing a chemical change.",
      "Iron loses its mass through evaporation.",
    ],
    answer: "Iron reacts with oxygen and forms a new substance.",
    meta: "Chemical reactions · Oxidation and rusting · S2",
  },

  "S4 Chemistry": {
    question:
      "A learner adds dilute hydrochloric acid to magnesium ribbon in a laboratory. Bubbles are produced, and the magnesium gradually disappears. Which gas is most likely produced during the reaction?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen",
      "Chlorine",
    ],
    answer: "Hydrogen",
    meta: "Acids · Reactions of acids with metals · UCE Chemistry",
  },

  "S5 Chemistry": {
    question:
      "A chemist analyses a compound containing carbon and hydrogen. When 0.30 mol of the compound is completely burned, 0.90 mol of carbon dioxide and 1.20 mol of water are produced. What is the empirical formula of the compound?",
    options: ["CH", "CH₂", "CH₃", "C₂H₄"],
    answer: "CH₂",
    meta: "Organic chemistry · Empirical formula determination · UACE Chemistry",
  },

  "S1 Biology": {
    question:
      "A learner uproots a young plant and observes that most of its roots are thin and branched. The plant is replanted, but its growth slows considerably. Which function was most likely affected by damaging these roots?",
    options: [
      "Absorption of water and mineral salts",
      "Production of seeds and fruits",
      "Manufacture of food using sunlight",
      "Release of oxygen during photosynthesis",
    ],
    answer: "Absorption of water and mineral salts",
    meta: "Plant structure · Root functions · S1",
  },

  "S2 Biology": {
    question:
      "A farmer grows the same crop in two gardens. Garden A receives adequate water but little sunlight, while Garden B receives adequate sunlight and water. Plants in Garden B grow more vigorously. Which process best explains the difference?",
    options: [
      "Garden B plants absorb more oxygen through their roots.",
      "Garden B plants photosynthesise at a higher rate.",
      "Garden A plants respire more rapidly and produce more food.",
      "Garden A plants lose less water through transpiration.",
    ],
    answer: "Garden B plants photosynthesise at a higher rate.",
    meta: "Plant physiology · Photosynthesis · S2",
  },

  "S4 Biology": {
    question:
      "A patient experiences difficulty breathing after the destruction of some alveoli in the lungs. Which change directly explains the reduced efficiency of gas exchange?",
    options: [
      "Reduced surface area available for diffusion",
      "Increased movement of food through the digestive system",
      "Reduced blood supply to the kidneys",
      "Increased production of bile by the liver",
    ],
    answer: "Reduced surface area available for diffusion",
    meta: "Human physiology · Gas exchange · UCE Biology",
  },

  "S5 Biology": {
    question:
      "In a breeding experiment, a heterozygous tall pea plant (Tt) is crossed with a short plant (tt). Tallness is dominant over shortness. Assuming complete dominance, what proportion of the offspring is expected to be short?",
    options: ["0%", "25%", "50%", "100%"],
    answer: "50%",
    meta: "Genetics · Monohybrid inheritance · UACE Biology",
  },
};

export default function LandingDemo() {
  const [cls, setCls] = useState("S2");
  const [subject, setSubject] = useState("Mathematics");

  const key = `${cls} ${subject}`;
  const item =
    DEMO[key] ?? {
      question: `A learner encounters a practical situation involving ${subject.toLowerCase()}. Which approach best demonstrates the application of relevant ${subject.toLowerCase()} knowledge to solve the problem?`,
    options: [
      "Applying relevant principles to analyse the situation",
      "Memorising unrelated definitions without examining the situation",
      "Ignoring the available information and making assumptions",
      "Selecting an answer without evaluating the evidence",
    ],
    answer: "Applying relevant principles to analyse the situation",
    meta: `${cls} · ${subject} · Application`,
  };

  return (
    <div className="lp-mock" aria-label="Interactive product preview">
      <div className="lp-mock-head">
        <span className="lp-mock-dots">
          <i /> <i /> <i />
        </span>
        <span className="lp-mock-title">AI Question Generator</span>
        <span className="lp-mock-badge">
          <Sparkles size={12} /> Draft
        </span>
      </div>

      <div className="lp-mock-body">
        <div className="lp-mock-row">
          <label>Class</label>
          <div className="lp-pills">
            {CLASSES.map((c) => (
              <button
                key={c.id}
                className={cls === c.id ? "lp-pill lp-pill-on" : "lp-pill"}
                onClick={() => setCls(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lp-mock-row">
          <label>Subject</label>
          <div className="lp-pills">
            {SUBJECTS.map((s) => (
              <button
                key={s}
                className={subject === s ? "lp-pill lp-pill-on" : "lp-pill"}
                onClick={() => setSubject(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="lp-mock-question">
          <p className="lp-mock-q">{item.question}</p>
          <ul className="lp-mock-options">
            {item.options.map((o) => (
              <li
                key={o}
                className={o === item.answer ? "lp-mock-opt lp-mock-opt-on" : "lp-mock-opt"}
              >
                <span className="lp-mock-radio" />
                {o}
              </li>
            ))}
          </ul>
          <div className="lp-mock-foot">
            <span className="lp-mock-meta">{item.meta}</span>
            <span className="lp-mock-approve">
              <CheckCircle2 size={14} /> Awaiting teacher approval
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
