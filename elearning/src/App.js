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
import PaymentInterface from "./components/PaymentInterface";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentCencel from "./components/PaymentCancel";

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
            <Route path="/charge" element={<PaymentInterface />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-cancel" element={<PaymentCencel />} />
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
