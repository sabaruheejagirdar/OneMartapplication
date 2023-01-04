import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { LogContext } from "./context";
import AppRoute from "./routes/AppRoute";
import { isUserLoggedIn, login } from "./services/loginService";
import { store } from "./state/store";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());

  useEffect(() => {
    login("admin", "password", true);
  }, []);

  return (
    <div className="App">
      <LogContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </LogContext.Provider>
    </div>
  );
}

export default App;
