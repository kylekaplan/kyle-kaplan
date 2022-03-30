import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";

const ThemeSwitcherBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log('colorMode', colorMode);

  return (
    <Button onClick={toggleColorMode} size="lg" borderRadius="full" aria-label="toggle-theme">
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};
export default ThemeSwitcherBtn;
