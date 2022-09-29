import * as React from "react";

import "./SwitchBtn.scss";

//
export interface SwitchBtnProps {
  switch_on?: boolean;
}

//
function SwitchBtn({ switch_on = false }: SwitchBtnProps) {
  //
  return (
    <div className={`SwitchBtn ${switch_on ? "SwitchBtn-open" : ""}`}>
      <div className="SwitchBtn_ball" />
    </div>
  );
}

export default SwitchBtn;
