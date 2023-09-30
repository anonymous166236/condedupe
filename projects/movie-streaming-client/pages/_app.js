import "../scss/main.scss";
import LayoutView from "../views/layout";

function App({ Component, pageProps }) {
  return (
    <LayoutView>
      <Component {...pageProps} />
    </LayoutView>
  );
}

export default App;
