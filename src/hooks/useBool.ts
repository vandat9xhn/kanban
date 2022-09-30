import * as React from "react";

//
export const useBool = (initial_bool = false) => {
  //
  const [is_true, setIsTrue] = React.useState(initial_bool);

  // -----

  const setBoolTrue = () => {
    setIsTrue(true);
  };

  const setBoolFalse = () => {
    setIsTrue(false);
  };

  const toggleBool = () => {
    setIsTrue((is_true) => !is_true);
  };

  //

  return {
    is_true,
    setBoolFalse,
    setBoolTrue,
    toggleBool,
  };
};
