# React Demo to showcase NYSDS usage
Get started with NYSDS by following the instructions here: https://designsystem.ny.gov/getting-started/developers/

Terminal Instructions:
```
npm create vite@latest projectName -- --template react-ts
npm install @nysds/components @nysds/styles
```

## Setting up npm link
If you’re actively developing NYSDS Web Components (@nysds/components) and want to test changes before publishing, follow these steps:

1. Link Your Local NYSDS Repo
Navigate to your local NYSDS Web Components project:
```
cd /path/to/nysds-components
npm link
```
This creates a global symlink for the NYSDS package.

2. Link It in This Project
Now, go back to your React demo project and run:
`npm link @nysds/components`

3. Restart the Development Server
After linking, restart the Next.js development server:
`npm run dev`

Now, any changes made to NYSDS Web Components will reflect immediately in this React app.

## Issue Log (note to self):

- First -> Had to add "lit-labs" as a dependency in package.json
- Depreciation Issue -> Maybe use "@lit/react" (v1.0.7) instead of "@lit-labs/react" (version 2.1.3)
https://lit.dev/docs/frameworks/react/
- Form Issue -> submission not going through? (WORKING IN PROGRESS)
... attempting `npm link` & `npm link @nysds/components`


Source:
https://github.com/ITS-HCD/nysds-react-webcomponents-demo
