import "tailwindcss/tailwind.css";
import styles from "../styles/globals.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import modalsReducer from "../Reducers/modalsReducer";
import { AuthProvider } from "../Context/AuthContext";

const store = createStore(modalsReducer);
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
