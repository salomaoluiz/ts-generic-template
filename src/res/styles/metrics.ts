import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default {
  base: 16,
  small: 8,
  doubleBase: 32,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  baseRadius: 4,
  elevationBase: 8,
};
