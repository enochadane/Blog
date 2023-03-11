import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import ArticlesPage from "./pages/ArticlesPage";
import AuthContext from "./store/auth-context";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Layout>
        <Routes>
          {authContext.isLoggedIn && (
            <Route path="/articles" element={<ArticlesPage />} />
          )}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;