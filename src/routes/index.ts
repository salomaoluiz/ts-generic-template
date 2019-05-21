import { createBottomTabNavigator } from "react-navigation";
import { colors } from "res/styles";
import HomeScreen from "screens/home";

const Navigator = createBottomTabNavigator(
  {
    CalculatorStack: {
      screen: HomeScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primaryDark,
    },
  },
);

export default Navigator;
