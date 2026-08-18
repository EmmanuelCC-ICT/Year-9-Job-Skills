/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";

type Confidence = "strong" | "help" | "practice";

type Skill = {
  id: string;
  title: string;
  simpleTitle: string;
  description: string;
  employerLine: string;
  colour: string;
};

type Experience = {
  id: string;
  label: string;
  detail: string;
  skills: string[];
};

type Evidence = {
  experience: string;
  situation: string;
  action: string;
  result: string;
  improve: string;
  nextStep: string;
};

type SkillCheckAnswer = {
  id: string;
  answerIsSkill: boolean;
};

type SavedJobSkillsState = {
  selectedExperiences: string[];
  skillCheckAnswers: SkillCheckAnswer[];
  confidence: Record<string, Confidence>;
  chosenSkillId: string;
  evidence: Evidence;
};

const skills: Skill[] = [
  {
    id: "communication",
    title: "Communication",
    simpleTitle: "Talking and listening clearly",
    description: "I can explain ideas, listen properly, and change my words for different people.",
    employerLine: "share information clearly and listen to what others need",
    colour: "teal",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    simpleTitle: "Working well with others",
    description: "I can work in a team, include people, and help the group finish the task.",
    employerLine: "work with other people to reach a shared goal",
    colour: "blue",
  },
  {
    id: "presentation",
    title: "Presentation",
    simpleTitle: "Speaking to a group",
    description: "I can organise my ideas and speak so other people can follow me.",
    employerLine: "present ideas with confidence and prepare for an audience",
    colour: "pink",
  },
  {
    id: "money",
    title: "Financial Literacy",
    simpleTitle: "Making smart money choices",
    description: "I can compare costs, plan spending, and think before I buy.",
    employerLine: "make sensible choices with money, time, and resources",
    colour: "gold",
  },
  {
    id: "self",
    title: "Self-management",
    simpleTitle: "Getting myself organised",
    description: "I can manage my time, emotions, energy, and responsibilities.",
    employerLine: "stay organised, reliable, and ready to learn",
    colour: "green",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    simpleTitle: "Coping when plans change",
    description: "I can stay calm, try another way, and learn from change.",
    employerLine: "adapt when plans change and keep a positive attitude",
    colour: "orange",
  },
  {
    id: "thinking",
    title: "Critical Thinking",
    simpleTitle: "Checking information",
    description: "I can ask questions, compare ideas, and decide what evidence makes sense.",
    employerLine: "check information carefully before making decisions",
    colour: "violet",
  },
  {
    id: "initiative",
    title: "Initiative",
    simpleTitle: "Starting without being asked",
    description: "I can notice what needs doing and take a useful first step.",
    employerLine: "take initiative and follow a task through",
    colour: "red",
  },
  {
    id: "problem",
    title: "Problem Solving",
    simpleTitle: "Figuring out what to do next",
    description: "I can spot a problem, test options, and choose a workable solution.",
    employerLine: "solve problems by thinking through options",
    colour: "cyan",
  },
  {
    id: "digital",
    title: "Digital Literacy",
    simpleTitle: "Using tech safely and well",
    description: "I can use digital tools, check online information, and protect my privacy.",
    employerLine: "use technology safely, responsibly, and effectively",
    colour: "indigo",
  },
  {
    id: "creativity",
    title: "Creativity",
    simpleTitle: "Coming up with ideas",
    description: "I can imagine options, try ideas, and make something useful or original.",
    employerLine: "generate ideas and turn them into practical action",
    colour: "lime",
  },
  {
    id: "planning",
    title: "Planning",
    simpleTitle: "Breaking tasks down",
    description: "I can set a goal, plan the steps, and check my progress.",
    employerLine: "plan tasks, manage time, and keep track of progress",
    colour: "slate",
  },
];

const lessonFocusSkillIds = ["collaboration", "communication"];
const lessonFocusSkills = skills.filter((skill) => lessonFocusSkillIds.includes(skill.id));

