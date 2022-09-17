import AppNavigator from "./components/navigation";
import { init } from "./db";
import { Provider } from "react-redux";
import store from "./store/index";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("initializing db failed.", err);
  });
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
