import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SiteNavigator from "./SiteNavigator";
import OrdersNavigator from "./OrdersNavigator";

export default initialRouteName =>
    createAppContainer(createSwitchNavigator(
    {
      Authentication: { screen: AuthNavigator },
      Main: { screen: DrawerNavigator },
      Site: { screen: SiteNavigator },
      Orders: {screen: OrdersNavigator},
    },
    {
      initialRouteName,
      headerMode: "none"
    }
  ));
