export type funcVoid = () => void;

//

export interface Space {
  id: number;
  name: string;
  boards: Board[];
}

export interface SpaceInfo {
  id: number;
  name: string;
  boards: { id: number; name: string }[];
}

export interface Board {
  id: number;
  name: string;
  columns: Column[];
}

export interface Column {
  id: number;
  name: string;
  cards: Card[];
}

export interface Card {
  id: number;
  title: string;
  description: string;
  subtasks: Subtask[];
}

export interface Subtask {
  id: number;
  description: string;
  done: boolean;
}

// ---

export interface useBoardState {
  space_info: SpaceInfo;
  boards: { [id: number]: Board };
  id_board: number;

  fetched: boolean;
  fetching: boolean;
}

// ---

export type handleDndType = ({
  id_source,
  ix_source_card,
  id_des,
  ix_des_card,
}: {
  id_source: number;
  ix_source_card: number;
  id_des: number;
  ix_des_card: number;
}) => void;

//
export interface AddTaskState {
  title: string;
  description: string;
  status_task: string;
  subtasks: Subtask[];
}

export type changeSubtaskDescriptionType = (
  ix: number,
  description: string
) => void;
export type deleteSubtaskType = (ix: number) => void;

export type handleCreateCardType = (props: AddTaskState) => void;
