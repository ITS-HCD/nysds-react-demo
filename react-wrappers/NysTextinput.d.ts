import React from "react";
import {
  NysTextinput as NysTextinputElement,
  CustomEvent,
  Event,
} from "../../../dist/nysds.es.js";

export type { NysTextinputElement, CustomEvent, Event };

export interface NysTextinputProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "style"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** undefined */
  disabled?: boolean;

  /** undefined */
  readonly?: boolean;

  /** undefined */
  required?: boolean;

  /** undefined */
  optional?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  showError?: boolean;

  /** undefined */
  id?: NysTextinputElement["id"];

  /** undefined */
  name?: NysTextinputElement["name"];

  /** undefined */
  type?: NysTextinputElement["type"];

  /** undefined */
  label?: NysTextinputElement["label"];

  /** undefined */
  description?: NysTextinputElement["description"];

  /** undefined */
  placeholder?: NysTextinputElement["placeholder"];

  /** undefined */
  value?: NysTextinputElement["value"];

  /** undefined */
  tooltip?: NysTextinputElement["tooltip"];

  /** undefined */
  form?: NysTextinputElement["form"];

  /** undefined */
  pattern?: NysTextinputElement["pattern"];

  /** undefined */
  maxlength?: NysTextinputElement["maxlength"];

  /** undefined */
  width?: NysTextinputElement["width"];

  /** undefined */
  step?: NysTextinputElement["step"];

  /** undefined */
  min?: NysTextinputElement["min"];

  /** undefined */
  max?: NysTextinputElement["max"];

  /** undefined */
  errorMessage?: NysTextinputElement["errorMessage"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** undefined */
  onNysInput?: (event: CustomEvent) => void;

  /** undefined */
  onNysFocus?: (event: CustomEvent) => void;

  /** undefined */
  onNysBlur?: (event: CustomEvent) => void;
}

/**
 * `NysTextinput` is a form-enabled text input component that supports
 * validation, masking (like phone numbers), password visibility toggling,
 * accessibility, and live error messaging. Integrates with forms via ElementInternals
 * and emits custom events on user interaction.
 * ---
 *
 *
 * ### **Events:**
 * - **nys-input**
 * - **nys-focus**
 * - **nys-blur**
 *
 * ### **Methods:**
 *  - **checkValidity(): _boolean_** - Functions
 * --------------------------------------------------------------------------
 */
export const NysTextinput: React.ForwardRefExoticComponent<NysTextinputProps>;
