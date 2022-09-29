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
}

// ---

export type handleChangeBoardType = (ix_board: number) => void;
