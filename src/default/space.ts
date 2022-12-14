import { Space } from "../types";

//
export const DEFAULT_ARR_SPACE: Space[] = [
  {
    id: 1,
    name: "Space 1",
    boards: [
      {
        id: 1,
        name: "Board 1",
        columns: [
          {
            id: 1,
            name: "Column 1",
            cards: [
              {
                id: 1,
                title:
                  "Card 1.1 as das asd asd adad a dasdadsaadaasadas as das",
                description:
                  "Description of Card 1.1 asd asd asdasd asd asd asd asd adadadadas",
                subtasks: [
                  {
                    id: 1,
                    description: "adsad asd as as as asd as a",
                    done: false,
                  },
                ],
              },
              {
                id: 2,
                title: "Card 1.2",
                subtasks: [
                  {
                    id: 2,
                    description: "2131 312 3 12 312341 312 12jk",
                    done: true,
                  },
                ],
                description: "Description of Card 1.2",
              },
            ],
          },
          {
            id: 2,
            name: "Column 2",
            cards: [
              {
                id: 3,
                title: "Card 2.1",
                subtasks: [],
                description: "Description of Card 2.1",
              },
              {
                id: 4,
                title: "Card 2.2",
                subtasks: [],
                description: "Description of Card 2.2",
              },
            ],
          },
          {
            id: 3,
            name: "Column 3",
            cards: [
              {
                id: 5,
                title: "Card 3.1",
                subtasks: [],
                description: "Description of Card 3.2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Board 2",
        columns: [
          {
            id: 4,
            name: "Column 1",
            cards: [
              {
                id: 6,
                title: "Card 1.1",
                subtasks: [],
                description: "Description of Card 1.1",
              },
              {
                id: 7,
                title: "Card 1.2",
                subtasks: [],
                description:
                  "Description of Card 1.2 asdsadas as asd asd sad ad ad asd as asd assda ",
              },
            ],
          },
          {
            id: 5,
            name: "Column 2",
            cards: [
              {
                id: 8,
                title: "Card 2.1",
                subtasks: [],
                description:
                  "Description of Card 2.1 asd sad asd asd sa da ad asd as d",
              },
              {
                id: 9,
                title: "Card 2.2",
                subtasks: [],
                description: "Description of Card 2.2",
              },
              {
                id: 10,
                title: "Card 2.3",
                subtasks: [],
                description: "Description of Card 2.3",
              },
            ],
          },
        ],
      },
    ],
  },
];
