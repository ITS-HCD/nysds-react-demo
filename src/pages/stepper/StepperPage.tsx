import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import {
  NysStepperComponent,
  NysStepComponent,
  NysButtonComponent
} from "../../utils/nysds-components";

const StepperPage = () => {
  //   useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const stepper = document.querySelector("nys-stepper");
  //     const contentDiv = document.getElementById("stepper-content");

  //     if (!stepper || !contentDiv) return;

  //     const loadContent = async (href: string | null) => {
  //       if (!href) {
  //         contentDiv.innerHTML =
  //           "<div>This step has no href to load content from.</div>";
  //         return;
  //       }
  //       try {
  //         contentDiv.innerHTML = "<div>Loading...</div>";
  //         const response = await fetch(href);
  //         if (!response.ok) throw new Error("Network response was not ok");
  //         const html = await response.text();
  //         contentDiv.innerHTML = html;
  //       } catch (error) {
  //         console.error(error);
  //         contentDiv.innerHTML = "<div>Error loading content.</div>";
  //       }
  //     };

  //     const activateStep = async (stepEl: Element) => {
  //       if (!stepEl || stepEl.tagName !== "NYS-STEP") return;
  //       const onClick = (stepEl as any).onClick;
  //       const href = stepEl.getAttribute("href");

  //       if (typeof onClick === "function") {
  //         onClick();
  //       }
  //       if (href) {
  //         await loadContent(href);
  //       }
  //     };

  //     const selectedStep = stepper.querySelector("nys-step[selected]");
  //     if (selectedStep) {
  //       activateStep(selectedStep);
  //     }

  //     stepper.addEventListener("nys-step-click", async (e: Event) => {
  //       const stepEl = e.target as Element;
  //       await activateStep(stepEl);
  //     });
  //   }, 0);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      <NysStepperComponent label="Register for Design System Office Hours">
        <NysStepComponent
          label="Home"
          href="/"
        />
        <NysStepComponent
          label="Basic Form"
          selected
          href="/basic-form"
        />
        <NysStepComponent
          label="Sample 1"
          current
          href="/sample1"
        />
        <NysStepComponent
          label="Sample 2"
          href="/sample 2"
        />
        <div slot="actions">
          <NysButtonComponent
            variant="outline"
            label="Save &amp; Exit"
            fullWidth
          />
        </div>
      </NysStepperComponent>
      <Outlet />
    </>
  );
};

export default StepperPage;
