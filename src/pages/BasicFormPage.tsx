import { FormEvent, useState, useRef } from "react";
import "../styles/App.scss";
import "../styles/BasicForm.scss";

import {
  NysAlert,
  NysButton,
  NysCheckbox,
  NysCheckboxgroup,
  NysCombobox,
  NysDatepicker,
  NysDivider,
  NysFileinput,
  NysModal,
  NysRadiobutton,
  NysRadiogroup,
  NysSelect,
  NysTextinput,
  NysTextarea,
  NysToggle,
  NysTooltip,
} from "@nysds/components/react";

// NYSDS 1 year anniversary confetti 🎉
import confetti from "canvas-confetti";

const BasicForm = () => {
  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState<Record<
    string,
    unknown
  > | null>(null);

  const modalRef = useRef<{open?: boolean} | null>(null);

  /**
   * This function is meant to demonstrate the handling of form submission with NYSDS components.
   * Note how we perform serializeFormData() to get all the details from the FormData
   * @param e
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = serializeFormData(e.target as HTMLFormElement);

    // 🎉 Launch confetti
    fireConfetti();

    alert("Form Data:\n" + JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  const serializeFormData = (form: HTMLFormElement) => {
    const data: Record<string, unknown> = {};
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
      const allValues = formData.getAll(key);

      // If multiple values under the same key
      if (allValues.length > 1) {
        data[key] = allValues.map((value) =>
          value instanceof File
            ? { fileName: value.name, fileType: value.type }
            : value,
        );
      } else {
        data[key] =
          value instanceof File
            ? { name: value.name, type: value.type, size: value.size }
            : value;
      }
    }
    return data;
  };

  /**
   * Below are the functions for opening, closing, and saving with the <nys-modal>
   * Note how we perform serializeFormData() to get all the details from the FormData
   */
  const openModal = () => {
    // Note: we use ref instead of document.getElementById like native JS for React access to web component
    if (modalRef.current) {
      modalRef.current.open = true;
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.open = false;
    }
  };

  const saveChanges = () => {
    // Perform any save logic
    alert(
      "*Slaps face* >:[ \n WE WILL ASK THE QUESTIONS!!  \n \n (The Office: Season 5, Episode 19) ",
    );
    closeModal();
  };

  // NYSDS 1 year anniversary confetti 🎉
  const fireConfetti = () => {
    const duration = 1500;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }

      // More confetti!
      confetti({
        particleCount: 55,
        spread: 150,
        startVelocity: 30,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 100);
  };

  return (
    <div className="main-content">
      <h1 className="appTitle">Vite + React + NYSDS</h1>
      <NysAlert
        type="info"
        heading="Using NYSDS Components in Forms"
        text="The form below shows how NYSDS form components can be used inside a standard HTML form. Each of our web components work with normal form submission and validation, allowing you to collect and process data through formData just like native controls."
        primaryLabel="Learn more about NYSDS on our reference site"
        primaryAction="https://designsystem.ny.gov/"
        dismissible
      />

      <form
        id="myForm"
        className="nys-newsletter-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <NysCombobox
          name="my-combobox"
          label="Select your favorite fruit"
          placeholder="Type to search..."
          required
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
          <option value="date">Date</option>
          <option value="elderberry">Elderberry</option>
          <option value="fig">Fig</option>
          <option value="grape">Grape</option>
          <option value="honeydew">Honeydew</option>
          <option value="kiwi">Kiwi</option>
          <option value="lemon">Lemon</option>
          <option value="mango">Mango</option>
          <option value="nectarine">Nectarine</option>
          <option value="orange">Orange</option>
          <option value="papaya">Papaya</option>
          <option value="quince">Quince</option>
          <option value="raspberry">Raspberry</option>
          <option value="strawberry">Strawberry</option>
          <option value="tangerine">Tangerine</option>
          <option value="watermelon">Watermelon</option>
        </NysCombobox>

        <NysDatepicker
          id="datepicker1"
          name="datepicker1"
          type="date"
          label="Schedule your appointment"
          description="Enter in MM/DD/YYYY format"
        />

        <NysRadiogroup
          id="my-radiogroup"
          label="How often do you want updates?"
          description="These updates will be sent directly to your email."
          size="md"
          required
        >
          <NysRadiobutton name="frequency" label="Weekly" value="weekly" />
          <NysRadiobutton name="frequency" label="Monthly" value="monthly" />
          <NysRadiobutton name="frequency" label="Other" other />
        </NysRadiogroup>

        <NysCheckboxgroup
          id="my-checkboxgroup"
          label="Select your favorite New York landmarks"
          description="Choose from the options below"
          required
        >
          <NysCheckbox
            name="landmarks"
            label="Adirondacks"
            value="adirondacks"
          />
          <NysCheckbox
            name="landmarks"
            value="finger-lakes"
            label="Finger Lakes"
          />
          <NysCheckbox name="landmarks" value="catskills" label="Catskills" />
          <NysCheckbox
            name="landmarks"
            value="niagara-falls"
            label="Niagara Falls"
          />
          <NysCheckbox name="landmarks" other />
        </NysCheckboxgroup>

        <NysDivider />
        <NysDivider />
        <NysDivider />

        <NysTooltip
          for="my-textinput"
          text="I am a tooltip, used for hints."
        ></NysTooltip>
        <NysTextinput
          id="my-textinput"
          name="fullName"
          label="Full name"
          description="Enter your full legal name"
          onNysBlur={(e) => {
            console.log("nys-blur event received 🔥", e);
          }}
        />
        <NysTextinput
          name="email"
          label="Email"
          type="email"
          onNysInput={(e) => {
            console.log("nys-input event received 🔥", e);
          }}
        />
        <NysTextarea
          id="my-textarea"
          name="quote"
          label="Enter your favorite quote:"
          value="Majorities, of course, start with minorities."
        />

        {/* Note: when wrapping components within a component, you will need a closing tag (e.g. select, radiogroup, checkboxgroup, slot wrappings for inner HTML elements) */}
        <NysSelect
          name="newsletter_topic"
          label="Select your preferred newsletter topic"
          id="newsletter-topic"
        >
          {/* <option value="">--Please choose an option--</option> */}
          <option value="government_updates" label="Government Updates" />
          <option value="community_events" label="Community Events" />
          <option value="public_services" label="Public Services & Resources" />
          <option
            value="transportation_news"
            label="Transportation & Infrastructure"
          />
          <option value="environment" label="Environment & Sustainability" />
        </NysSelect>

        <NysFileinput
          id="my-fileinput"
          name="uploadImg"
          label="Upload a file"
          description="Accepted file types: .jpg, .png, .pdf"
          accept="image/png, image/jpeg, .pdf"
          multiple
          dropzone
        />

        <NysToggle
          label="Dark Mode"
          name="toggle-switch"
          value="dark_mode_on"
        >
          <p slot="description">
            Toggle switch is usually NOT recommended for forms (use checkboxes
            instead).
          </p>
        </NysToggle>

        <NysButton type="submit" fullWidth label="Subscribe" />
      </form>
      <br></br>
      {submittedData && (
        <NysAlert
          type="success"
          heading="Form submitted successfully"
          text={`${submittedData ? "\n\nSubmitted Data:\n" + JSON.stringify(submittedData, null, 2) : ""}`}
          dismissible
        />
      )}

      {/* MODAL SHOWCASE */}
      <NysButton
        type="button"
        label="Knock Knock (Show Modal)"
        onNysClick={openModal}
        variant="outline"
      ></NysButton>
      <NysModal
        ref={modalRef}
        id="myModal"
        heading="Who's there?"
        subheading="KGB..."
      >
        <p>
          Ipsum Lorem. Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit...
        </p>
        <div slot="actions">
          <NysButton
            label="Don't answer"
            variant="outline"
            onNysClick={closeModal}
          ></NysButton>
          <NysButton
            label="KGB who?"
            onNysClick={saveChanges}
          ></NysButton>
        </div>
      </NysModal>
    </div>
  );
};

export default BasicForm;
