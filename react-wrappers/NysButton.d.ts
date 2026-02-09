import React from "react";
import {
  NysButton as NysButtonElement,
  Event,
} from "../../../dist/nysds.es.js";

export type { NysButtonElement, Event };

export interface NysButtonProps
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
  fullWidth?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  circle?: boolean;

  /** undefined */
  disabled?: boolean;

  /** undefined */
  id?: NysButtonElement["id"];

  /** undefined */
  name?: NysButtonElement["name"];

  /** undefined */
  size?: NysButtonElement["size"];

  /** undefined */
  variant?: NysButtonElement["variant"];

  /** undefined */
  label?: NysButtonElement["label"];

  /** undefined */
  ariaLabel?: NysButtonElement["ariaLabel"];

  /** undefined */
  ariaControls?: NysButtonElement["ariaControls"];

  /** undefined */
  prefixIcon?: NysButtonElement["prefixIcon"];

  /** undefined */
  suffixIcon?: NysButtonElement["suffixIcon"];

  /** undefined */
  icon?: NysButtonElement["icon"];

  /** undefined */
  form?: NysButtonElement["form"];

  /** undefined */
  value?: NysButtonElement["value"];

  /** undefined */
  ariaDescription?: NysButtonElement["ariaDescription"];

  /** undefined */
  type?: NysButtonElement["type"];

  /** undefined */
  href?: NysButtonElement["href"];

  /** undefined */
  target?: NysButtonElement["target"];

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
  onNysFocus?: (event: CustomEvent) => void;

  /** undefined */
  onNysBlur?: (event: CustomEvent) => void;

  /** undefined */
  onNysClick?: (event: CustomEvent) => void;
}

/**
 * `<nys-button>` is a button component that supports multiple
 * styles (variants), sizes, icons, circle mode, and can act as a native
 * button or a link. It is form-associated and supports keyboard accessibility.
 * ---
 *
 *
 * ### **Events:**
 *  - **nys-focus**
 * - **nys-blur**
 * - **nys-click**
 */
export const NysButton: React.ForwardRefExoticComponent<NysButtonProps>;
