import * as React from "react";

import "./BoardSidebarToggle.scss";

//
export interface BoardSidebarToggleProps {
  hideSideBar: () => void;
}

//
function BoardSidebarToggle({ hideSideBar }: BoardSidebarToggleProps) {
  //
  return (
    <div className="BoardSidebarToggle" onClick={hideSideBar}>
      <div>Hide Sidebar</div>
    </div>
  );
}

export default BoardSidebarToggle;
