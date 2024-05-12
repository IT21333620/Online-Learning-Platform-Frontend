import { useKeycloak } from "@react-keycloak/web";
import { useLocation } from "react-router";

export const useUserID = () => {
  const { keycloak } = useKeycloak();
  const userID = keycloak?.tokenParsed?.sub;

  return userID;
};

export const useCurrentRoute = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return currentRoute;
};

export const useCurrentQueryParams = (paramID) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return queryParams.get(paramID);
};

export const useUserRole = () => {
  const { keycloak } = useKeycloak();
  const roles = keycloak?.tokenParsed?.realm_access?.roles || [];

  if (roles.includes("admin")) {
    return "admin";
  } else if (roles.includes("course-instructor")) {
    return "course-instructor";
  } else if (roles.includes("learner")) {
    return "learner";
  }
};

export const useUserName = () => {
  const { keycloak } = useKeycloak();
  const userName = keycloak?.tokenParsed?.name;

  return userName;
};
