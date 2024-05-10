import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import NavigationLayout from "./layout/navigationLayout";
import keycloak from "./utils/Keycloak";
import Authentication from "./helpers/Authentication";

function App() {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Authentication>
                  <NavigationLayout />
                </Authentication>
              }
            />
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
