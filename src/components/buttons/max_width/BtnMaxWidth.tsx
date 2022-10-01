import * as React from "react";

import "./BtnMaxWidth.scss";

//
export interface BtnMaxWidthProps
  extends Omit<React.ComponentProps<"button">, "className"> {
  className?: string;
  children?: React.ComponentProps<"button">["children"];
}

//
function BtnMaxWidth({
  className = "",
  children,
  ...res_props
}: BtnMaxWidthProps) {
  //
  return (
    <button
      className={`BtnMaxWidth w-100per hv-opacity-09 active-scale-096 ${className}`}
      type="button"
      {...res_props}
    >
      {children}
    </button>
  );
}

export default BtnMaxWidth;