const lessonVisuals = [
  {
    id: "collaboration-hero",
    title: "Collaboration",
    label: "Helped the group finish",
    description: "Sharing roles, checking progress, encouraging others, and helping the team complete the task.",
    image: "/assets/video-opener/collaboration-hero-v1.png",
  },
  {
    id: "communication-hero",
    title: "Communication",
    label: "Explained, listened, asked",
    description: "Explaining ideas clearly, listening properly, and asking questions that help the group understand.",
    image: "/assets/video-opener/communication-hero-v1.png",
  },
  {
    id: "collaboration-detail",
    title: "Shared Roles",
    label: "Collaboration evidence",
    description: "Look for the proof: divided tasks, shared planning, useful support, and everyone contributing.",
    image: "/assets/video-opener/collaboration-detail-v1.png",
  },
  {
    id: "communication-detail",
    title: "Active Listening",
    label: "Communication evidence",
    description: "Look for the proof: eye contact, note-taking, turn-taking, and questions that move the idea forward.",
    image: "/assets/video-opener/communication-detail-v1.png",
  },
];

const skillCheckCards = [
  {
    id: "communication",
    label: "Communication",
    clue: "Talking, listening, checking, and explaining clearly.",
    isSkill: true,
  },
  {
    id: "happy",
    label: "Happy",
    clue: "A feeling or emotion someone might have.",
    isSkill: false,
  },
  {
    id: "collaboration",
    label: "Collaboration",
    clue: "Working with others to get something done.",
    isSkill: true,
  },
  {
    id: "barista-course",
    label: "Barista course",
    clue: "Training that teaches someone to make coffee.",
    isSkill: false,
  },
];

const experiences: Experience[] = [
  {
    id: "group-task",
    label: "Finished a group assignment",
    detail: "Shared jobs, checked progress, or helped the group get unstuck.",
    skills: ["collaboration", "communication", "planning", "problem"],
  },
  {
    id: "sport",
    label: "Played team sport or coached someone",
    detail: "Listened, practised, encouraged others, or changed tactics.",
    skills: ["collaboration", "communication", "flexibility", "self"],
  },
  {
    id: "home",
    label: "Helped at home or cared for someone",
    detail: "Handled responsibility, followed routines, or stayed calm under pressure.",
    skills: ["self", "planning", "initiative", "communication"],
  },
  {
    id: "creative",
    label: "Made something creative",
    detail: "Designed, wrote, built, edited, cooked, performed, or made content.",
    skills: ["creativity", "planning", "digital", "presentation"],
  },
  {
    id: "tech",
    label: "Solved a tech problem",
    detail: "Worked out a fix, found a tutorial, or helped someone use a tool.",
    skills: ["digital", "problem", "thinking", "initiative"],
  },
  {
    id: "money-choice",
    label: "Made a smart money choice",
    detail: "Compared prices, saved for something, or avoided wasting money.",
    skills: ["money", "thinking", "planning", "self"],
  },
  {
    id: "presentation",
    label: "Presented or performed",
    detail: "Spoke to a class, audience, team, family, or online community.",
    skills: ["presentation", "communication", "self", "creativity"],
  },
  {
    id: "volunteer",
    label: "Helped in the community",
    detail: "Volunteered, helped at school, supported a club, or took a useful role.",
    skills: ["initiative", "collaboration", "communication", "flexibility"],
  },
];

const confidenceLabels: Record<Confidence, string> = {
  strong: "I can do this",
  help: "With help",
  practice: "Practise next",
};

const initialEvidence: Evidence = {
  experience: "",
  situation: "",
  action: "",
  result: "",
  improve: "Planning",
  nextStep: "Use a simple checklist before my next group task.",
};

const githubPagesUrl = "https://emmanuelcc-ict.github.io/Year-9-Job-Skills/";
const microsoftFormsUrl = "https://forms.cloud.microsoft/r/g0w8hFceqZ";

