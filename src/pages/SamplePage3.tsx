import React from "react";

export const SamplePage3 = () => {
  return (
    <>
      <h1>Usage Survey</h1>
      <NysTextareaComponent
        name="quote"
        label="Tell us how you plan to use this application?"
        description="Your feedback helps us improve."
        required
      />
    </>
  );
};
