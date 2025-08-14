import { useState } from "react";
import { Outlet } from "react-router-dom";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success!");
  };

  return (
    <div className="nys-flex-1 nys-display-flex">
      <NysStepperComponent label="Register for Design System Office Hours">
        <NysStepComponent
          label="Sample 1"
          href="stepper/sample1"
          selected
          current
        />
        <NysStepComponent label="Sample 2" href="stepper/sample2" />
        <NysStepComponent label="Sample 3" href="stepper/sample3" />
        <div slot="actions">
          <NysButtonComponent
            variant="outline"
            label="Save &amp; Exit"
            fullWidth
          />
        </div>
      </NysStepperComponent>

      {/* Wrap the form in StepperProvider so all step pages share and persist form data across route changes */}
      <StepperProvider>
        <form action="" className="stepper-form" onSubmit={handleSubmit}>
          <Outlet />
        </form>
      </StepperProvider>
    </div>
  );
};

export default StepperPage;
