# React Demo to showcase NYSDS usage
This React Demo demonstrates a basic developer usage of the NYSDS components. 
Following the steps below, you can see how someone starting a new React project will use the NYSDS components.

## Getting Started
> [!NOTE]
> If you’ve already cloned this repo, run `npm install` and skip ahead to the next section.

To start a new React project using the NYS Design System (NYSDS), you’ll need to install the required packages via `npm`. The [NYSDS reference site](https://designsystem.ny.gov/getting-started/developers/) provides general installation guidance, but integrating NYSDS with React requires a slightly different approach, particularly around where we reference components & use lit-react wrappings. For now, let's follow this React + TypeScript setup:

```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm install @nysds/components @nysds/styles
npm install @lit/react
```

## Start the Development Server
To start the local server, run:
```
npm run dev
```

## Using NYSDS components
To use NYSDS components in a React project, they must be wrapped with `@lit/react` to integrate properly with the React rendering system. In this project, the components are wrapped in `utils/nysds-components.ts`, and those wrapped components are then imported and used in the `App.tsx`.


## Setting up npm link (For NYSDS developers) 🛠️
> [!Tip]
> If you're actively developing the NYSDS Web Components and want to test local changes before publishing, you can use `npm link` to work with your local build inside this React demo project. \
> You’ll need two terminal or command prompt windows (or tabs) open - one for the NYSDS components repo and one for the React demo project.


1. Link your local NYSDS repo
Navigate to your local NYSDS Web Components repo:
```
npm link
```
This creates a global symlink for the NYSDS package.

2. Link it to this React project
Now, go back to your React demo project and run:
```
npm link @nysds/components
```

3. Restart the development server
After linking, restart the Next.js development server:
```
npm run dev
```

**Now, any changes to NYSDS Web Components will be immediately reflected in this React app.**
