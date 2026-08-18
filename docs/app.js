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
    id: "communication-group-assignment",
    label: "In a group assignment",
    detail: "Asked questions, explained an idea, checked instructions, or helped the group understand the task.",
    skillId: "communication",
  },
  {
    id: "communication-sport-training",
    label: "At sport, dance, or training",
    detail: "Listened to a coach, called out clearly, encouraged someone, or checked what the next play or routine was.",
    skillId: "communication",
  },
  {
    id: "communication-home-help",
    label: "Helping at home or with a younger person",
    detail: "Explained a step, listened to what someone needed, or used calmer words to avoid confusion.",
    skillId: "communication",
  },
  {
    id: "communication-presentation",
    label: "During a presentation or performance",
    detail: "Organised what to say, spoke clearly, used an example, or adjusted for the audience.",
    skillId: "communication",
  },
  {
    id: "communication-community",
    label: "Volunteering, service, or helping at school",
    detail: "Asked what needed doing, listened to instructions, spoke politely, or passed on information.",
    skillId: "communication",
  },
  {
    id: "communication-online",
    label: "In a message, group chat, or online project",
    detail: "Wrote clearly, checked tone, shared useful information, or helped keep the conversation on track.",
    skillId: "communication",
  },
];

const collaborationMoments = [
  {
    id: "collaboration-group-assignment",
    label: "In a group assignment",
    detail: "Shared jobs, completed your part, helped someone else, or helped the group stay on track.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-sport-club",
    label: "In sport, dance, production, or a club",
    detail: "Played your role, practised with others, encouraged the group, or adapted to the team plan.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-home-event",
    label: "Helping at home or at a family event",
    detail: "Worked alongside others, took a job, noticed what needed doing, or helped finish a shared task.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-community",
    label: "Volunteering, service, or helping at school",
    detail: "Joined in with a group job, supported the organiser, helped someone practise, or shared equipment fairly.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-friends-project",
    label: "Planning something with friends",
    detail: "Listened to different ideas, included someone, negotiated a fair plan, or helped solve a small disagreement.",
    skillId: "collaboration",
  },
  {
    id: "collaboration-casual-task",
    label: "In a casual, job-style, or helping task",
    detail: "Followed the plan, helped the next person, kept your part moving, or checked what the team needed.",
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

const emptyExampleDraft = {
  savedId: "",
  experience: "",
  situation: "",
  action: "",
  result: "",
};

const minimumSnapshotExamples = 3;
const lessonFocusSkillIds = ["communication", "collaboration"];
const lessonFocusSkills = skills.filter((skill) => lessonFocusSkillIds.includes(skill.id));

const skillCheckCards = [
  {
    id: "sort-communication",
    label: "Communication",
    clue: "Talking, listening, checking, and explaining clearly.",
    isSkill: true,
    explanation: "Communication is an employability skill because it can transfer across many jobs.",
  },
  {
    id: "sort-happy",
    label: "Happy",
    clue: "A feeling or emotion someone might have.",
    isSkill: false,
    explanation: "Happy is an emotion. A related skill might be self-management or communication.",
  },
  {
    id: "sort-teamwork",
    label: "Teamwork",
    clue: "Working with others to get something done.",
    isSkill: true,
    explanation: "Teamwork is an employability skill because most workplaces involve other people.",
  },
  {
    id: "sort-barista-course",
    label: "Barista course",
    clue: "Training that teaches someone to make coffee.",
    isSkill: false,
    explanation: "A barista course is training or a qualification. It may help build skills, but it is not the skill itself.",
  },
  {
    id: "sort-problem-solving",
    label: "Problem solving",
    clue: "Working out what to try when something gets tricky.",
    isSkill: true,
    explanation: "Problem solving is an employability skill because jobs often need people to figure things out.",
  },
  {
    id: "sort-certificate",
    label: "Certificate II",
    clue: "A formal course result or qualification.",
    isSkill: false,
    explanation: "A certificate is a qualification. The skills might be what you practised while earning it.",
  },
  {
    id: "sort-listening",
    label: "Listening carefully",
    clue: "Paying attention and checking you understood.",
    isSkill: true,
    explanation: "Listening carefully is part of communication, so it can transfer into work.",
  },
  {
    id: "sort-nervous",
    label: "Nervous",
    clue: "A feeling someone might have before a new task.",
    isSkill: false,
    explanation: "Nervous is a feeling. Managing nerves could show self-management, but the feeling is not the skill.",
  },
  {
    id: "sort-digital",
    label: "Digital literacy",
    clue: "Using technology safely, responsibly, and effectively.",
    isSkill: true,
    explanation: "Digital literacy is an employability skill because many jobs use technology.",
  },
  {
    id: "sort-planning",
    label: "Planning a task",
    clue: "Breaking a job into steps and checking progress.",
    isSkill: true,
    explanation: "Planning a task is an employability skill because it helps people get work done reliably.",
  },
];

const stages = [
  {
    id: "start",
    short: "Launch",
    title: "Launch",
    subtitle: "Start your private job-skills snapshot.",
    hint: "Watch the intro video, tick that your class watched it, then go to Skill Sorter.",
  },
  {
    id: "skill-check",
    short: "Sort",
    title: "Skill Sorter",
    subtitle: "Check that you can spot employability skills.",
    hint: "Sort each card into skill or not a skill to unlock Skill Spotter.",
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
    id: "communication-build",
    short: "Comm Story",
    title: "Communication Story",
    subtitle: "Turn one communication moment into job speak.",
    hint: "Build one honest communication example, then choose whether to add another or move on.",
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
    id: "collaboration-build",
    short: "Team Story",
    title: "Teamwork Story",
    subtitle: "Turn one collaboration moment into job speak.",
    hint: "Build one honest collaboration example, then choose whether to add another or finish the skills PDF.",
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
  start: ["Launch badge unlocked", "No names needed. Good privacy choice."],
  "skill-check": ["Skill Sorter complete", "You can spot the difference between skills, emotions, and qualifications."],
  communication: ["Communication unlocked", "Speaking and listening both count. You probably use this more than you think."],
  "communication-life": ["Communication evidence found", "That is a real example you could explain to an employer one day."],
  "communication-build": ["Communication story saved", "That communication example is ready for your skills PDF."],
  collaboration: ["Teamwork unlocked", "Collaboration is teamwork you can point to and explain."],
  "collaboration-life": ["Teamwork evidence found", "You have spotted a real example of working well with others."],
  "collaboration-build": ["Teamwork story saved", "That collaboration example is ready for your skills PDF."],
  unlock: ["Snapshot unlocked", "Your employability snapshot is ready to use."],
};

const stageTokens = {
  start: "GO",
  "skill-check": "01",
  communication: "02",
  "communication-life": "03",
  "communication-build": "04",
  collaboration: "05",
  "collaboration-life": "06",
  "collaboration-build": "07",
  unlock: "PDF",
};

const nextStageButtonLabels = {
  start: "Next: Skill Sorter",
  "skill-check": "Next: Communication",
  communication: "Next: Find Examples",
  "communication-life": "Next: Build Story",
  collaboration: "Next: Find Teamwork",
  "collaboration-life": "Next: Build Story",
  "collaboration-build": "Next: Skills PDF",
};

const stageRailLabels = {
  start: "Launch",
  "skill-check": "Check Skills",
  communication: "Communication",
  "communication-life": "Find Examples",
  "communication-build": "Build Story",
  collaboration: "Collaboration",
  "collaboration-life": "Find Teamwork",
  "collaboration-build": "Build Story",
  unlock: "Skills PDF",
};

const liveThemeChoices = ["city", "space"];

const feedbackAssets = {
  city: {
    correct: "assets/feedback/city-well-done-v1.gif",
    incorrect: "assets/feedback/city-try-again-v1.gif",
  },
  space: {
    correct: "assets/feedback/mission-control-well-done-v1.gif",
    incorrect: "assets/feedback/mission-control-try-again-v1.gif",
  },
  studio: {
    correct: "assets/feedback/city-well-done-v1.gif",
    incorrect: "assets/feedback/city-try-again-v1.gif",
  },
};

const initialState = {
  currentStage: "start",
  visitedStages: ["start"],
  celebratedStages: [],
  theme: "city",
  videoCheckpoints: {
    intro: false,
    communication: false,
    collaboration: false,
  },
  selectedCommunicationMoments: [],
  selectedCollaborationMoments: [],
  skillCheck: {
    answers: [],
    revealedTileIds: [],
    lastFeedback: "",
  },
  examples: [],
  drafts: {
    communication: { ...emptyExampleDraft },
    collaboration: { ...emptyExampleDraft },
  },
  confidence: {},
  chosenSkillId: "communication",
  nextStep: {
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
    parsed.theme = liveThemeChoices.includes(parsed.theme) ? parsed.theme : "city";
    parsed.videoCheckpoints = {
      ...initialState.videoCheckpoints,
      ...parsed.videoCheckpoints,
    };
    delete parsed.student;
    parsed.nextStep = {
      ...initialState.nextStep,
      ...parsed.nextStep,
      improve: parsed.nextStep?.improve || parsed.evidence?.improve || initialState.nextStep.improve,
      nextStep: parsed.nextStep?.nextStep || parsed.evidence?.nextStep || initialState.nextStep.nextStep,
    };
    parsed.drafts = {
      communication: { ...emptyExampleDraft, ...parsed.drafts?.communication },
      collaboration: { ...emptyExampleDraft, ...parsed.drafts?.collaboration },
    };
    if (parsed.evidence?.experience || parsed.evidence?.situation || parsed.evidence?.action || parsed.evidence?.result) {
      const legacyExperience = experiences.find((experience) => experience.id === parsed.evidence.experience);
      const legacySkillId = legacyExperience?.skillId || parsed.chosenSkillId || "communication";
      if (lessonFocusSkillIds.includes(legacySkillId)) {
        parsed.drafts[legacySkillId] = {
          ...emptyExampleDraft,
          experience: parsed.evidence.experience || "",
          situation: parsed.evidence.situation || "",
          action: parsed.evidence.action || "",
          result: parsed.evidence.result || "",
        };
      }
    }
    parsed.examples = Array.isArray(parsed.examples)
      ? parsed.examples.filter((example) => lessonFocusSkillIds.includes(example.skillId))
      : [];
    parsed.skillCheck = { ...initialState.skillCheck, ...parsed.skillCheck };
    parsed.skillCheck.answers = Array.isArray(parsed.skillCheck.answers)
      ? parsed.skillCheck.answers.filter((answer) => skillCheckCards.some((card) => card.id === answer.id))
      : [];
    parsed.skillCheck.revealedTileIds = Array.isArray(parsed.skillCheck.revealedTileIds)
      ? [
          ...new Set(
            parsed.skillCheck.revealedTileIds
              .map((tileId) => Number(tileId))
              .filter((tileId) => tileId >= 1 && tileId <= skillCheckCards.length),
          ),
        ]
      : [];
    parsed.selectedCommunicationMoments = Array.isArray(parsed.selectedCommunicationMoments)
      ? parsed.selectedCommunicationMoments
      : (parsed.selectedExperiences || []).filter((id) => communicationMoments.some((moment) => moment.id === id));
    parsed.selectedCollaborationMoments = Array.isArray(parsed.selectedCollaborationMoments)
      ? parsed.selectedCollaborationMoments
      : (parsed.selectedExperiences || []).filter((id) => collaborationMoments.some((moment) => moment.id === id));
    const validStageIds = stages.map((stage) => stage.id);
    if (parsed.currentStage === "brief") {
      parsed.currentStage = "skill-check";
    }
    if (parsed.currentStage === "build") {
      parsed.currentStage = "communication-build";
    }
    if (!validStageIds.includes(parsed.currentStage)) {
      parsed.currentStage = "start";
    }
    parsed.visitedStages = Array.isArray(parsed.visitedStages)
      ? [
          ...new Set([
            "start",
            ...parsed.visitedStages
              .map((stageId) => {
                if (stageId === "brief") return "skill-check";
                if (stageId === "build") return "communication-build";
                return stageId;
              })
              .filter((stageId) => validStageIds.includes(stageId)),
          ]),
        ]
      : ["start"];
    parsed.celebratedStages = Array.isArray(parsed.celebratedStages)
      ? parsed.celebratedStages
          .map((stageId) => {
            if (stageId === "brief") return "skill-check";
            if (stageId === "build") return "communication-build";
            return stageId;
          })
          .filter((stageId) => validStageIds.includes(stageId))
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

function hasMeaningfulWork() {
  const draftHasText = lessonFocusSkillIds.some((skillId) => {
    const draft = state.drafts?.[skillId] || emptyExampleDraft;
    return [draft.experience, draft.situation, draft.action, draft.result].some((value) => String(value || "").trim());
  });

  return Boolean(
      Object.values(state.videoCheckpoints).some(Boolean) ||
      state.skillCheck.answers.length ||
      state.skillCheck.revealedTileIds.length ||
      state.selectedCommunicationMoments.length ||
      state.selectedCollaborationMoments.length ||
      state.examples.length ||
      draftHasText ||
      state.nextStep.improve.trim() !== initialState.nextStep.improve ||
      state.nextStep.nextStep.trim() !== initialState.nextStep.nextStep,
  );
}

function sentenceCase(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function buildSkillId() {
  return state.currentStage === "collaboration-build" ? "collaboration" : "communication";
}

function skillById(skillId) {
  return lessonFocusSkills.find((skill) => skill.id === skillId) || lessonFocusSkills[0];
}

function chosenSkill() {
  return skillById(buildSkillId());
}

function draftForSkill(skillId) {
  state.drafts[skillId] = { ...emptyExampleDraft, ...state.drafts[skillId] };
  return state.drafts[skillId];
}

function currentDraft() {
  return draftForSkill(buildSkillId());
}

function selectedExperience(skillId = buildSkillId()) {
  return experiences.find((experience) => experience.id === draftForSkill(skillId).experience);
}

function skillMoments(skillId) {
  return skillId === "collaboration" ? collaborationMoments : communicationMoments;
}

function selectedMomentIds(skillId) {
  return skillId === "collaboration" ? state.selectedCollaborationMoments : state.selectedCommunicationMoments;
}

function isDraftComplete(skillId) {
  const draft = draftForSkill(skillId);
  return Boolean(draft.experience) && Boolean(draft.action.trim()) && Boolean(draft.result.trim());
}

function draftHasStudentWriting(skillId) {
  const draft = draftForSkill(skillId);
  return Boolean(draft.situation.trim() || draft.action.trim() || draft.result.trim());
}

function savedExamplesFor(skillId) {
  return state.examples.filter((example) => example.skillId === skillId);
}

function hasCompleteExample(skillId) {
  return savedExamplesFor(skillId).length > 0 || isDraftComplete(skillId);
}

function exampleCount() {
  return allCompleteExamples().length;
}

function remainingExampleCount() {
  return Math.max(0, minimumSnapshotExamples - exampleCount());
}

function skillCheckScore() {
  return state.skillCheck.answers.filter((answer) => answer.correct).length;
}

function isSkillCheckComplete() {
  return state.skillCheck.answers.length >= skillCheckCards.length;
}

function isVideoCheckpointComplete(key) {
  return Boolean(state.videoCheckpoints?.[key]);
}

function requiredVideoKeyForStage(stageId) {
  if (stageId === "start") return "intro";
  if (stageId === "communication") return "communication";
  if (stageId === "collaboration") return "collaboration";
  return "";
}

function isSnapshotReady() {
  return (
    hasCompleteExample("communication") &&
    hasCompleteExample("collaboration") &&
    exampleCount() >= minimumSnapshotExamples
  );
}

function currentSkillCheckCard() {
  return skillCheckCards[state.skillCheck.answers.length] || null;
}

function getOutputsForDraft(skillId, draft) {
  const skill = skillById(skillId);
  const prompt = clarifyingPrompts[skill.id] || clarifyingPrompts.communication;
  const experience = experiences.find((item) => item.id === draft.experience);
  const experienceText = experience ? experience.label : "a school, hobby, home, sport, or community experience";
  const action = draft.action.trim();
  const result = draft.result.trim();
  const actionText = action || "did one specific thing that helped";
  const resultText = result || "there was a small improvement";
  const situationText =
    sentenceCase(draft.situation) || `In ${experienceText.toLowerCase()}, there was a situation where I had to contribute.`;

  const jobSpeak = `In ${experienceText.toLowerCase()}, I practised ${skill.simpleTitle.toLowerCase()} when I ${actionText}. This helped because ${resultText}. This is a small but real example of building ${skill.title.toLowerCase()}, which could transfer to work because many jobs need people to ${prompt.transfer}.`;
  const interviewAnswer = `${situationText} I ${actionText}. The small result was that ${resultText}. I would describe this as early evidence of ${skill.title.toLowerCase()} because it connects one real action to one real result.`;
  const resumeBullets = [
    `Practised ${skill.title.toLowerCase()} during ${experienceText.toLowerCase()} by ${actionText}.`,
    `Can give a small real example of ${skill.simpleTitle.toLowerCase()} from my own experience.`,
  ];
  const feedback = !draft.experience
    ? "Choose one real moment first. Small examples are fine."
    : !action
      ? "Add one specific thing you actually did. Keep it honest and concrete."
      : !result
        ? "Add the small result. It does not need to be dramatic; it just needs to be real."
        : "Good: this is right-sized because it links one real action to one real result.";

  return { feedback, jobSpeak, interviewAnswer, resumeBullets };
}

function getOutputs() {
  return getOutputsForDraft(buildSkillId(), currentDraft());
}

function commitDraft(skillId, shouldReset = false) {
  if (!isDraftComplete(skillId)) return false;
  const draft = draftForSkill(skillId);
  const id = draft.savedId || `${skillId}-${Date.now()}`;
  const example = {
    id,
    skillId,
    experience: draft.experience,
    situation: draft.situation,
    action: draft.action,
    result: draft.result,
  };
  const existingIndex = state.examples.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    state.examples[existingIndex] = example;
  } else {
    state.examples = [...state.examples, example];
  }
  if (shouldReset) {
    state.drafts[skillId] = { ...emptyExampleDraft };
  } else {
    state.drafts[skillId].savedId = id;
  }
  saveState();
  return true;
}

function allCompleteExamples() {
  const draftExamples = lessonFocusSkillIds
    .filter((skillId) => isDraftComplete(skillId))
    .map((skillId) => ({
      id: draftForSkill(skillId).savedId || `${skillId}-draft`,
      skillId,
      experience: draftForSkill(skillId).experience,
      situation: draftForSkill(skillId).situation,
      action: draftForSkill(skillId).action,
      result: draftForSkill(skillId).result,
    }));
  const draftIds = new Set(draftExamples.map((example) => example.id));
  return [...state.examples.filter((example) => !draftIds.has(example.id)), ...draftExamples];
}

function getProgress() {
  const parts = [
    isVideoCheckpointComplete("intro"),
    isSkillCheckComplete(),
    isVideoCheckpointComplete("communication"),
    state.selectedCommunicationMoments.length > 0,
    hasCompleteExample("communication"),
    isVideoCheckpointComplete("collaboration"),
    state.selectedCollaborationMoments.length > 0,
    hasCompleteExample("collaboration"),
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
      return isVideoCheckpointComplete("intro");
    case "skill-check":
      return isSkillCheckComplete();
    case "communication":
      return isVideoCheckpointComplete("communication");
    case "communication-life":
      return state.selectedCommunicationMoments.length > 0;
    case "communication-build":
      return hasCompleteExample("communication");
    case "collaboration":
      return isVideoCheckpointComplete("collaboration");
    case "collaboration-life":
      return state.selectedCollaborationMoments.length > 0;
    case "collaboration-build":
      return hasCompleteExample("collaboration");
    case "unlock":
      return isSnapshotReady();
    default:
      return false;
  }
}

function completedStages() {
  return stages.filter((stage) => isStageComplete(stage.id));
}

function answerSkillCheckCard(answerIsSkill) {
  const card = currentSkillCheckCard();
  if (!card) return;

  const tileId = state.skillCheck.answers.length + 1;
  const correct = card.isSkill === answerIsSkill;
  const revealedTileIds = correct
    ? [...new Set([...state.skillCheck.revealedTileIds, tileId])]
    : state.skillCheck.revealedTileIds;
  state.skillCheck.answers = [
    ...state.skillCheck.answers,
    {
      id: card.id,
      answerIsSkill,
      correct,
    },
  ];
  state.skillCheck.revealedTileIds = revealedTileIds;
  state.skillCheck.lastFeedback = `${correct ? "Correct" : "Not quite"}. ${card.explanation}`;
  saveState();
  render();
  showSortPulse(correct, answerIsSkill);
  if (isSkillCheckComplete()) {
    maybeCelebrate("skill-check");
  }
}

function resetSkillCheck() {
  state.skillCheck = {
    ...structuredClone(initialState.skillCheck),
    lastFeedback: "Replay round started. Correct answers will reveal the picture again.",
  };
  saveState();
  render();
}

function showCelebration(title, message) {
  const toast = $("celebration-toast");
  $("celebration-title").textContent = title;
  $("celebration-message").textContent = message;
  toast.classList.remove("show");
  document.body.classList.remove("celebrate-screen");
  window.setTimeout(() => toast.classList.add("show"), 20);
  window.requestAnimationFrame(() => document.body.classList.add("celebrate-screen"));
  window.clearTimeout(showCelebration.timeout);
  showCelebration.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
  window.clearTimeout(showCelebration.screenTimeout);
  showCelebration.screenTimeout = window.setTimeout(() => {
    document.body.classList.remove("celebrate-screen");
  }, 1200);
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

function stageRequiresCompletion(stageId) {
  return [
    "start",
    "skill-check",
    "communication",
    "communication-life",
    "communication-build",
    "collaboration",
    "collaboration-life",
    "collaboration-build",
    "unlock",
  ].includes(stageId);
}

function nextButtonLabel(stageId) {
  if (requiredVideoKeyForStage(stageId) && !isStageComplete(stageId)) return "Watch or tick video first";
  if (stageId === "communication-build") return "Use the Yes/No choice";
  if (stageId === "collaboration-build") return "Use the Yes/No choice";
  if (stageId === "unlock" && !isSnapshotReady()) return "Finish examples first";
  if (currentStageIndex() === stages.length - 1) return "Stay here";
  return nextStageButtonLabels[stageId] || "Next mission";
}

function renderQuest() {
  const progress = getProgress();
  const badges = completedStages();
  const currentStage = stages[currentStageIndex()];

  document.querySelectorAll("[data-stage-panel]").forEach((panel) => {
    const panelStages = panel.dataset.stagePanel.split(/\s+/);
    const isActive = panelStages.includes(state.currentStage);
    panel.hidden = !isActive;
    panel.classList.toggle("active-stage", isActive);
  });

  $("mission-title").textContent = currentStage.title;
  $("mission-subtitle").textContent = currentStage.subtitle;
  const nextLabel = nextStageButtonLabels[currentStage.id];
  $("mission-hint").textContent =
    requiredVideoKeyForStage(currentStage.id) && isStageComplete(currentStage.id) && nextLabel
      ? `Video done. Press ${nextLabel}.`
      : currentStage.hint;
  $("xp-points").textContent = `${progress * 10} XP`;
  $("badge-count").textContent = `${badges.length} of ${stages.length} badges`;
  $("quest-meter-fill").style.width = `${Math.round((badges.length / stages.length) * 100)}%`;

  const rail = $("mission-rail");
  rail.innerHTML = "";
  stages.forEach((stage, index) => {
    const complete = isStageComplete(stage.id);
    const active = stage.id === state.currentStage;
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "mission-pill",
      active ? "active" : "",
      complete ? "complete" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.setAttribute("aria-pressed", String(stage.id === state.currentStage));
    button.setAttribute(
      "aria-label",
      `${index + 1}. ${stageRailLabels[stage.id] || stage.short}. ${complete ? "Badge earned" : active ? "Current mission" : "Open mission"}`,
    );
    button.innerHTML = `
      <span class="mission-token">${stageTokens[stage.id] || String(index + 1).padStart(2, "0")}</span>
      <strong>${stageRailLabels[stage.id] || stage.short}</strong>
      <small>${complete ? "Badge earned" : active ? "Current mission" : "Open mission"}</small>
    `;
    button.addEventListener("click", () => setStage(stage.id));
    rail.append(button);
  });

  $("back-button").disabled = currentStageIndex() === 0;
  $("next-button").textContent = nextButtonLabel(currentStage.id);
  $("next-button").disabled =
    currentStageIndex() === stages.length - 1 ||
    currentStage.id.endsWith("-build") ||
    (stageRequiresCompletion(currentStage.id) && !isStageComplete(currentStage.id));
}

function showSortPulse(correct, answerIsSkill) {
  const card = $("sort-card");
  const feedback = $("sort-feedback");
  card.classList.remove("sort-correct", "sort-wrong", "sort-skill", "sort-not");
  feedback.classList.remove("correct", "try-again", "pulse");
  showFeedbackAnimation(correct);

  window.requestAnimationFrame(() => {
    card.classList.add(correct ? "sort-correct" : "sort-wrong");
    card.classList.add(answerIsSkill ? "sort-skill" : "sort-not");
    feedback.classList.add(correct ? "correct" : "try-again", "pulse");
  });

  window.clearTimeout(showSortPulse.timeout);
  showSortPulse.timeout = window.setTimeout(() => {
    card.classList.remove("sort-correct", "sort-wrong", "sort-skill", "sort-not");
    feedback.classList.remove("pulse");
  }, 760);
}

function showFeedbackAnimation(correct) {
  const burst = $("sort-feedback-animation");
  const image = $("sort-feedback-gif");
  if (!burst || !image) return;

  const theme = feedbackAssets[state.theme] ? state.theme : "city";
  image.src = `${feedbackAssets[theme][correct ? "correct" : "incorrect"]}?t=${Date.now()}`;
  burst.classList.remove("show", "well-done", "try-again");

  window.requestAnimationFrame(() => {
    burst.classList.add("show", correct ? "well-done" : "try-again");
  });

  window.clearTimeout(showFeedbackAnimation.timeout);
  showFeedbackAnimation.timeout = window.setTimeout(() => {
    burst.classList.remove("show", "well-done", "try-again");
  }, 1550);
}

function createVideoPlayer(slot, key) {
  const videoSrc = slot.dataset.video;
  if (!videoSrc) return null;

  const video = document.createElement("video");
  video.className = "video-player";
  video.controls = true;
  video.preload = "metadata";
  if (slot.dataset.poster) video.poster = slot.dataset.poster;
  if (key) {
    video.addEventListener("ended", () => completeVideoCheckpoint(key));
  }

  const source = document.createElement("source");
  source.src = videoSrc;
  source.type = "video/mp4";
  video.append(source);

  if (slot.dataset.captions) {
    const track = document.createElement("track");
    track.default = true;
    track.kind = "captions";
    track.label = "English";
    track.src = slot.dataset.captions;
    track.srclang = "en";
    video.append(track);
  }

  return video;
}

function loadVideoOnDevice(key) {
  const button = document.querySelector(`[data-load-video="${key}"]`);
  const slot = button?.closest(".video-shell");
  const video = slot ? createVideoPlayer(slot, key) : null;
  if (!slot || !video) return;
  const badgeText = slot.querySelector(".video-badge")?.textContent || "Lesson video";
  const badge = document.createElement("div");
  badge.className = "video-badge";
  badge.textContent = badgeText;

  const checkpointStrip = document.createElement("div");
  checkpointStrip.className = "video-checkpoint-strip";
  checkpointStrip.dataset.videoCheckpointStrip = key;
  const checkpointText = document.createElement("span");
  checkpointText.textContent =
    "When the video ends, press the next button below. If your teacher played it for the class, tick this button first.";
  const checkpointButton = document.createElement("button");
  checkpointButton.type = "button";
  checkpointButton.className = "video-complete-button";
  checkpointButton.dataset.videoCheckpoint = key;
  checkpointButton.textContent = isVideoCheckpointComplete(key) ? "Class video done" : "My class watched this";
  checkpointButton.addEventListener("click", () => completeVideoCheckpoint(key));
  checkpointStrip.append(checkpointText, checkpointButton);

  const oldStrip = slot.nextElementSibling;
  if (oldStrip?.dataset.videoCheckpointStrip === key) oldStrip.remove();
  slot.replaceChildren(video, badge);
  slot.insertAdjacentElement("afterend", checkpointStrip);
}

function completeVideoCheckpoint(key) {
  if (!Object.prototype.hasOwnProperty.call(initialState.videoCheckpoints, key)) return;
  state.videoCheckpoints[key] = true;
  saveState();
  render();

  const stageId = key === "intro" ? "start" : key;
  maybeCelebrate(stageId);
}

function renderVideoCheckpoints() {
  document.querySelectorAll("[data-video-checkpoint]").forEach((button) => {
    const key = button.dataset.videoCheckpoint;
    const complete = isVideoCheckpointComplete(key);
    button.classList.toggle("complete", complete);
    button.textContent = complete ? "Class video done" : "My class watched this";
    button.setAttribute("aria-pressed", String(complete));
  });
}

function renderTheme() {
  document.body.dataset.theme = state.theme || "city";
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === state.theme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
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
      const draft = draftForSkill(skillId);
      if (!selected && !draft.experience) {
        draft.experience = experience.id;
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

function renderSkillCheck() {
  const answeredCount = state.skillCheck.answers.length;
  const correctCount = skillCheckScore();
  const complete = isSkillCheckComplete();
  const currentCard = currentSkillCheckCard();
  const revealedCount = state.skillCheck.revealedTileIds.length;
  const pictureComplete = revealedCount >= skillCheckCards.length;
  const power = Math.round((revealedCount / skillCheckCards.length) * 100);
  const botLevel = Math.min(5, Math.ceil((revealedCount / skillCheckCards.length) * 5));

  const skillScene = $("skill-scene");
  skillScene.className = `skill-sorter-scene level-${botLevel} ${pictureComplete ? "complete" : ""}`;
  skillScene.dataset.revealed = String(revealedCount);
  const sceneBadge = skillScene.querySelector(".scene-badge");
  if (sceneBadge) {
    sceneBadge.textContent = state.theme === "space" ? "Mission Control hidden picture" : "City Shift hidden picture";
  }
  document.querySelectorAll("[data-picture-tile]").forEach((piece) => {
    const pieceNumber = Number(piece.dataset.pictureTile || "0");
    piece.classList.toggle("revealed", state.skillCheck.revealedTileIds.includes(pieceNumber));
  });
  $("bot-power-fill").style.width = `${power}%`;
  $("sort-progress").textContent = `${Math.min(answeredCount, skillCheckCards.length)} of ${skillCheckCards.length}`;
  $("sort-score").textContent = `${correctCount}`;
  $("skill-replay-button").textContent = pictureComplete
    ? "Replay round"
    : complete
      ? "Replay round"
      : revealedCount > 0
        ? "Restart round"
        : "Replay round";
  $("bot-status").textContent = pictureComplete
    ? "Full picture unlocked. Replay if you want to practise."
    : complete
      ? `Round complete. ${revealedCount} of ${skillCheckCards.length} picture tiles revealed. Replay to try again from a fresh picture.`
      : `Hidden picture: ${revealedCount} of ${skillCheckCards.length} tiles revealed. Correct answers uncover clues.`;

  const sortCard = $("sort-card");
  sortCard.classList.toggle("complete", complete);
  sortCard.classList.remove("deal-in");
  $("skill-yes-button").disabled = complete;
  $("skill-no-button").disabled = complete;

  if (currentCard) {
    $("sort-card-kicker").textContent = `Scan target ${answeredCount + 1} of ${skillCheckCards.length}`;
    $("sort-card-label").textContent = currentCard.label;
    $("sort-card-clue").textContent = currentCard.clue;
    window.requestAnimationFrame(() => sortCard.classList.add("deal-in"));
  } else {
    $("sort-card-kicker").textContent = "Round complete";
    $("sort-card-label").textContent = `${correctCount} of ${skillCheckCards.length} correct`;
    $("sort-card-clue").textContent =
      pictureComplete
        ? `You revealed the whole ${state.theme === "space" ? "Mission Control" : "City Shift"} clue picture.`
        : "Replay the round to reset the picture and try again.";
  }

  $("sort-feedback").textContent =
    state.skillCheck.lastFeedback || "Choose where the card belongs. Skills transfer; emotions and qualifications do not.";

  const pile = $("answer-pile");
  pile.innerHTML = "";
  state.skillCheck.answers.forEach((answer) => {
    const card = skillCheckCards.find((item) => item.id === answer.id);
    if (!card) return;
    const chip = document.createElement("span");
    chip.className = answer.correct ? "correct" : "try-again";
    chip.textContent = `${answer.correct ? "✓" : "•"} ${card.label}`;
    pile.append(chip);
  });
}

function renderSelects() {
  const experienceSelect = $("experience-select");
  const skillSelect = $("skill-select");
  const skillId = buildSkillId();
  const skill = skillById(skillId);
  const draft = draftForSkill(skillId);
  const selectedIds = selectedMomentIds(skillId);
  const moments = skillMoments(skillId);
  const selectedMoments = moments.filter((moment) => selectedIds.includes(moment.id));
  const otherMoments = moments.filter((moment) => !selectedIds.includes(moment.id));

  experienceSelect.innerHTML = `<option value="">Choose one</option>`;
  [
    [`${skill.title} moments you selected`, selectedMoments],
    [`Other ${skill.title.toLowerCase()} moments`, otherMoments],
  ].forEach(([label, options]) => {
    if (options.length === 0) return;
    const group = document.createElement("optgroup");
    group.label = label;
    options.forEach((experience) => {
      const option = document.createElement("option");
      option.value = experience.id;
      option.textContent = experience.label;
      group.append(option);
    });
    experienceSelect.append(group);
  });

  skillSelect.innerHTML = "";
  const option = document.createElement("option");
  option.value = skill.id;
  option.textContent = `${skill.title} - ${skill.simpleTitle}`;
  skillSelect.append(option);

  experienceSelect.value = draft.experience;
  skillSelect.value = skillId;
  skillSelect.disabled = true;
}

function renderClarifyingQuestions() {
  const skill = chosenSkill();
  const prompt = clarifyingPrompts[skill.id] || clarifyingPrompts.communication;
  const list = $("clarifying-questions");
  list.innerHTML = "";

  prompt.questions.forEach((question, index) => {
    const item = document.createElement("li");
    item.className = `prompt-tile prompt-tile-${index + 1}`;
    const icon = document.createElement("span");
    icon.className = "prompt-icon";
    icon.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.textContent = question;
    item.append(icon, text);
    list.append(item);
  });

  $("situation-input").placeholder = prompt.situation;
  $("action-input").placeholder = prompt.action;
  $("result-input").placeholder = prompt.result;
}

function renderInputs() {
  const draft = currentDraft();
  $("situation-input").value = draft.situation;
  $("action-input").value = draft.action;
  $("result-input").value = draft.result;
  $("improve-input").value = state.nextStep.improve;
  $("next-step-input").value = state.nextStep.nextStep;
}

function renderBuilderFrame() {
  const skillId = buildSkillId();
  const skill = skillById(skillId);
  const isCommunication = skillId === "communication";
  const draftComplete = isDraftComplete(skillId);
  const remainingExamples = remainingExampleCount();
  const canFinishSkill = isCommunication ? draftComplete : draftComplete && isSnapshotReady();

  $("builder-eyebrow").textContent = `${skill.title} job speak`;
  $("builder-title").textContent = `Build at least 3 honest examples`;
  $("builder-intro").textContent = `Start with one ${isCommunication ? "communication" : "teamwork"} moment. Aim for 3 examples total for your skills PDF.`;
  $("saved-examples-title").textContent = `${skill.title} examples saved`;
  $("builder-decision-text").textContent = isSnapshotReady()
    ? "You have enough examples for your skills PDF. Add another if you have time, or finish."
    : `Your skills PDF needs ${remainingExamples} more finished ${remainingExamples === 1 ? "example" : "examples"} total, including communication and collaboration.`;
  $("finish-skill-button").textContent = isCommunication
    ? "Move to collaboration"
    : isSnapshotReady()
      ? "Build my skills PDF"
      : "Need 3 examples";
  $("another-example-button").disabled = !draftComplete;
  $("finish-skill-button").disabled = !canFinishSkill;
  $("print-button").disabled = !isSnapshotReady();
  $("print-button").textContent = isSnapshotReady() ? "Save PDF" : `Need ${remainingExamples} more`;

  const savedList = $("saved-examples-list");
  savedList.innerHTML = "";
  const saved = savedExamplesFor(skillId);
  if (saved.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No examples saved yet. Finish one example to add it to your skills PDF.";
    savedList.append(item);
    return;
  }

  saved.forEach((example, index) => {
    const experience = experiences.find((item) => item.id === example.experience);
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${experience?.label || skill.title}: ${example.action || "one real action"}`;
    savedList.append(item);
  });
}

function renderOutputs() {
  const progress = getProgress();
  const outputs = getOutputs();
  const examples = allCompleteExamples();
  const snapshotReady = isSnapshotReady();
  const skillId = buildSkillId();
  const draftComplete = isDraftComplete(skillId);
  const hasWriting = draftHasStudentWriting(skillId);
  const remainingExamples = remainingExampleCount();

  $("progress-percent").textContent = `${progress}%`;
  $("progress-fill").style.width = `${progress}%`;
  $("job-speak-output").textContent = draftComplete
    ? outputs.jobSpeak
    : hasWriting
      ? "Keep going. Once you add one real action and one small result, your job-speak sentence will appear here."
      : "Choose an experience and write your own words first. The translator will only build a sentence from what you enter.";
  $("feedback-output").textContent = outputs.feedback;
  $("copy-button").disabled = !draftComplete;
  $("save-pdf-button").disabled = !snapshotReady;
  $("save-pdf-button").textContent = snapshotReady ? "Save as PDF" : `Need ${remainingExamples} more`;

  const snapshotExamples = $("snapshot-examples");
  snapshotExamples.innerHTML = "";
  if (!snapshotReady) {
    const empty = document.createElement("p");
    empty.textContent = `Build at least ${minimumSnapshotExamples} examples total, including one communication and one collaboration example, to unlock your finished skills PDF.`;
    snapshotExamples.append(empty);
  } else {
    examples.forEach((example) => {
      const skill = skillById(example.skillId);
      const output = getOutputsForDraft(example.skillId, example);
      const article = document.createElement("article");
      const heading = document.createElement("strong");
      const paragraph = document.createElement("p");
      heading.textContent = skill.title;
      paragraph.textContent = output.jobSpeak;
      article.append(heading, paragraph);
      snapshotExamples.append(article);
    });
  }

  const bullets = $("resume-bullets");
  bullets.innerHTML = "";
  if (!snapshotReady) {
    const item = document.createElement("li");
    item.textContent = "Your resume bullets will appear after three examples are finished.";
    bullets.append(item);
  } else {
    examples.forEach((example) => {
      const output = getOutputsForDraft(example.skillId, example);
      output.resumeBullets.forEach((bullet) => {
        const item = document.createElement("li");
        item.textContent = bullet;
        bullets.append(item);
      });
    });
  }

  const answers = $("interview-answers");
  answers.innerHTML = "";
  if (!snapshotReady) {
    const empty = document.createElement("p");
    empty.textContent = "Interview practice will unlock when you have three examples, including communication and collaboration.";
    answers.append(empty);
  } else {
    examples.forEach((example) => {
      const skill = skillById(example.skillId);
      const output = getOutputsForDraft(example.skillId, example);
      const answer = document.createElement("article");
      const heading = document.createElement("strong");
      const paragraph = document.createElement("p");
      heading.textContent = skill.title;
      paragraph.textContent = output.interviewAnswer;
      answer.append(heading, paragraph);
      answers.append(answer);
    });
  }
}

function render() {
  renderTheme();
  renderSkillCheck();
  renderExperiences();
  renderSelects();
  renderClarifyingQuestions();
  renderInputs();
  renderBuilderFrame();
  renderOutputs();
  renderVideoCheckpoints();
  renderQuest();
}

function resetWork() {
  if (hasMeaningfulWork() && !window.confirm("Clear your draft from this browser? This cannot be undone.")) return;
  state = structuredClone(initialState);
  window.localStorage.removeItem("year-9-job-skills-state");
  render();
}

window.addEventListener("beforeunload", (event) => {
  if (!hasMeaningfulWork()) return;
  event.preventDefault();
  event.returnValue = "";
});

function openPrintDialog() {
  if (!isSnapshotReady()) {
    setStage("communication-build", false);
    showCelebration("Finish examples first", `Build ${minimumSnapshotExamples} examples total, including communication and collaboration, before saving the PDF.`);
    return;
  }
  window.setTimeout(() => window.print(), 60);
}

function bindForm() {
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!liveThemeChoices.includes(button.dataset.themeChoice)) return;
      state.theme = button.dataset.themeChoice;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-load-video]").forEach((button) => {
    button.addEventListener("click", () => loadVideoOnDevice(button.dataset.loadVideo));
  });

  document.querySelectorAll("[data-video-checkpoint]").forEach((button) => {
    button.addEventListener("click", () => completeVideoCheckpoint(button.dataset.videoCheckpoint));
  });

  $("experience-select").addEventListener("change", (event) => {
    const skillId = buildSkillId();
    const draft = draftForSkill(skillId);
    draft.experience = event.target.value;
    draft.savedId = "";
    const selected = selectedExperience(skillId);
    if (selected?.skillId) {
      state.chosenSkillId = selected.skillId;
    }
    saveState();
    render();
    maybeCelebrate(`${skillId}-build`);
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
  ].forEach(([inputId, key]) => {
    $(inputId).addEventListener("input", (event) => {
      const skillId = buildSkillId();
      const draft = draftForSkill(skillId);
      draft[key] = event.target.value;
      draft.savedId = "";
      saveState();
      renderBuilderFrame();
      renderOutputs();
      renderQuest();
      maybeCelebrate(`${skillId}-build`);
    });
  });

  [
    ["improve-input", "improve"],
    ["next-step-input", "nextStep"],
  ].forEach(([inputId, key]) => {
    $(inputId).addEventListener("input", (event) => {
      state.nextStep[key] = event.target.value;
      saveState();
      renderOutputs();
      renderQuest();
    });
  });

  $("copy-button").addEventListener("click", async () => {
    if (!isDraftComplete(buildSkillId())) return;
    const output = getOutputs().jobSpeak;
    await navigator.clipboard.writeText(output);
    $("copy-button").textContent = "Copied";
    window.setTimeout(() => {
      $("copy-button").textContent = "Copy";
    }, 1500);
  });

  $("print-button").addEventListener("click", () => {
    if (!isSnapshotReady()) {
      openPrintDialog();
      return;
    }
    if (state.currentStage.endsWith("-build")) {
      commitDraft(buildSkillId());
    }
    state.currentStage = "unlock";
    state.visitedStages = [...new Set([...state.visitedStages, "unlock"])];
    saveState();
    render();
    maybeCelebrate("unlock");
    openPrintDialog();
  });

  $("save-pdf-button").addEventListener("click", openPrintDialog);

  $("reset-button").addEventListener("click", resetWork);
  $("clear-start-button").addEventListener("click", resetWork);
  $("skill-yes-button").addEventListener("click", () => answerSkillCheckCard(true));
  $("skill-no-button").addEventListener("click", () => answerSkillCheckCard(false));
  $("skill-replay-button").addEventListener("click", resetSkillCheck);
  $("another-example-button").addEventListener("click", () => {
    const skillId = buildSkillId();
    if (!commitDraft(skillId, true)) return;
    render();
    maybeCelebrate(`${skillId}-build`);
  });
  $("finish-skill-button").addEventListener("click", () => {
    const skillId = buildSkillId();
    if (!commitDraft(skillId)) return;
    maybeCelebrate(`${skillId}-build`);
    setStage(skillId === "communication" ? "collaboration" : "unlock");
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
