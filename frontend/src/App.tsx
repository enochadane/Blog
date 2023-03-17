import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import ArticlesPage from "./pages/ArticlesPage";
import AuthContext from "./store/auth-context";
import DashBoardPage from "./pages/DashBoardPage";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Layout>
        <Routes>
          {authContext.isLoggedIn && (
            <Route path="/" element={<DashBoardPage />} />
          )}
          {authContext.isLoggedIn && (
            <Route path="/articles" element={<ArticlesPage />} >
              <Route path="details" element={<DashBoardPage />}/>
            </Route>
          )}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