function readSavedState(): SavedJobSkillsState {
  const fallback = {
    selectedExperiences: [],
    skillCheckAnswers: [],
    confidence: {},
    chosenSkillId: "communication",
    evidence: initialEvidence,
  };

  if (typeof window === "undefined") return fallback;

  const saved = window.localStorage.getItem("skill-sprint-state");
  if (!saved) return fallback;

  try {
    const parsed = JSON.parse(saved) as Partial<SavedJobSkillsState>;
    return {
      selectedExperiences: parsed.selectedExperiences ?? [],
      skillCheckAnswers: Array.isArray(parsed.skillCheckAnswers)
        ? parsed.skillCheckAnswers.filter((answer) => skillCheckCards.some((card) => card.id === answer.id))
        : [],
      confidence: parsed.confidence ?? {},
      chosenSkillId:
        parsed.chosenSkillId && lessonFocusSkillIds.includes(parsed.chosenSkillId)
          ? parsed.chosenSkillId
          : "communication",
      evidence: { ...initialEvidence, ...parsed.evidence },
    };
  } catch {
    window.localStorage.removeItem("skill-sprint-state");
    return fallback;
  }
}

function sentenceCase(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function App() {
  const [initialState] = useState(readSavedState);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>(initialState.selectedExperiences);
  const [skillCheckAnswers, setSkillCheckAnswers] = useState<SkillCheckAnswer[]>(initialState.skillCheckAnswers);
  const [confidence, setConfidence] = useState<Record<string, Confidence>>(initialState.confidence);
  const [chosenSkillId, setChosenSkillId] = useState(initialState.chosenSkillId);
  const [evidence, setEvidence] = useState<Evidence>(initialState.evidence);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(
      "skill-sprint-state",
      JSON.stringify({ selectedExperiences, skillCheckAnswers, confidence, chosenSkillId, evidence }),
    );
  }, [selectedExperiences, skillCheckAnswers, confidence, chosenSkillId, evidence]);

  const matchedSkillIds = useMemo(() => {
    const ids = new Set<string>();
    selectedExperiences.forEach((experienceId) => {
      experiences.find((experience) => experience.id === experienceId)?.skills.forEach((skillId) => ids.add(skillId));
    });
    return ids;
  }, [selectedExperiences]);

  const spotlightSkills = useMemo(() => {
    const matchedFocusSkills = lessonFocusSkills.filter((skill) => matchedSkillIds.has(skill.id));
    if (matchedFocusSkills.length === 0) return lessonFocusSkills;
    return matchedFocusSkills;
  }, [matchedSkillIds]);

  const chosenSkill = lessonFocusSkills.find((skill) => skill.id === chosenSkillId) ?? lessonFocusSkills[0];
  const selectedExperience = experiences.find((experience) => experience.id === evidence.experience);
  const experienceText = selectedExperience?.label ?? "a school, hobby, home, sport, or community experience";
  const actionText = evidence.action.trim() || "took action, worked with others, and kept the task moving";
  const resultText = evidence.result.trim() || "the task moved forward and I learned what to try next";

  const jobSpeak = `In ${experienceText.toLowerCase()}, I used ${chosenSkill.simpleTitle.toLowerCase()} when I ${actionText}. This helped because ${resultText}. This shows I can ${chosenSkill.employerLine}.`;
  const interviewAnswer = `${sentenceCase(evidence.situation) || `In ${experienceText.toLowerCase()}, there was a task that needed to be done.`} My role was to help move it forward. I ${actionText}. As a result, ${resultText}.`;
  const resumeBullets = [
    `Used ${chosenSkill.title.toLowerCase()} skills during ${experienceText.toLowerCase()} by ${actionText}.`,
    `Showed I can ${chosenSkill.employerLine} through a real example from my life.`,
  ];
  const skillCheckScore = skillCheckAnswers.filter((answer) => {
    const card = skillCheckCards.find((item) => item.id === answer.id);
    return card?.isSkill === answer.answerIsSkill;
  }).length;
  const skillCheckPower = Math.round((skillCheckScore / skillCheckCards.length) * 100);

  const progressParts = [
    skillCheckAnswers.length === skillCheckCards.length,
    selectedExperiences.length > 0,
    Object.keys(confidence).length >= 2,
    Boolean(evidence.experience),
    Boolean(evidence.action.trim()),
    Boolean(evidence.result.trim()),
  ];
  const progress = Math.round((progressParts.filter(Boolean).length / progressParts.length) * 100);

  function toggleExperience(id: string) {
    setSelectedExperiences((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function updateEvidence(key: keyof Evidence, value: string) {
    setEvidence((current) => ({ ...current, [key]: value }));
  }

  function answerSkillCheck(id: string, answerIsSkill: boolean) {
    setSkillCheckAnswers((current) => {
      const withoutCurrent = current.filter((answer) => answer.id !== id);
      return [...withoutCurrent, { id, answerIsSkill }];
    });
  }

  async function copyJobSpeak() {
    await navigator.clipboard.writeText(jobSpeak);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function resetWork() {
    setSelectedExperiences([]);
    setSkillCheckAnswers([]);
    setConfidence({});
    setChosenSkillId("communication");
    setEvidence(initialEvidence);
    window.localStorage.removeItem("skill-sprint-state");
  }

  function openPrintDialog() {
    window.setTimeout(() => window.print(), 60);
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Year 9 enterprise skills</p>
            <h1>Year 9 Job Skills: turn everyday experience into job speak</h1>
            <p className="hero-lede">
              As you get closer to 14, casual and part-time work starts becoming real for some people. Not everyone
              will look for work straight away, but it is useful to start thinking about your skills and experience from
              an employability perspective.
            </p>
            <a className="repo-link" href={githubPagesUrl}>
              GitHub Pages version
            </a>
            <div className="progress-wrap" aria-label={`Progress ${progress} percent`}>
              <div className="progress-top">
                <span>Takeaway progress</span>
                <strong>{progress}%</strong>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <div className="video-slot" aria-label="Opening video slot">
            <video
              className="video-player"
              controls
              poster="/assets/video-opener/opener-poster-v1.png"
              preload="metadata"
            >
              <source src="/assets/intro-employability-skills.mp4" type="video/mp4" />
              <track
                default
                kind="captions"
                label="English"
                src="/assets/intro-employability-skills.vtt"
                srcLang="en"
              />
            </video>
            <div className="video-badge">Video 1: What are employability skills?</div>
          </div>
        </div>
      </section>

      <section className="quote-band" aria-label="Employer messages">
        <article>
          <strong>Employers say</strong>
          <p>Speak clearly, listen well, and think about what the other person needs to understand.</p>
        </article>
        <article>
          <strong>Employers say</strong>
          <p>Show examples of problem solving, teamwork, initiative, and how you respond to change.</p>
        </article>
        <article>
          <strong>Employers say</strong>
          <p>Values matter: bring yourself, respect others, and add something positive to the group.</p>
        </article>
      </section>

      <section className="section-shell skill-check-preview">
        <div className="section-heading">
          <p className="eyebrow">Quick check</p>
          <h2>Can you spot an employability skill?</h2>
          <p>Sort each card. Skills transfer; emotions, courses, and qualifications do not.</p>
        </div>

        <div className="skill-check-score" aria-label={`${skillCheckScore} of ${skillCheckCards.length} correct`}>
          <strong>Skill Bot power</strong>
          <span>{skillCheckScore} correct</span>
          <div>
            <i style={{ width: `${skillCheckPower}%` }} />
          </div>
        </div>

        <div className="skill-check-board">
          {skillCheckCards.map((card) => {
            const answer = skillCheckAnswers.find((item) => item.id === card.id);
            const isCorrect = answer ? answer.answerIsSkill === card.isSkill : false;

            return (
              <article
                className={`skill-check-card ${answer ? (isCorrect ? "correct" : "try-again") : ""}`}
                key={card.id}
              >
                <p>{card.clue}</p>
                <h3>{card.label}</h3>
                <div className="sort-mini-actions">
                  <button
                    aria-pressed={answer?.answerIsSkill === true}
                    onClick={() => answerSkillCheck(card.id, true)}
                    type="button"
                  >
                    Skill
                  </button>
                  <button
                    aria-pressed={answer?.answerIsSkill === false}
                    onClick={() => answerSkillCheck(card.id, false)}
                    type="button"
                  >
                    Not a skill
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell lesson-video-section">
        <div className="section-heading">
          <p className="eyebrow">Skill chunks</p>
          <h2>Now zoom in on two skills</h2>
          <p>Watch the short skill intro, then choose the moments you recognise from your own life.</p>
        </div>

        <div className="lesson-video-grid">
          <article className="lesson-video-card">
            <video controls poster="/assets/video-opener/communication-hero-v1.png" preload="metadata">
              <source src="/assets/communication-explainer.mp4" type="video/mp4" />
              <track default kind="captions" label="English" src="/assets/communication-explainer.vtt" srcLang="en" />
            </video>
            <h3>Video 2: Communication</h3>
          </article>
          <article className="lesson-video-card">
            <video controls poster="/assets/video-opener/collaboration-hero-v1.png" preload="metadata">
              <source src="/assets/collaboration-explainer.mp4" type="video/mp4" />
              <track default kind="captions" label="English" src="/assets/collaboration-explainer.vtt" srcLang="en" />
            </video>
            <h3>Video 3: Collaboration</h3>
          </article>
        </div>
      </section>

      <section className="section-shell student-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Before you start</p>
          <h2>No names in this app</h2>
          <p>Build your examples here. Your name and PC class are only collected later in Microsoft Forms.</p>
        </div>

        <div className="student-panel">
          <p className="privacy-note">
            Privacy note: this app does not send your answers anywhere. Your work stays on this device unless you
            print, save, or share it. It does not ask for your name, PC class, or surname. Do not include private
            details about yourself or anyone else.
          </p>
        </div>
      </section>

      <section className="section-shell focus-section">
        <div className="section-heading">
          <p className="eyebrow">Today&apos;s focus</p>
          <h2>Start with collaboration and communication</h2>
          <p>
            We will introduce all 12 enterprise skills, but this lesson builds two strong examples students can actually
            explain: how they work with others, and how they communicate.
          </p>
        </div>

        <div className="visual-grid">
          {lessonVisuals.map((visual) => (
            <article className="visual-card" key={visual.id}>
              <img alt={`${visual.title}: ${visual.description}`} src={visual.image} />
              <div>
                <p>{visual.label}</p>
                <h3>{visual.title}</h3>
                <span>{visual.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Step 1</p>
          <h2>Pick moments from your life</h2>
          <p>Everyday activities count. Choose any that match you.</p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <button
              className={`experience-card ${selectedExperiences.includes(experience.id) ? "selected" : ""}`}
              key={experience.id}
              onClick={() => toggleExperience(experience.id)}
              type="button"
              aria-pressed={selectedExperiences.includes(experience.id)}
            >
              <span>{experience.label}</span>
              <small>{experience.detail}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell tone-light">
        <div className="section-heading">
          <p className="eyebrow">Step 2</p>
          <h2>Your matched skills</h2>
          <p>Rate a few quickly. This is not a test; it is a confidence check.</p>
        </div>

        <div className="skill-grid">
          {spotlightSkills.map((skill) => (
            <article className={`skill-card colour-${skill.colour}`} key={skill.id}>
              <div className="skill-card-top">
                <span className="skill-mark">{skill.title.slice(0, 2)}</span>
                <strong>{skill.title}</strong>
              </div>
              <h3>{skill.simpleTitle}</h3>
              <p>{skill.description}</p>
              <div className="confidence-row" aria-label={`${skill.title} confidence`}>
                {(Object.keys(confidenceLabels) as Confidence[]).map((level) => (
                  <button
                    className={confidence[skill.id] === level ? "active" : ""}
                    key={level}
                    onClick={() => setConfidence((current) => ({ ...current, [skill.id]: level }))}
                    type="button"
                  >
                    {confidenceLabels[level]}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="builder-section">
        <div className="builder-panel">
          <div className="section-heading">
            <p className="eyebrow">Step 3</p>
            <h2>Build one strong example</h2>
            <p>Use one real moment. Short answers are fine.</p>
          </div>

          <div className="form-grid">
            <label>
              Experience
              <select value={evidence.experience} onChange={(event) => updateEvidence("experience", event.target.value)}>
                <option value="">Choose one</option>
                {experiences.map((experience) => (
                  <option key={experience.id} value={experience.id}>
                    {experience.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Skill to show
              <select value={chosenSkillId} onChange={(event) => setChosenSkillId(event.target.value)}>
                {lessonFocusSkills.map((skill) => (
                  <option key={skill.id} value={skill.id}>
                    {skill.title} - {skill.simpleTitle}
                  </option>
                ))}
              </select>
            </label>

            <label className="wide">
              What was happening?
              <textarea
                value={evidence.situation}
                onChange={(event) => updateEvidence("situation", event.target.value)}
                placeholder="Example: Our group had to finish a poster, but we were running out of time."
              />
            </label>

            <label>
              What did you do?
              <textarea
                value={evidence.action}
                onChange={(event) => updateEvidence("action", event.target.value)}
                placeholder="Example: I split up the tasks and checked what each person could finish."
              />
            </label>

            <label>
              What changed because of it?
              <textarea
                value={evidence.result}
                onChange={(event) => updateEvidence("result", event.target.value)}
                placeholder="Example: We finished on time and our ideas were clearer."
              />
            </label>
          </div>
        </div>

        <aside className="translation-panel" aria-label="Job speak translation">
          <p className="eyebrow">Step 4</p>
          <h2>Job speak translator</h2>
          <div className="translation-output">{jobSpeak}</div>
          <div className="button-row">
            <button type="button" onClick={copyJobSpeak}>
              {copied ? "Copied" : "Copy"}
            </button>
            <button type="button" onClick={openPrintDialog}>
              Save PDF
            </button>
            <button type="button" className="secondary" onClick={resetWork}>
              Reset
            </button>
          </div>
        </aside>
      </section>

      <section className="takeaway-section">
        <div className="section-heading">
          <p className="eyebrow">Takeaway</p>
          <h2>My Employability Snapshot</h2>
          <p>This section is designed as a one-page profile to save as a PDF.</p>
        </div>

        <div className="pdf-action-panel" aria-label="Save your skills PDF">
          <div>
            <p className="eyebrow">Save your PDF</p>
            <h3>Download your one-page skills profile</h3>
            <ol>
              <li>Click Save as PDF.</li>
              <li>In the print window, choose Save as PDF.</li>
              <li>If it goes onto page 2, choose Scale 90% or remove one extra example.</li>
            </ol>
          </div>
          <button type="button" onClick={openPrintDialog}>
            Save as PDF
          </button>
        </div>

        <div className="takeaway-card">
          <div className="takeaway-header">
            <img className="snapshot-logo" src="/assets/ecc-logo.png" alt="Emmanuel Catholic College logo" />
            <div className="snapshot-title-block">
              <p>Year 9 Job Skills</p>
              <h3>My Skills PDF</h3>
              <span className="snapshot-tagline">Communication + Collaboration profile</span>
            </div>
          </div>

          <div className="takeaway-grid">
            <section>
              <h4>My top skill example</h4>
              <p>{jobSpeak}</p>
            </section>
            <section>
              <h4>Resume bullets</h4>
              <ul>
                {resumeBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
            <section>
              <h4>Interview answer</h4>
              <p>{interviewAnswer}</p>
            </section>
            <section>
              <h4>Skill to build next</h4>
              <label>
                Focus skill
                <input value={evidence.improve} onChange={(event) => updateEvidence("improve", event.target.value)} />
              </label>
              <label>
                My next step
                <input value={evidence.nextStep} onChange={(event) => updateEvidence("nextStep", event.target.value)} />
              </label>
            </section>
          </div>
        </div>

        <div className="handoff-panel" aria-label="Submit your snapshot">
          <div>
            <p className="eyebrow">Teacher hand-in</p>
            <h3>Upload your snapshot in Microsoft Forms</h3>
            <p>
              Step 1: click Save as PDF and save the file to your device. Step 2: open the Microsoft Form, upload that
              PDF, and enter your name and PC class there in the approved school system.
            </p>
          </div>
          <a className="form-link-button" href={microsoftFormsUrl} rel="noreferrer" target="_blank">
            Open upload form
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
