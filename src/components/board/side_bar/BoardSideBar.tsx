import * as React from "react";

import IconKanban from "../../../icons/kanban/IconKanban";

import "./BoardSideBar.scss";

import BoardSideBarMain from "./main/BoardSideBarMain";

//
export interface BoardSideBarProps {}

//
function BoardSideBar({}: BoardSideBarProps) {
  //
  const [hidden, setHidden] = React.useState(false);

  // -----

  const showSideBar = () => {
    setHidden(false);
  };

  const hideSideBar = () => {
    setHidden(true);
  };

  //
  return (
    <div className="BoardSideBar pos-rel">
      <div className={`BoardSideBar_show ${hidden ? "" : "display-none"}`}>
        <div
          className="BoardSideBar_show_contain flex-center"
          onClick={showSideBar}
          title="Show Sidebar"
        >
          {"->"}
        </div>
      </div>

      <div
        className={`BoardSideBar_contain ${
          hidden ? "BoardSideBar_contain-hidden" : ""
        }`}
      >
        <div className="BoardSideBar_row">
          <h2 className="BoardSideBar_heading flex items-center">
            <div className="BoardSideBar_icon_kanban">
              <IconKanban />
            </div>

            <div>kanban</div>
          </h2>

          <div className="BoardSideBar_main">
            <BoardSideBarMain hideSideBar={hideSideBar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardSideBar;
