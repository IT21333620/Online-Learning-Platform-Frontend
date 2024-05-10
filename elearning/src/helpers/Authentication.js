import React, { useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import Loader from '../layout/Loader'

const Authentication = ({ children }) => {
    const { keycloak, initialized } = useKeycloak()
  
    useEffect(() => {
      if (initialized) {
        if (!keycloak.authenticated) {
          keycloak.login()
        } else {
          keycloak.onAuthError = () => {
            keycloak.logout()
          }
  
          keycloak.onTokenExpired = () => {
            keycloak.updateToken(300).catch(() => {
              keycloak.logout()
            })
          }
  
          keycloak.onAuthLogout = () => {
            keycloak.login()
          }
        }
      }
    }, [keycloak, initialized])
  
    return keycloak.authenticated ? children : <Loader />
  }
  
  export default Authentication