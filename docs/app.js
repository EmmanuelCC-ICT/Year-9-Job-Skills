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

const communicationMoments = [
  {
    id: "communication-question",
    label: "Asked a question when something was unclear",
    detail: "In class, at training, at home, or when learning a new task.",
    skillId: "communication",
  },
  {
    id: "communication-explained",
    label: "Explained an idea so someone else understood",
    detail: "Helped a friend, sibling, teammate, or group member follow what to do.",
    skillId: "communication",
  },
  {
    id: "communication-listened",
    label: "Listened properly before replying",
    detail: "Paid attention, remembered details, or checked you understood.",
    skillId: "communication",
  },
  {
    id: "communication-adjusted",
    label: "Changed how you said something for the person",
    detail: "Used different words with a teacher, coach, customer, younger child, or friend.",
    skillId: "communication",
  },
];

const collaborationMoments = [
  {
    id: "collaboration-group-task",
    label: "Worked with others to finish a task",
    detail: "Shared jobs, checked progress, or helped the group stay on track.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-responsibility",
    label: "Took responsibility for your part",
    detail: "Completed your job, turned up prepared, or kept to time.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-supported",
    label: "Supported someone else in the group",
    detail: "Encouraged them, helped them practise, or noticed when they needed a hand.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-valued-ideas",
    label: "Used someone else's idea to improve the result",
    detail: "Listened, included their suggestion, or helped the group choose the best option.",
    skillId: "collaboration",
  },
];

const experiences = [...communicationMoments, ...collaborationMoments];

