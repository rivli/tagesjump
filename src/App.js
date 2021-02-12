import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "./fonts/style.css";
import Header from "./components/Layout/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
