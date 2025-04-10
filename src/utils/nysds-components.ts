import { createComponent } from "@lit/react";

// Import the components so that the custom elements are registered
import {
   NysAlert,
   NysButton,
   NysCheckbox,
   NysCheckboxgroup,
   NysOption,
   NysRadiobutton,
   NysRadiogroup,
   NysSelect,
   NysTextarea,
   NysTextinput,
   NysToggle,

} from "@nysds/components";
import * as React from "react";

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
