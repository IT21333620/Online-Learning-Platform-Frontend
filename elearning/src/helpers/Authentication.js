import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import Loader from "../layout/Loader";

const Authentication = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized) {
      if (!keycloak.authenticated) {
        keycloak.login();
      } else {
        // Save the token in local storage
        localStorage.setItem("keycloakToken", keycloak.token);

        keycloak.onAuthError = () => {
          keycloak.logout();
        };

        keycloak.onTokenExpired = () => {
          keycloak
            .updateToken(300)
            .then((refreshed) => {
              if (refreshed) {
                localStorage.setItem("keycloakToken", keycloak.token);
              }
            })
            .catch(() => {
              keycloak.logout();
            });
        };

        keycloak.onAuthLogout = () => {
          keycloak.login();
        };
      }
    }
  }, [initialized, keycloak]);

  return keycloak.authenticated ? children : <Loader />;
};

export default Authentication;
