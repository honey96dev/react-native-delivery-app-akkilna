import { createStackNavigator } from "react-navigation";

import Orders from "../component/Orders/Orders";
import OrdersPlaced from "../component/Orders/OrderPlaced";
import OrderDetailed from "../component/Orders/OrderDetailed";
import MapsView from "../component/Orders/MapsView";
import Message from "../component/Orders/Message";
import Delivered from "../component/Orders/Delivered"
import Cancelled from "../component/Orders/Cancelled"

export default createStackNavigator(
  {
    Orders: { screen: Orders },
    OrdersPlaced: { screen: OrdersPlaced },
    OrderDetailed: { screen: OrderDetailed },
    Message: {screen: Message},
    MapsView: { screen: MapsView },
    Delivered: { screen: Delivered },
    Cancelled: { screen: Cancelled },


  },
  {
    headerMode: "none"
  }
);
