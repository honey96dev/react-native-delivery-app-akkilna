import { createStackNavigator } from "react-navigation";

import Notifaction from "../component/common/Notification";
import EditAddress from "../component/Products/EditAddress";
import ManageAddress from "../component/Products/ManageAddress";
import EditProfile from "../component/AccountScreen/EditProfile";
import ChangePassword from "../component/AccountScreen/ChangePassword";


export default createStackNavigator(
  {
    Notify: { screen: Notifaction },
    EditProfile: { screen: EditProfile},
    ChangePassword: { screen: ChangePassword},
    EditAddress: { screen: EditAddress},
    ManageAddress: { screen: ManageAddress},
  },
  {
    headerMode: "none"
  }
);
