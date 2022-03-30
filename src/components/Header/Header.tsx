import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn/ThemeSwitcherBtn";

export const Header = () => {
  return (
    <Flex p={4}>
      <Spacer />
      <ThemeSwitcherBtn />
    </Flex>
  );
};
