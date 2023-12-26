import { CredentialResponse } from "@react-oauth/google"
import { NavigateFunction } from "react-router-dom"


export interface AuthInterface {
  isAuth: boolean,
  login: (res: CredentialResponse, navigate: NavigateFunction) => void
  checkToken: (token: String | null, navigate: NavigateFunction) => void,
  logout: (navigate: NavigateFunction) => void,
}