import { useState } from "react";
// import { Outlet } from "react-router-dom";
import SamplePage1 from "./SamplePage1";
import SamplePage2 from "./SamplePage2";
import SamplePage3 from "./SamplePage3";
import "../../styles/Stepper.css";

import {
  NysStepperComponent,
  NysStepComponent,
  NysButtonComponent,
} from "../../utils/nysds-components";

const StepperPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);

  const handleBack = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((step) => {
        const nextStep = Math.min(step + 1, 3)
        setMaxStepReached((prev) => Math.max(prev, nextStep)); // update latest reached
        return nextStep;
      });
    } else {
      console.warn("Current step invalid. Cannot proceed.");
    }
  };

  /**
   * Validate all form-associated elements (native + nys-components) in the current step.
   * This is so we don't allow users to navigate to the next step without first fulfilling the current step requirements
   * */
  const validateCurrentStep = (): boolean => {
    // get the form element
    const form = document.querySelector(".stepper-form") as HTMLFormElement;
    if (!form) return false;

    // Get the current step's container
    const currentStepDiv = form.querySelector(
      `.step-page:nth-child(${currentStep})`
    ) as HTMLElement;

    // Collect all form-associated elements (native + nys-components)
    interface ValidatableElement extends HTMLElement {
      checkValidity?: () => boolean;
    }

    const elements: ValidatableElement[] = Array.from(
      Array.from(currentStepDiv.querySelectorAll<HTMLElement>("*")).filter(
        (el) => typeof (el as ValidatableElement).checkValidity === "function"
      )
    );

    let isValid = true;

    elements.forEach((el) => {
      // All NYSDS form related component will have a checkValidity method, just like native. Here we validate it
      if (el.checkValidity) {
        const valid = el.checkValidity();
        if (!valid) {
          isValid = false;
          el.dispatchEvent(new Event("invalid", { bubbles: true }));
        }
      }
    });

    return isValid;
  };

  /** Handle final form submission */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Convert FormData to a plain object
    const data: Record<string, unknown> = {};

    for (const [key, value] of formData.entries()) {
      const allValues = formData.getAll(key);

      // If multiple values under the same key
      if (allValues.length > 1) {
        data[key] = allValues.map((value) =>
          value instanceof File
            ? { fileName: value.name, fileType: value.type }
            : value
        );
      } else {
        data[key] =
          value instanceof File
            ? { name: value.name, type: value.type, size: value.size }
            : value;
      }
    }

    alert("Form Data:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="nys-grid-row">
      <NysStepperComponent className="nys-desktop:nys-grid-col-3" label="Register for Design System Office Hours">
        <NysStepComponent
          label="Sample 1"
          onClick={() => setCurrentStep(1)}
          selected={currentStep === 1}
          current={maxStepReached === 1}
        />
        <NysStepComponent
          label="Sample 2"
          onClick={() => setCurrentStep(2)}
          selected={currentStep === 2}
          current={maxStepReached === 2}
        />
        <NysStepComponent
          label="Sample 3"
          onClick={() => setCurrentStep(3)}
          selected={currentStep === 3}
          current={maxStepReached === 3}
        />
        <div slot="actions">
          <NysButtonComponent
            variant="outline"
            label="Save &amp; Exit"
            fullWidth
          />
        </div>
      </NysStepperComponent>

      <form action="" className="stepper-form" onSubmit={handleSubmit}>
        <div className={`step-page ${currentStep === 1 ? "" : "hidden"}`}>
          <SamplePage1 />
        </div>
        <div className={`step-page ${currentStep === 2 ? "" : "hidden"}`}>
          <SamplePage2 />
        </div>
        <div className={`step-page ${currentStep === 3 ? "" : "hidden"}`}>
          <SamplePage3 />
        </div>

        <div className="button-container nys-display-flex">
          {currentStep > 1 && (
            <NysButtonComponent
              type="button"
              label="Back"
              onClick={handleBack}
            />
          )}
          {currentStep < 3 ? (
            <NysButtonComponent
              type="button"
              label="Next"
              onClick={handleNext}
            />
          ) : (
            <NysButtonComponent
              type="submit"
              label="Submit"
              variant="outline"
            ></NysButtonComponent>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepperPage;
