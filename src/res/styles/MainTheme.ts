import { DefaultTheme, Theme } from "react-native-paper";
import colors  from "./colors";

const theme: Theme = {
  ...DefaultTheme,
  roundness: 4,
  dark: false,
  colors: {
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.backgroundColor,
    text: colors.textColor,
    disabled: '#cecece',
    backdrop: '#cecece',
    error: "red",
    placeholder: "#cecece",
    surface: "#F5F5F5",

  },
  fonts: {
    regular: "Roboto",
    light: "Roboto Light",
    medium: "Roboto Medium",
    thin: "Roboto Thin",
  },
};

export default theme;
