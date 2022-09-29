import * as React from "react";

import { useBoardReturn } from "../../hooks/useBoard";

// 
export const contextBoard = React.createContext<useBoardReturn>(null)