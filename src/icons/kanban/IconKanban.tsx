import * as React from "react";

import "./IconKanban.scss";

//
export interface IconKanbanProps {}

//
function IconKanban({}: IconKanbanProps) {
  //
  return (
    <div className="IconKanban wh-100per flex-center">
      <div className="IconKanban_item IconKanban_item-1"></div>
      <div className="IconKanban_item IconKanban_item-2"></div>
      <div className="IconKanban_item IconKanban_item-3"></div>
    </div>
  );
}

export default IconKanban;
