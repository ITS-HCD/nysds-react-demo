import {
  NysTextarea,
  // NysButton,
} from "@nysds/components/react";

const SamplePage3 = () => {
  return (
    <div className="main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Usage Survey (Sample 3)</h1>
      <NysTextarea
        name="quote"
        label="Tell us how you plan to use this application?"
        description="Your feedback helps us improve."
        required
      />

      {/* <div className="button-container nys-display-flex">
        <NysButton label="Back" href="sample2"></NysButton>
        <NysButton type="submit" label="Submit" variant="outline"></NysButton>
      </div> */}
    </div>
  );
};

export default SamplePage3;
