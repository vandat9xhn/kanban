import { useBool } from "./useBool";

//
export const useHidden = (initial_hidden = false) => {
  //
  const { is_true, setBoolFalse, setBoolTrue, toggleBool } =
    useBool(initial_hidden);

  // -----

  const showSideBar = setBoolFalse;
  const hideSideBar = setBoolTrue;
  const toggleSideBar = toggleBool;

  //

  return {
    hidden: is_true,
    showSideBar,
    hideSideBar,
    toggleSideBar,
  };
};
