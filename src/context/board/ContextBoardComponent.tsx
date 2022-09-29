import * as React from "react";
import { useParams } from "react-router-dom";

import { contextBoard } from "./contextBoard";
import { useBoard } from "../../hooks/useBoard";

//
export interface ContextBoardComponentProps {
  children: React.ReactElement;
}

//
function ContextBoardComponent({ children }: ContextBoardComponentProps) {
  const { id_space } = useParams();

  const value = useBoard({ id_space: parseInt(id_space) });

  //
  return (
    <contextBoard.Provider value={value}>{children}</contextBoard.Provider>
  );
}

export default ContextBoardComponent;
