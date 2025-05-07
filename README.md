# React Demo to showcase NYSDS usage
This React Demo demonstrates a basic developer usage of the NYSDS components. 
Following the steps below, you can see how someone starting a new React project will use the NYSDS components.

## Getting Started
If you’ve already cloned this repo, skip ahead to the next section.

To start a new React project using the NYS Design System, follow the steps below. While the [NYSDS reference site](https://designsystem.ny.gov/getting-started/developers/) provides general guidance, use these terminal commands for this React + TypeScript setup:

> Terminal Instructions:
```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm install @nysds/components @nysds/styles
```

ℹ️  Missing any dependencies? See the `package.json` file of this project for comparison

## Start the Development Server
To start the local server, run:
```
npm run dev
```

## Using NYSDS components
To use NYSDS components in a React project, they must be wrapped with `lit/react` to integrate properly with the React ecosystem. This project wraps the components in `utils/nysds-components.ts` file and those wrapped components are then imported and used in `App.tsx`.

> As of 3/8/2025, this project uses [@lit/react](https://lit.dev/docs/frameworks/react/) (v1.0.7)


---


## Setting up npm link (For NYSDS developers) 🛠️
If you're actively developing the NYSDS Web Components (@nysds/components) and want to test local changes before publishing, you can use npm link to work with your local build in this React demo.
>💡 You’ll need two terminal tabs/windows — one for the NYSDS component repo, and one for the React demo.


1. Link Your Local NYSDS Repo
Navigate to your local NYSDS Web Components project:
```
npm link
```
This creates a global symlink for the NYSDS package.

2. Link It in This Project
Now, go back to your React demo project and run:
```
npm link @nysds/components
```

4. Restart the Development Server
After linking, restart the Next.js development server:
`npm run dev`

Any changes to NYSDS Web Components will be immediately reflected in this React app.
