import { Outlet } from "react-router-dom";
import "../../styles/Stepper.css";

import {
  NysStepperComponent,
  NysStepComponent,
  NysButtonComponent,
} from "../../utils/nysds-components";

const StepperPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success!")
  }

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
      <form action="" className="stepper-form" onSubmit={handleSubmit}>
        <Outlet />
      </form>
    </div>
  );
};

export default StepperPage;
