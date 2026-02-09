import React from "react";
import {
  NysSelect as NysSelectElement,
  CustomEvent,
  Event,
} from "../../../dist/nysds.es.js";

export type { NysSelectElement, CustomEvent, Event };

export interface NysSelectProps
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
  required?: boolean;

  /** undefined */
  optional?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  showError?: boolean;

  /** undefined */
  id?: NysSelectElement["id"];

  /** undefined */
  name?: NysSelectElement["name"];

  /** undefined */
  label?: NysSelectElement["label"];

  /** undefined */
  description?: NysSelectElement["description"];

  /** undefined */
  value?: NysSelectElement["value"];

  /** undefined */
  tooltip?: NysSelectElement["tooltip"];

  /** undefined */
  form?: NysSelectElement["form"];

  /** undefined */
  errorMessage?: NysSelectElement["errorMessage"];

  /** undefined */
  width?: NysSelectElement["width"];

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
  onNysChange?: (event: CustomEvent) => void;

  /** undefined */
  onNysFocus?: (event: CustomEvent) => void;

  /** undefined */
  onNysBlur?: (event: CustomEvent) => void;
}

/**
 * `NysSelect` is a custom select/dropdown component built for Lit.
 * Supports slotted <nys-option> elements, native <option> and <optgroup>,
 * integrates with forms via ElementInternals, and manages validation
 * and error messaging.
 * ---
 *
 *
 * ### **Events:**
 *  - **nys-change**
 * - **nys-focus**
 * - **nys-blur**
 *
 * ### **Methods:**
 *  - **checkValidity(): _boolean_** - Functions
 * --------------------------------------------------------------------------
 */
export const NysSelect: React.ForwardRefExoticComponent<NysSelectProps>;
