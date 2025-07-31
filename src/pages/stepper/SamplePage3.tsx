import { NysTextareaComponent } from "../../utils/nysds-components";

const SamplePage3 = () => {
  return (
    <div className="main-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Usage Survey</h1>
      <NysTextareaComponent
        name="quote"
        label="Tell us how you plan to use this application?"
        description="Your feedback helps us improve."
        required
      />
    </div>
  );
};

export default SamplePage3;
