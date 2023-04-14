import { Route } from "react-router-dom/cjs/react-router-dom";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/favorite">
        <FavoritesPage />
      </Route>
      <Route path="/new">
        <NewMeetupsPage />
      </Route>
    </Layout>
  );
}

export default App;
