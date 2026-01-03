import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Body from "./components/Body";

function App() {
  return <Provider store={appstore}><Body/></Provider>;
};

export default App;
