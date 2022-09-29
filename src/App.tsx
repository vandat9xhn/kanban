import * as React from "react";

import { IS_MOBILE } from "./constant";
import "./styles/styles.scss";

import pc from "../design/pc.jpg";
import mb from "../design/mb.jpg";
import view_task from "../design/view_task.jpg";
import new_task from "../design/new_task.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpacesPg from "./pages/spaces/SpacesPg";
import BoardPg from "./pages/board/BoardPg";

//
export interface AppProps {}

//
function App({}: AppProps) {
  //
  React.useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "1";

    if (IS_MOBILE) {
      html.classList.add("device-mobile");
    }
  }, []);

  //
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/space/:id_space" element={<BoardPg />} />

          <Route path="" element={<SpacesPg />} />
        </Routes>

        <div className="display-none">
          <img style={{ width: "100%" }} src={pc} alt="" />
          <img style={{ width: "100%" }} src={mb} alt="" />
          <img style={{ width: "100%" }} src={new_task} alt="" />
          <img style={{ width: "100%" }} src={view_task} alt="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
