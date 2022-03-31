import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/poppins"

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "white")(props),
      bg: mode("gray.50", "black")(props),
    },
  }),
};

const theme = {
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    primary: "#845EC2",
    secondary: "#FF6F91",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
  styles,
}

export default extendTheme(theme)
