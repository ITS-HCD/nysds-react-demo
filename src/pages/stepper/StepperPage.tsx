import { Outlet } from "react-router-dom";

import {
  NysStepperComponent,
  NysStepComponent,
  NysButtonComponent
} from "../../utils/nysds-components";

const StepperPage = () => {
  return (
    <div className="nys-flex-1 nys-display-flex">
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
      <form action="">
        <Outlet />
      </form>
    </div>
  );
};

export default StepperPage;
