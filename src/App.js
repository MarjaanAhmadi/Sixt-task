import "./App.scss";
import { Provider } from "react-redux";
import { sixtStore } from "./stores/store";
import Theme from "./common/theme";
import MainPage from "./screens/mainpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={sixtStore}>
      <Theme>
        <div className="App">
          <MainPage />
          <ToastContainer />
        </div>
      </Theme>
    </Provider>
  );
}

export default App;
