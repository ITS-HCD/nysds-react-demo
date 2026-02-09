import React, { forwardRef } from "react";
// import "../../../dist/nysds.es.js";

export const NysStep = forwardRef((props, forwardedRef) => {
  const {
    selected,
    current,
    isCompactExpanded,
    label,
    href,
    stepNumber,
    ...filteredProps
  } = props;

  return React.createElement(
    "nys-step",
    {
      ...filteredProps,
      label: props.label,
      href: props.href,
      stepNumber: props.stepNumber,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? true : undefined,
      current: props.current ? true : undefined,
      isCompactExpanded: props.isCompactExpanded ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
