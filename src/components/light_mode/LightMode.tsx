import * as React from "react";

import SwitchBtn from "../switch_btn/SwitchBtn";

import "./LightMode.scss";

//
export interface LightModeProps {}

const initial_light_mode = (() => {
  const html = document.getElementsByTagName("html")[0];
  const theme = html.dataset.theme;

  return theme && theme === "2";
})();

//
function LightMode({}: LightModeProps) {
  //
  const [light_mode, setLightMode] = React.useState(initial_light_mode);

  //
  React.useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = light_mode ? "2" : "1";
  }, [light_mode]);

  // -----

  const toggleLightMode = () => {
    setLightMode((light_mode) => !light_mode);
  };

  //
  return (
    <div className="LightMode">
      <div className="flex-center">
        <div>Dark</div>

        <div className="LightMode_switch" onClick={toggleLightMode}>
          <SwitchBtn switch_on={light_mode} />
        </div>

        <div>Light</div>
      </div>
    </div>
  );
}

export default LightMode;
