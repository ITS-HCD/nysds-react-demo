# React Demo to showcase NYSDS usage
This React Demo demonstrates a basic developer usage of the NYSDS components. 
Following the steps below, you can see how someone starting with a new React project will make use of the NYSDS components.

## Getting Started
First, let's create a new React project. You can use the [NYSDS reference site](https://designsystem.ny.gov/getting-started/developers/) to install its packages, but in React's case, we can follow the terminal instructions below.

ℹ️ Missing any dependencies? See the `package.json` file of this project

> Terminal Instructions:
```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm install @nysds/components @nysds/styles
```

## Start the Development Server
To start the local server, run:
```
npm run dev
```

## Using NYSDS components
You can find examples of how developers can make use of specific components in the App.tsx of this project. \
In React, we must wrap the NYSDS components with lit/react to work properly.
> As of 3/8/2025, this project uses [@lit/react](https://lit.dev/docs/frameworks/react/) (v1.0.7)

---

## Setting up npm link (For NYSDS contributers/developers) 🛠️
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
```
npm link @nysds/components
```

4. Restart the Development Server
After linking, restart the Next.js development server:
`npm run dev`

Now, any changes made to NYSDS Web Components will reflect immediately in this React app.

### Source of reference for this project:
https://github.com/ITS-HCD/nysds-react-webcomponents-demo
