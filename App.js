import "react-native-gesture-handler";
import Navigator from "./Navigator";
import { UserProvider } from "./apps/Context/UserContext";
import { UserDataProvider } from "./apps/Context/UserDataContext";
import { ModalPortal } from "react-native-modals";
export default function App() {
  return (
    <>
      <UserProvider>
        <UserDataProvider>
          <Navigator />
          <ModalPortal />
        </UserDataProvider>
      </UserProvider>
    </>
  );
}
