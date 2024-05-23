import "react-native-gesture-handler";
import Navigator from "./Navigator";
import { UserProvider } from "./apps/Context/UserContext";
import { ModalPortal } from "react-native-modals";
export default function App() {
  return (
    <>
      <UserProvider>
        <Navigator />
        <ModalPortal />
      </UserProvider>
    </>
  );
}