const clarifyingPrompts = {
  communication: {
    questions: [
      "Who needed to understand you?",
      "What did you listen for, say, ask, or check?",
      "How did that help, even in a small way?",
    ],
    situation: "Example: Someone needed instructions, help, or a clearer explanation.",
    action: "Example: I asked a question, explained the next step, or checked I understood.",
    result: "Example: They knew what to do next, or the task was less confusing.",
    transfer: "listen, ask questions, check details, and explain small things clearly",
  },
  collaboration: {
    questions: [
      "Who were you working with?",
      "What was your part or helpful action?",
      "What did the group get done or improve?",
    ],
    situation: "Example: Our group had to finish something together.",
    action: "Example: I did my part, helped someone, shared an idea, or kept the group moving.",
    result: "Example: We finished a small part, worked more fairly, or understood the plan better.",
    transfer: "do their part, include others, support the group, and help a task move forward",
  },
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

const stages = [
  {
    id: "start",
    short: "Launch",
    title: "Launch",
    subtitle: "Start your private job-skills snapshot.",
    hint: "Add a first name and PC class to earn the launch badge.",
  },
  {
    id: "brief",
    short: "Brief",
    title: "Big Picture",
    subtitle: "Spot what employers mean when they ask for enterprise skills.",
    hint: "Start with the overall idea, then unpack two skills you already use.",
  },
  {
    id: "communication",
    short: "Comm",
    title: "Communication",
    subtitle: "Notice that communication is listening, speaking, checking, and choosing words.",
    hint: "Look for familiar communication moves you have already used.",
  },
  {
    id: "communication-life",
    short: "My Comm",
    title: "My Communication",
    subtitle: "Pick the communication moments you recognise from your life.",
    hint: "Choose at least one communication example that makes you think, yep, I have done that.",
  },
  {
    id: "collaboration",
    short: "Team",
    title: "Collaboration",
    subtitle: "Notice that collaboration is teamwork you can explain.",
    hint: "Look for familiar teamwork moves you have already used.",
  },
  {
    id: "collaboration-life",
    short: "My Team",
    title: "My Teamwork",
    subtitle: "Pick the teamwork moments you recognise from your life.",
    hint: "Choose at least one teamwork example that makes you think, yep, I have done that.",
  },
  {
    id: "build",
    short: "Build",
    title: "Story Builder",
    subtitle: "Turn one moment into resume and interview language.",
    hint: "Choose an experience, then add what you did and what changed.",
  },
  {
    id: "unlock",
    short: "Unlock",
    title: "Snapshot Unlocked",
    subtitle: "Use your finished job-speak example as a take-away.",
    hint: "Print or save the snapshot when it is ready.",
  },
];

const celebrationCopy = {
  start: ["Launch badge unlocked", "First name only and PC class are set. Good privacy choices."],
  brief: ["Big picture unlocked", "Enterprise skills are just useful skills you can take into different settings."],
  communication: ["Communication unlocked", "Speaking and listening both count. You probably use this more than you think."],
  "communication-life": ["Communication evidence found", "That is a real example you could explain to an employer one day."],
  collaboration: ["Teamwork unlocked", "Collaboration is teamwork you can point to and explain."],
  "collaboration-life": ["Teamwork evidence found", "You have spotted a real example of working well with others."],
  build: ["Story builder unlocked", "That example is turning into proper job speak."],
  unlock: ["Snapshot unlocked", "Your employability snapshot is ready to use."],
};

const initialState = {
  currentStage: "start",
  visitedStages: ["start"],
  celebratedStages: [],
  student: {
    firstName: "",
    pcClass: "",
  },
  selectedCommunicationMoments: [],
  selectedCollaborationMoments: [],
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
    parsed.selectedCommunicationMoments = Array.isArray(parsed.selectedCommunicationMoments)
      ? parsed.selectedCommunicationMoments
      : (parsed.selectedExperiences || []).filter((id) => communicationMoments.some((moment) => moment.id === id));
    parsed.selectedCollaborationMoments = Array.isArray(parsed.selectedCollaborationMoments)
      ? parsed.selectedCollaborationMoments
      : (parsed.selectedExperiences || []).filter((id) => collaborationMoments.some((moment) => moment.id === id));
    const validStageIds = stages.map((stage) => stage.id);
    if (!validStageIds.includes(parsed.currentStage)) {
      parsed.currentStage = "start";
    }
    parsed.visitedStages = Array.isArray(parsed.visitedStages)
      ? [...new Set(["start", ...parsed.visitedStages.filter((stageId) => validStageIds.includes(stageId))])]
      : ["start"];
    parsed.celebratedStages = Array.isArray(parsed.celebratedStages)
      ? parsed.celebratedStages.filter((stageId) => validStageIds.includes(stageId))
      : [];
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

function getOutputs() {
  const skill = chosenSkill();
  const prompt = clarifyingPrompts[skill.id] || clarifyingPrompts.communication;
  const experience = selectedExperience();
  const experienceText = experience ? experience.label : "a school, hobby, home, sport, or community experience";
  const action = state.evidence.action.trim();
  const result = state.evidence.result.trim();
  const actionText = action || "did one specific thing that helped";
  const resultText = result || "there was a small improvement";
  const situationText =
    sentenceCase(state.evidence.situation) || `In ${experienceText.toLowerCase()}, there was a situation where I had to contribute.`;

  const jobSpeak = `In ${experienceText.toLowerCase()}, I practised ${skill.simpleTitle.toLowerCase()} when I ${actionText}. This helped because ${resultText}. This is a small but real example of building ${skill.title.toLowerCase()}, which could transfer to work because many jobs need people to ${prompt.transfer}.`;
  const interviewAnswer = `${situationText} I ${actionText}. The small result was that ${resultText}. I would describe this as early evidence of ${skill.title.toLowerCase()} because it connects one real action to one real result.`;
  const resumeBullets = [
    `Practised ${skill.title.toLowerCase()} during ${experienceText.toLowerCase()} by ${actionText}.`,
    `Can give a small real example of ${skill.simpleTitle.toLowerCase()} from my own experience.`,
  ];
  const feedback = !state.evidence.experience
    ? "Choose one real moment first. Small examples are fine."
    : !action
      ? "Add one specific thing you actually did. Keep it honest and concrete."
      : !result
        ? "Add the small result. It does not need to be dramatic; it just needs to be real."
        : "Good: this is right-sized because it links one real action to one real result.";

  return { feedback, jobSpeak, interviewAnswer, resumeBullets };
}

function getProgress() {
  const parts = [
    Boolean(state.student.firstName.trim()),
    Boolean(state.student.pcClass),
    state.visitedStages.includes("brief"),
    state.visitedStages.includes("communication"),
    state.selectedCommunicationMoments.length > 0,
    state.visitedStages.includes("collaboration"),
    state.selectedCollaborationMoments.length > 0,
    Boolean(state.evidence.experience),
    Boolean(state.evidence.action.trim()),
    Boolean(state.evidence.result.trim()),
  ];
  return Math.round((parts.filter(Boolean).length / parts.length) * 100);
}

function currentStageIndex() {
  return Math.max(
    0,
    stages.findIndex((stage) => stage.id === state.currentStage),
  );
}

function isStageComplete(stageId) {
  switch (stageId) {
    case "start":
      return Boolean(state.student.firstName.trim()) && Boolean(state.student.pcClass);
    case "brief":
      return state.visitedStages.includes("brief");
    case "communication":
      return state.visitedStages.includes("communication");
    case "communication-life":
      return state.selectedCommunicationMoments.length > 0;
    case "collaboration":
      return state.visitedStages.includes("collaboration");
    case "collaboration-life":
      return state.selectedCollaborationMoments.length > 0;
    case "build":
      return Boolean(state.evidence.experience) && Boolean(state.evidence.action.trim()) && Boolean(state.evidence.result.trim());
    case "unlock":
      return getProgress() === 100;
    default:
      return false;
  }
}

function completedStages() {
  return stages.filter((stage) => isStageComplete(stage.id));
}

function showCelebration(title, message) {
  const toast = $("celebration-toast");
  $("celebration-title").textContent = title;
  $("celebration-message").textContent = message;
  toast.classList.remove("show");
  window.setTimeout(() => toast.classList.add("show"), 20);
  window.clearTimeout(showCelebration.timeout);
  showCelebration.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function maybeCelebrate(stageId) {
  if (!isStageComplete(stageId) || state.celebratedStages.includes(stageId)) return;
  state.celebratedStages = [...state.celebratedStages, stageId];
  saveState();
  const [title, message] = celebrationCopy[stageId] || ["Badge unlocked", "Your snapshot is getting stronger."];
  showCelebration(title, message);
}

function setStage(stageId, shouldCelebrate = true) {
  if (!stages.some((stage) => stage.id === stageId)) return;
  state.currentStage = stageId;
  state.visitedStages = [...new Set([...state.visitedStages, stageId])];
  saveState();
  render();
  if (shouldCelebrate) maybeCelebrate(stageId);
  window.requestAnimationFrame(() => {
    $("mission-title").closest(".quest-hud").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderQuest() {
  const progress = getProgress();
  const badges = completedStages();
  const currentStage = stages[currentStageIndex()];

  document.querySelectorAll("[data-stage-panel]").forEach((panel) => {
    const isActive = panel.dataset.stagePanel === state.currentStage;
    panel.hidden = !isActive;
    panel.classList.toggle("active-stage", isActive);
  });

  $("mission-title").textContent = currentStage.title;
  $("mission-subtitle").textContent = currentStage.subtitle;
  $("mission-hint").textContent = currentStage.hint;
  $("xp-points").textContent = `${progress * 10} XP`;
  $("badge-count").textContent = `${badges.length} of ${stages.length} badges`;

  const rail = $("mission-rail");
  rail.innerHTML = "";
  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "mission-pill",
      stage.id === state.currentStage ? "active" : "",
      isStageComplete(stage.id) ? "complete" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.setAttribute("aria-pressed", String(stage.id === state.currentStage));
    button.innerHTML = `
      <span>${index + 1}</span>
      <strong>${stage.short}</strong>
      <small>${isStageComplete(stage.id) ? "Badge earned" : "In progress"}</small>
    `;
    button.addEventListener("click", () => setStage(stage.id));
    rail.append(button);
  });

  $("back-button").disabled = currentStageIndex() === 0;
  $("next-button").textContent = currentStageIndex() === stages.length - 1 ? "Stay here" : "Next mission";
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
      maybeCelebrate("start");
    });
    pcGrid.append(button);
  });
}

