import * as React from "react";

import { contextBoard } from "../../../context/board/contextBoard";
import { useHidden } from "../../../hooks/useHidden";
import { useBool } from "../../../hooks/useBool";

import IconKanban from "../../../icons/kanban/IconKanban";
import ModalAddTask from "../../modals/add_task/ModalAddTask";

import "./BoardMb.scss";

import BoardColumns from "../main/columns/BoardColumns";
import BoardSideBarMain from "../side_bar/main/BoardSideBarMain";
import { handleCreateCardType } from "../../../types";

//
export interface BoardMbProps {}

//
function BoardMb({}: BoardMbProps) {
  //
  const { boards, id_board, handleCreateCard } = React.useContext(contextBoard);

  //
  const { is_true, setBoolFalse, setBoolTrue } = useBool(false);

  const { hidden, toggleSideBar } = useHidden(true);

  // ---

  const onCreateCard: handleCreateCardType = (data_card) => {
    setBoolFalse();
    handleCreateCard(data_card);
  };

  //
  return (
    <div className="BoardMb">
      <div className="BoardMb_header pos-rel">
        <div className="BoardMb_header_row flex items-center space-between">
          <div
            className="grow-1 flex items-center overflow-hidden"
            onClick={toggleSideBar}
          >
            <div className="shrink-0">{">"}</div>

            <div className="BoardMb_icon_kanban shrink-0">
              <IconKanban />
            </div>

            <div className="BoardMb_name">{boards[id_board].name}</div>
          </div>

          <div
            className="BoardMb_create_task flex-center shrink-0"
            onClick={setBoolTrue}
          >
            <span className="BoardMb_create_task_text">+</span>
          </div>
        </div>

        <div className={`BoardMb_sidebar ${hidden ? "display-none" : ""}`}>
          <BoardSideBarMain />
        </div>
      </div>

      <div className="BoardMb_columns">
        <BoardColumns />
      </div>

      {is_true ? (
        <ModalAddTask
          handleCreateCard={onCreateCard}
          closeModal={setBoolFalse}
        />
      ) : null}
    </div>
  );
}

export default BoardMb;
