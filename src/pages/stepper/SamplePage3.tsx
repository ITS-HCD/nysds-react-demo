import {
  NysTextareaComponent,
  // NysButtonComponent,
} from "../../utils/nysds-components";

const SamplePage3 = () => {
  return (
    <div className="main-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Usage Survey (Sample 3)</h1>
      <NysTextareaComponent
        name="quote"
        label="Tell us how you plan to use this application?"
        description="Your feedback helps us improve."
        required
      />

      {/* <div className="button-container nys-display-flex">
        <NysButtonComponent label="Back" href="sample2"></NysButtonComponent>
        <NysButtonComponent type="submit" label="Submit" variant="outline"></NysButtonComponent>
      </div> */}
    </div>
  );
};

export default SamplePage3;
