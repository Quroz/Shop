import "react-native-gesture-handler";
import Navigator from "./Navigator";
import { UserProvider } from "./apps/Context/UserContext";

export default function App() {
  return (
    <>
      <UserProvider>
        <Navigator />
      </UserProvider>
    </>
  );
}
