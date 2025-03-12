import React, { FormEvent, useState } from 'react';
import './App.css';
import { createComponent } from "@lit/react";

// Import the components so that the custom elements are registered
import {
  NysTextinput,
  NysTextarea,
  NysCheckbox,
  NysCheckboxgroup,
  NysRadiobutton,
  NysRadiogroup,
  NysSelect,
  NysOption,
  NysAlert,
  NysButton,
  NysToggle,
} from "@nysds/components";

/***** Further instruction on why we do this can be found on: https://lit.dev/docs/frameworks/react/ *****/
// Wrap components
export const TextInput = createComponent({
  react: React,
  tagName: "nys-textinput",
  elementClass: NysTextinput,
});

export const Textarea = createComponent({
  react: React,
  tagName: "nys-textarea",
  elementClass: NysTextarea,
});

export const Checkbox = createComponent({
  react: React,
  tagName: "nys-checkbox",
  elementClass: NysCheckbox,
});

export const Checkboxgroup = createComponent({
  react: React,
  tagName: "nys-checkboxgroup",
  elementClass: NysCheckboxgroup,
});

export const Radiobutton = createComponent({
  react: React,
  tagName: "nys-radiobutton",
  elementClass: NysRadiobutton,
});

export const RadioGroup = createComponent({
  react: React,
  tagName: "nys-radiogroup",
  elementClass: NysRadiogroup,
});


export const Select = createComponent({
  react: React,
  tagName: "nys-select",
  elementClass: NysSelect,
});

export const Option = createComponent({
  react: React,
  tagName: "nys-option",
  elementClass: NysOption,
});

export const Alert = createComponent({
  react: React,
  tagName: "nys-alert",
  elementClass: NysAlert,
});

export const Button = createComponent({
  react: React,
  tagName: "nys-button",
  elementClass: NysButton,
});
export const Toggle = createComponent({
  react: React,
  tagName: "nys-toggle",
  elementClass: NysToggle,
});


function App() {
  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState<Record<string, FormDataEntryValue> | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assert that the target is an HTMLFormElement
    const formData = new FormData(e.target as HTMLFormElement);

    // Convert FormData to a plain object
    const data: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    alert('Form Data:\n' + JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  return (
    <>
      <h1>Vite + React + NYSDS</h1>
      <Alert 
        type="info"
        heading="NYSDS Components"
        text="We make use of form-related NYSDS components in the native HTML form below."
        primaryLabel="Learn more on NYSDS reference site"
        primaryAction="https://designsystem.ny.gov/"
        dismissible
      />

      <form
        id="myForm"
        className="nys-newsletter-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <TextInput name='fullName' label="Full name" required/>
        <TextInput name='email' label="Email" type="email" required/>
        <Textarea name='quote' label="Enter your favorite quote:" value="Majorities, of course, start with minorities." required/>
        
        <Select name="newsletter_topic" label="Select your preferred newsletter topic" id="newsletter-topic" required>
          <Option value="government_updates" label="Government Updates" />
          <Option value="community_events" label="Community Events" />
          <Option value="public_services" label="Public Services & Resources" />
          <Option value="transportation_news" label="Transportation & Infrastructure" />
          <Option value="environment" label="Environment & Sustainability" />      
        </Select>

        <RadioGroup
          label="How often do you want updates?"
          description="These updates will be sent directly to your email."
          size="md"
          required
        >
          <Radiobutton
            name="frequency"
            label="Weekly"
            value="weekly"
          />
          <Radiobutton
            name="frequency"
            label="Monthly"
            value="monthly"
          />
        </RadioGroup>

        <Checkbox
          label="Subscribe to NYS Government Updates"
          description="Get notified via email about important updates and services."
          id="subscribe-checkbox-disabled-checked"
          name="subscribe"
          value="email-updates"
          required
        />

        <Checkboxgroup
          label="Select your favorite New York landmarks"
          description="Choose from the options below"
          required
        >
          <Checkbox name="landmarks" label="Adirondacks" value="adirondacks" />
          <Checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" />
          <Checkbox name="landmarks" value="catskills" label="Catskills" />
          <Checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"/>
          <Checkbox name="landmarks" value="coney-island" label="Coney Island"/>
        </Checkboxgroup>
        <Toggle
          label="Dark Mode"
          name="toggle-switch"
          value="access"><p slot="description">Toggle switch is usually NOT recommended for forms (use checkboxes instead).</p></Toggle>
        <Button
          type="submit"
          fullWidth
          label="Subscribe"
        />
      </form>
      <br></br>
      {submittedData && (
        <Alert
          type="success"
          heading="Form submitted successfully"
          text={`${submittedData ? "\n\nSubmitted Data:\n" + JSON.stringify(submittedData, null, 2) : ""}`}
          dismissible
        />
      )}
    </>
  );
}

export default App;
