import * as React from "react";

import { IS_MOBILE } from "./constant";
import "./styles/styles.scss";

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
    <div className="App">
      <div className="App_contain"></div>
    </div>
  );
}

export default App;