function renderMomentGrid(gridId, moments, selectedKey, skillId, celebrationStage) {
  const grid = $(gridId);
  grid.innerHTML = "";

  moments.forEach((experience) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `experience-card ${state[selectedKey].includes(experience.id) ? "selected" : ""}`;
    button.setAttribute("aria-pressed", String(state[selectedKey].includes(experience.id)));
    button.innerHTML = `<span>${experience.label}</span><small>${experience.detail}</small>`;
    button.addEventListener("click", () => {
      const selected = state[selectedKey].includes(experience.id);
      state[selectedKey] = selected
        ? state[selectedKey].filter((id) => id !== experience.id)
        : [...state[selectedKey], experience.id];
      if (!selected && !state.evidence.experience) {
        state.evidence.experience = experience.id;
        state.chosenSkillId = skillId;
      }
      saveState();
      render();
      maybeCelebrate(celebrationStage);
    });
    grid.append(button);
  });
}

function renderExperiences() {
  renderMomentGrid(
    "communication-experience-grid",
    communicationMoments,
    "selectedCommunicationMoments",
    "communication",
    "communication-life",
  );
  renderMomentGrid(
    "collaboration-experience-grid",
    collaborationMoments,
    "selectedCollaborationMoments",
    "collaboration",
    "collaboration-life",
  );
}

