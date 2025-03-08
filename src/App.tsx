import { FormEvent } from 'react';
import './App.css';
import { createComponent } from "@lit/react";
import React from "react";
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


function App() {
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
  };

  return (
    <>
      <h1>Vite + React + NYSDS</h1>
      {/* Use the custom element directly */}
      <form
        className="nys-newsletter-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <TextInput name='fullName' label="Full name" />
        
        <Textarea name='quote' label="Enter your favorite quote:" value="Majorities, of course, start with minorities." />
        
        <Select name="newsletter_topic" label="Select your preferred newsletter topic" id="newsletter-topic">
          <Option value="government_updates" label="Government Updates" />
          <Option value="community_events" label="Community Events" />
          <Option value="public_services" label="Public Services & Resources" />
          <Option value="transportation_news" label="Transportation & Infrastructure" />
          <Option value="environment" label="Environment & Sustainability" />      
        </Select>

        {/* <nys-select name="example" label="Select your favorite borough" id="borough">
          <nys-option value="bronx" label="The Bronx"></nys-option>
          <nys-option value="brooklyn" label="Brooklyn"></nys-option>
          <nys-option value="manhattan" label="Manhattan"></nys-option>
          <nys-option value="staten_island" label="Staten Island"></nys-option>
          <nys-option value="queens" label="Queens"></nys-option>      
        </nys-select> */}

        <RadioGroup 
          name="frequency"
          label="How often do you want updates?"
          description="These updates will be sent directly to your email."
          size="md"
        >
          <Radiobutton
            label="Weekly"
            value="weekly"
          />
          <Radiobutton
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
        />

        <Checkboxgroup
          label="Select your favorite New York landmarks"
          description="Choose from the options below"
        >
          <Checkbox label="Adirondacks" name="landmarks[]" value="adirondacks" />
          <Checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" />
          <Checkbox name="landmarks" value="catskills" label="Catskills" />
          <Checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"/>
          <Checkbox name="landmarks" value="coney-island" label="Coney Island"/>
        </Checkboxgroup>

        <Button
          type="submit"
          fullWidth
          label="Subscribe"
        />
      </form>
    </>
  );
}

export default App;
