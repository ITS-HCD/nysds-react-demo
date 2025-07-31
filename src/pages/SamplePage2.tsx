import React from "react";

export const SamplePage2 = () => {
  return (
    <>
      <h1>Team Information</h1>
      <p>
        Provide details about your team. Who are you working with? What is your
        role?
      </p>
      <NysTextInputComponent
        name="teamMembers"
        label="Who are you working with?"
        required
      />
      <NysTextInputComponent name="role" label="What is your role?" required />
    </>
  );
};