function renderSelects() {
  const experienceSelect = $("experience-select");
  const skillSelect = $("skill-select");

  if (experienceSelect.options.length === 1) {
    const groups = [
      ["Communication examples", communicationMoments],
      ["Teamwork examples", collaborationMoments],
    ];
    groups.forEach(([label, moments]) => {
      const group = document.createElement("optgroup");
      group.label = label;
      moments.forEach((experience) => {
        const option = document.createElement("option");
        option.value = experience.id;
        option.textContent = experience.label;
        group.append(option);
      });
      experienceSelect.append(group);
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

  const selected = selectedExperience();
  if (selected?.skillId && state.chosenSkillId !== selected.skillId) {
    state.chosenSkillId = selected.skillId;
  }

  experienceSelect.value = state.evidence.experience;
  skillSelect.value = state.chosenSkillId;
  skillSelect.disabled = Boolean(selected?.skillId);
}

function renderClarifyingQuestions() {
  const skill = chosenSkill();
  const prompt = clarifyingPrompts[skill.id] || clarifyingPrompts.communication;
  const list = $("clarifying-questions");
  list.innerHTML = "";

  prompt.questions.forEach((question) => {
    const item = document.createElement("li");
    item.textContent = question;
    list.append(item);
  });

  $("situation-input").placeholder = prompt.situation;
  $("action-input").placeholder = prompt.action;
  $("result-input").placeholder = prompt.result;
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
  $("feedback-output").textContent = outputs.feedback;
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
  renderSelects();
  renderClarifyingQuestions();
  renderInputs();
  renderOutputs();
  renderQuest();
}

function bindForm() {
  $("first-name-input").addEventListener("input", (event) => {
    state.student.firstName = firstNameOnly(event.target.value);
    saveState();
    render();
    maybeCelebrate("start");
  });

  $("experience-select").addEventListener("change", (event) => {
    state.evidence.experience = event.target.value;
    const selected = selectedExperience();
    if (selected?.skillId) {
      state.chosenSkillId = selected.skillId;
    }
    saveState();
    render();
    maybeCelebrate("build");
  });

  $("skill-select").addEventListener("change", (event) => {
    state.chosenSkillId = event.target.value;
    saveState();
    render();
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
      renderQuest();
      maybeCelebrate(key === "action" || key === "result" ? "build" : "unlock");
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

  $("print-button").addEventListener("click", () => {
    state.currentStage = "unlock";
    state.visitedStages = [...new Set([...state.visitedStages, "unlock"])];
    saveState();
    render();
    maybeCelebrate("unlock");
    window.setTimeout(() => window.print(), 60);
  });

  $("reset-button").addEventListener("click", () => {
    state = structuredClone(initialState);
    window.localStorage.removeItem("year-9-job-skills-state");
    render();
  });

  $("back-button").addEventListener("click", () => {
    const index = currentStageIndex();
    if (index > 0) setStage(stages[index - 1].id, false);
  });

  $("next-button").addEventListener("click", () => {
    const index = currentStageIndex();
    maybeCelebrate(stages[index].id);
    if (index < stages.length - 1) {
      setStage(stages[index + 1].id);
    }
  });
}

bindForm();
render();
