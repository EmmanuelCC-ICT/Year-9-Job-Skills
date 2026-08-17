const skills = [
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

const experiences = [
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

const confidenceLabels = {
  strong: "I can do this",
  help: "With help",
  practice: "Practise next",
};

const lessonFocusSkillIds = ["collaboration", "communication"];
const lessonFocusSkills = skills.filter((skill) => lessonFocusSkillIds.includes(skill.id));

const pcClasses = [
  "9 Francis",
  "9 Frassati",
  "9 Lisieux",
  "9 MacKillop",
  "9 More",
  "9 Romero",
  "9 Siena",
  "9 Teresa",
];

const initialState = {
  student: {
    firstName: "",
    pcClass: "",
  },
  selectedExperiences: [],
  confidence: {},
  chosenSkillId: "communication",
  evidence: {
    experience: "",
    situation: "",
    action: "",
    result: "",
    improve: "Planning",
    nextStep: "Use a simple checklist before my next group task.",
  },
};

let state = loadState();

function $(id) {
  return document.getElementById(id);
}

function loadState() {
  try {
    const saved = window.localStorage.getItem("year-9-job-skills-state");
    const parsed = saved ? { ...initialState, ...JSON.parse(saved) } : structuredClone(initialState);
    parsed.student = { ...initialState.student, ...parsed.student };
    parsed.evidence = { ...initialState.evidence, ...parsed.evidence };
    if (!lessonFocusSkillIds.includes(parsed.chosenSkillId)) {
      parsed.chosenSkillId = "communication";
    }
    return parsed;
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  window.localStorage.setItem("year-9-job-skills-state", JSON.stringify(state));
}

function sentenceCase(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function firstNameOnly(value) {
  return value.replace(/\s+.*/, "").slice(0, 24);
}

function chosenSkill() {
  return lessonFocusSkills.find((skill) => skill.id === state.chosenSkillId) || lessonFocusSkills[0];
}

function selectedExperience() {
  return experiences.find((experience) => experience.id === state.evidence.experience);
}

function getMatchedSkillIds() {
  const ids = new Set();
  state.selectedExperiences.forEach((experienceId) => {
    const experience = experiences.find((item) => item.id === experienceId);
    if (experience) experience.skills.forEach((skillId) => ids.add(skillId));
  });
  return ids;
}

function getSpotlightSkills() {
  const ids = getMatchedSkillIds();
  const matchedFocusSkills = lessonFocusSkills.filter((skill) => ids.has(skill.id));
  return matchedFocusSkills.length ? matchedFocusSkills : lessonFocusSkills;
}

function getOutputs() {
  const skill = chosenSkill();
  const experience = selectedExperience();
  const experienceText = experience ? experience.label : "a school, hobby, home, sport, or community experience";
  const actionText = state.evidence.action.trim() || "took action, worked with others, and kept the task moving";
  const resultText = state.evidence.result.trim() || "the task moved forward and I learned what to try next";
  const situationText =
    sentenceCase(state.evidence.situation) || `In ${experienceText.toLowerCase()}, there was a task that needed to be done.`;

  const jobSpeak = `In ${experienceText.toLowerCase()}, I used ${skill.simpleTitle.toLowerCase()} when I ${actionText}. This helped because ${resultText}. This shows I can ${skill.employerLine}.`;
  const interviewAnswer = `${situationText} My role was to help move it forward. I ${actionText}. As a result, ${resultText}.`;
  const resumeBullets = [
    `Used ${skill.title.toLowerCase()} skills during ${experienceText.toLowerCase()} by ${actionText}.`,
    `Showed I can ${skill.employerLine} through a real example from my life.`,
  ];

  return { jobSpeak, interviewAnswer, resumeBullets };
}

function getProgress() {
  const parts = [
    Boolean(state.student.firstName.trim()),
    Boolean(state.student.pcClass),
    state.selectedExperiences.length > 0,
    Object.keys(state.confidence).length >= 2,
    Boolean(state.evidence.experience),
    Boolean(state.evidence.action.trim()),
    Boolean(state.evidence.result.trim()),
  ];
  return Math.round((parts.filter(Boolean).length / parts.length) * 100);
}

function renderStudent() {
  $("first-name-input").value = state.student.firstName;
  $("snapshot-first-name").textContent = state.student.firstName.trim() || "First name";
  $("snapshot-pc-class").textContent = state.student.pcClass || "PC class";

  const pcGrid = $("pc-grid");
  pcGrid.innerHTML = "";

  pcClasses.forEach((pcClass) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = pcClass;
    button.className = state.student.pcClass === pcClass ? "selected" : "";
    button.setAttribute("aria-pressed", String(state.student.pcClass === pcClass));
    button.addEventListener("click", () => {
      state.student.pcClass = pcClass;
      saveState();
      render();
    });
    pcGrid.append(button);
  });
}

function renderExperiences() {
  const grid = $("experience-grid");
  grid.innerHTML = "";

  experiences.forEach((experience) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `experience-card ${state.selectedExperiences.includes(experience.id) ? "selected" : ""}`;
    button.setAttribute("aria-pressed", String(state.selectedExperiences.includes(experience.id)));
    button.innerHTML = `<span>${experience.label}</span><small>${experience.detail}</small>`;
    button.addEventListener("click", () => {
      const selected = state.selectedExperiences.includes(experience.id);
      state.selectedExperiences = selected
        ? state.selectedExperiences.filter((id) => id !== experience.id)
        : [...state.selectedExperiences, experience.id];
      saveState();
      render();
    });
    grid.append(button);
  });
}

function renderSkills() {
  const grid = $("skill-grid");
  grid.innerHTML = "";

  getSpotlightSkills().forEach((skill) => {
    const card = document.createElement("article");
    card.className = `skill-card colour-${skill.colour}`;
    card.innerHTML = `
      <div class="skill-card-top">
        <span class="skill-mark">${skill.title.slice(0, 2)}</span>
        <strong>${skill.title}</strong>
      </div>
      <h3>${skill.simpleTitle}</h3>
      <p>${skill.description}</p>
      <div class="confidence-row" aria-label="${skill.title} confidence"></div>
    `;

    const row = card.querySelector(".confidence-row");
    Object.entries(confidenceLabels).forEach(([level, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.className = state.confidence[skill.id] === level ? "active" : "";
      button.addEventListener("click", () => {
        state.confidence[skill.id] = level;
        saveState();
        render();
      });
      row.append(button);
    });

    grid.append(card);
  });
}

function renderSelects() {
  const experienceSelect = $("experience-select");
  const skillSelect = $("skill-select");

  if (experienceSelect.options.length === 1) {
    experiences.forEach((experience) => {
      const option = document.createElement("option");
      option.value = experience.id;
      option.textContent = experience.label;
      experienceSelect.append(option);
    });
  }

  if (skillSelect.options.length === 0) {
    lessonFocusSkills.forEach((skill) => {
      const option = document.createElement("option");
      option.value = skill.id;
      option.textContent = `${skill.title} - ${skill.simpleTitle}`;
      skillSelect.append(option);
    });
  }

  experienceSelect.value = state.evidence.experience;
  skillSelect.value = state.chosenSkillId;
}

function renderInputs() {
  $("situation-input").value = state.evidence.situation;
  $("action-input").value = state.evidence.action;
  $("result-input").value = state.evidence.result;
  $("improve-input").value = state.evidence.improve;
  $("next-step-input").value = state.evidence.nextStep;
}

function renderOutputs() {
  const progress = getProgress();
  const outputs = getOutputs();

  $("progress-percent").textContent = `${progress}%`;
  $("progress-fill").style.width = `${progress}%`;
  $("job-speak-output").textContent = outputs.jobSpeak;
  $("snapshot-example").textContent = outputs.jobSpeak;
  $("interview-answer").textContent = outputs.interviewAnswer;

  const bullets = $("resume-bullets");
  bullets.innerHTML = "";
  outputs.resumeBullets.forEach((bullet) => {
    const item = document.createElement("li");
    item.textContent = bullet;
    bullets.append(item);
  });
}

function render() {
  renderStudent();
  renderExperiences();
  renderSkills();
  renderSelects();
  renderInputs();
  renderOutputs();
}

function bindForm() {
  $("first-name-input").addEventListener("input", (event) => {
    state.student.firstName = firstNameOnly(event.target.value);
    saveState();
    renderStudent();
    renderOutputs();
  });

  $("experience-select").addEventListener("change", (event) => {
    state.evidence.experience = event.target.value;
    saveState();
    renderOutputs();
  });

  $("skill-select").addEventListener("change", (event) => {
    state.chosenSkillId = event.target.value;
    saveState();
    renderOutputs();
  });

  [
    ["situation-input", "situation"],
    ["action-input", "action"],
    ["result-input", "result"],
    ["improve-input", "improve"],
    ["next-step-input", "nextStep"],
  ].forEach(([inputId, key]) => {
    $(inputId).addEventListener("input", (event) => {
      state.evidence[key] = event.target.value;
      saveState();
      renderOutputs();
    });
  });

  $("copy-button").addEventListener("click", async () => {
    const output = getOutputs().jobSpeak;
    await navigator.clipboard.writeText(output);
    $("copy-button").textContent = "Copied";
    window.setTimeout(() => {
      $("copy-button").textContent = "Copy";
    }, 1500);
  });

  $("print-button").addEventListener("click", () => window.print());

  $("reset-button").addEventListener("click", () => {
    state = structuredClone(initialState);
    window.localStorage.removeItem("year-9-job-skills-state");
    render();
  });
}

bindForm();
render();
