import React from "react";
// import {
//   NysDatepicker as NysDatepickerElement,
//   Event,
//   CustomEvent,
// } from "../../../dist/nysds.es.js";

export type { NysDatepickerElement, Event, CustomEvent };

export interface NysDatepickerProps
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
  hideTodayButton?: boolean;

  /** undefined */
  hideClearButton?: boolean;

  /** undefined */
  disabled?: boolean;

  /** undefined */
  required?: boolean;

  /** undefined */
  optional?: boolean;

  /** undefined */
  showError?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  id?: NysDatepickerElement["id"];

  /** undefined */
  name?: NysDatepickerElement["name"];

  /** undefined */
  width?: NysDatepickerElement["width"];

  /** undefined */
  errorMessage?: NysDatepickerElement["errorMessage"];

  /** undefined */
  form?: NysDatepickerElement["form"];

  /** undefined */
  tooltip?: NysDatepickerElement["tooltip"];

  /** undefined */
  type?: NysDatepickerElement["type"];

  /** undefined */
  label?: NysDatepickerElement["label"];

  /** undefined */
  description?: NysDatepickerElement["description"];

  /** undefined */
  startDate?: NysDatepickerElement["startDate"];

  /** undefined */
  value?: NysDatepickerElement["value"];

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
  onNysBlur?: (event: CustomEvent) => void;

  /** undefined */
  onNysInput?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **nys-blur**
 * - **nys-input**
 *
 * ### **Methods:**
 *  - **checkValidity(): _boolean_** - Passive check of validity:
 * - Returns true/false
 * - Does NOT update UI or show errors
 * - Used in form submission checks
 */
export const NysDatepicker: React.ForwardRefExoticComponent<NysDatepickerProps>;
