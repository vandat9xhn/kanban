export interface Space {
  id: number;
  name: string;
  boards: Board[];
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
