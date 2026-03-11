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
```

## 1. Starting the Dev Server
Run the following to start the local dev server:
```
npm run dev
```

## 2. Using NYSDS components 
> [!IMPORTANT]
> ~~NYSDS components must be wrapped with **wrapped with `@lit/react`** to work correctly in React.~~
> As of March 2026, the NYSDS team depreciated the old manual wrapping of NYSDS components. NYSDS components are now available directly via `@nysds/components/react` — no manual wrapping or `@lit/react` setup required.

```tsx
import { NysButton, NysTextinput } from "@nysds/components/react";

function MyForm() {
  return (
    <>
      <NysTextinput label="First name" />
      <NysButton label="Submit" variant="filled" onNysClick={() => console.log("clicked!")} />
    </>
  );
}
```

All props are typed and custom events map to `on<EventName>` React callbacks (e.g. `nys-click` → `onNysClick`).

## 3. Using NYSDS components 
Once wrapped, components can be imported and used like standard React components. See `App.tsx` for examples. The multipages branch also uses wrapped components in the src/pages/ directory.

## 4. NYSDS style imports
For styling, import the NYSDS CSS files in index.html. Reference them directly from the installed package location (e.g., node_modules folder).
___

## Setting up npm link (For NYSDS developers) 🛠️
> [!Tip]
> If you're actively developing the NYSDS Web Components and want to test local changes before publishing, you can use `npm link` to work with your local build inside this React demo project. \
> You’ll need two terminal or command prompt windows (or tabs) open - one for the NYSDS repo and one for the React demo.


1. Build and link the NYSDS repo \
Navigate to your local NYSDS repo and run:
```
npm run build:all
npm link
```
This creates a global symlink for the NYSDS package.

2. Link it to this React project \
In this React demo project run:
```
npm link @nysds/components
```

3. Restart the dev server:
```
npm run dev
```

**Now, any changes to NYSDS Web Components will be immediately reflected in this React app.**

## Deploying 📦
This project uses [gh-pages](https://github.com/tschaub/gh-pages) to deploy the build output to GitHub Pages.

### Setup
- Make sure `gh-pages` is installed (already listed in `package.json`).

### Commands
- `npm run build`  
  Builds the project into the `dist/` folder using Vite.

- `npm run deploy`  
  Publishes the contents of `dist/` to the `gh-pages` branch.

### Deployment Process
1. Run `npm run build` to create the production build.
2. Run `npm run deploy` to push the build to GitHub Pages.
3. The site will be available at:  
   `https://<github-username>.github.io/<repo-name>/`

> Note: The `base` option in `vite.config.js` should match the repository name (e.g., `/nysds-react-demo/`) so assets load correctly.
