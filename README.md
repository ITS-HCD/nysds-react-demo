# React Demo to showcase NYSDS usage
This demo shows how to use [NYS Design System (NYSDS)](https://designsystem.ny.gov/) components in a React project. Follow the steps below to see a basic setup and usage pattern.

## Getting Started
> [!NOTE]
> This repo contains two key branches:
> - main — A full-featured, multi-page demo showcasing realistic React app structure and NYS Design System integration.
> - intro/single-page — A simplified, single-page example for beginners exploring how to get started with NYS Design System in React.
> 
> If you’ve already cloned this repo, run `npm install` and skip ahead to the next section.

To start a new React project with NYSDS, install the required packages with `npm`. The [NYSDS reference site](https://designsystem.ny.gov/getting-started/developers/) covers general setup, but React integration requires using @lit/react wrappers. Below is a React + TypeScript setup:

```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm install @nysds/components @nysds/styles
npm install @lit/react
npm install lit
```

## 1. Starting the Dev Server
Run the following to start the local dev server:
```
npm run dev
```

## 2. Wrapping NYSDS components 
> [!IMPORTANT]
> As of February 2026, the NYSDS team is **working to make NYSDS installable without Lit or React wrappers**. Until that update is available, please follow the steps below.
> 
> This approach is temporary, but for now, copy this file as needed, as it is regularly updated to support the wrapped components required to use NYSDS.

NYSDS components must be wrapped with **wrapped with `@lit/react`** to work correctly in React.

In this project, the components are defined in `utils/nysds-components.ts`and then imported into `App.tsx` and other React pages. If not cloning, copy the code from that file into your own `utils/nysds-components.ts`.

## 3. Using NYSDS components 
Once wrapped, components can be imported and used like standard React components. See `App.tsx` for examples. The multipages branch also uses wrapped components in the src/pages/ directory.

## 4. NYSDS style imports
For styling, import the NYSDS CSS files in index.html. Reference them directly from the installed package location (e.g., node_modules folder).
___

## Setting up npm link (For NYSDS developers) 🛠️
> [!Tip]
> If you're actively developing the NYSDS Web Components and want to test local changes before publishing, you can use `npm link` to work with your local build inside this React demo project. \
> You’ll need two terminal or command prompt windows (or tabs) open - one for the NYSDS components repo and one for the React demo project.


1. Link your local NYSDS repo \
First, navigate to the terminal/cmd prompt tab that has your local NYSDS Web Components repo:
```
npm link
```
This creates a global symlink for the NYSDS package.

2. Link it to this React project \
Next, go to the terminal/cmd prompt tab that has your React demo project and run:
```
npm link @nysds/components
```

3. Restart the development server \
After linking, restart the Next.js development server:
```
npm run dev
```

**Now, any changes to NYSDS Web Components will be immediately reflected in this React app.**
