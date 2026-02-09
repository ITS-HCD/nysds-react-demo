import React from "react";
import {
  NysAlert as NysAlertElement,
  CustomEvent,
} from "../../../dist/nysds.es.js";

export type { NysAlertElement, CustomEvent };

export interface NysAlertProps
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
  dismissible?: boolean;

  /** undefined */
  id?: NysAlertElement["id"];

  /** undefined */
  heading?: NysAlertElement["heading"];

  /** undefined */
  icon?: NysAlertElement["icon"];

  /** undefined */
  duration?: NysAlertElement["duration"];

  /** undefined */
  text?: NysAlertElement["text"];

  /** undefined */
  primaryAction?: NysAlertElement["primaryAction"];

  /** undefined */
  secondaryAction?: NysAlertElement["secondaryAction"];

  /** undefined */
  primaryLabel?: NysAlertElement["primaryLabel"];

  /** undefined */
  secondaryLabel?: NysAlertElement["secondaryLabel"];

  /** undefined */
  type?: NysAlertElement["type"];

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

  /** Returns ARIA role and label based on alert type.
- 'alert' => assertive live region (implied)
- 'status' => polite live region
- 'region' => generic, requires aria-label */
  ariaAttributes?: NysAlertElement["ariaAttributes"];

  /** Returns live-region type for screen readers if applicable.
- 'polite' for status role
- undefined for alert (since it's implicitly assertive) or region */
  liveRegion?: NysAlertElement["liveRegion"];

  /** undefined */
  onNysClose?: (event: CustomEvent) => void;
}

/**
 * NYS Alert component.
 *
 * Renders informational, success, warning, or error alerts.
 * Supports live-region announcements for screen readers.
 * ---
 *
 *
 * ### **Events:**
 *  - **nys-close**
 */
export const NysAlert: React.ForwardRefExoticComponent<NysAlertProps>;
