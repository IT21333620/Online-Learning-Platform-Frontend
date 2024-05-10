import Keycloak from "keycloak-js";

const KeycloakURL = process.env.REACT_APP_KEYCLOAK_URL
const KeycloakRealm = process.env.REACT_APP_KEYCLOAK_REALM
const KeycloakClientID = process.env.REACT_APP_KEYCLOAK_CLIENT_ID

const keycloak = new Keycloak({
    url: KeycloakURL,
    realm: KeycloakRealm,
    clientId: KeycloakClientID
  })

export default keycloak;