# Year 9 Job Skills

An interactive Year 9 enterprise skills app for turning everyday student experiences into resume and interview language.

Students move through a simple classroom flow:

- watch a short employability skills intro
- complete a quick Skill Sorter check to separate skills from emotions, courses, and qualifications
- watch short communication and collaboration explainers
- choose real communication and collaboration experiences from school, sport, home, hobbies, or community help
- rate confidence using student-friendly language
- write one short example
- translate that example into job speak
- print or save a one-page Employability Snapshot

## GitHub Pages

This repo is designed to publish from the `docs/` folder:

- local static page: `docs/index.html`
- Pages URL: `https://emmanuelcc-ict.github.io/Year-9-Job-Skills/`
- Pages source: `main` branch, `/docs` folder

## Visual assets

The app is ready for custom visuals in `docs/assets/`. Start with:

- `intro-employability-skills.mp4`
- `communication-explainer.mp4`
- `collaboration-explainer.mp4`
- matching `.vtt` caption files for each video
- skill moment images for the 12 enterprise skills
- `takeaway-background.png`

See `docs/assets/README.md` and `docs/you-already-have-job-skills-storyboard.md` for filenames and generation prompts.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Check the build

```bash
npm run build
npm test
```

## Main files

- `docs/index.html` - GitHub Pages version
- `docs/styles.css` - static page styling
- `docs/app.js` - static interactive lesson flow
- `app/page.tsx` - editable React version used for local preview
- `app/globals.css` - React preview styling
