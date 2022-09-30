import * as React from "react";

//
export const useHidden = () => {
  //
  const [hidden, setHidden] = React.useState(false);

  // -----

  const showSideBar = () => {
    setHidden(false);
  };

  const hideSideBar = () => {
    setHidden(true);
  };

  const toggleSideBar = () => {
    setHidden((hidden) => !hidden);
  };

  //

  return {
    hidden,
    showSideBar,
    hideSideBar,
    toggleSideBar,
  };
};
