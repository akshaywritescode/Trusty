/*
    This hook is used to toggle the visibility of the password field.

    usage: const [isVisible, toggleVisibility] = usePasswordVisibilty(false);

*/

type UsePasswordVisibilty = [boolean, () => void];

import { useState } from "react";

export const usePasswordVisibilty = (
  defaultState: boolean
): UsePasswordVisibilty => {
  const [isVisible, setIsVisible] = useState(defaultState);

  const toggleVisibility = () => {
    setIsVisible((prev: boolean) => !prev);
  };

  return [isVisible, toggleVisibility];
};
