import "tailwindcss/tailwind.css";
import styles from "../styles/globals.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import modalsReducer from "../Reducers/modalsReducer";

const store = createStore(modalsReducer);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
