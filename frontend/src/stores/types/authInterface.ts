import { CredentialResponse } from "@react-oauth/google"
import { NavigateFunction } from "react-router-dom"

type User = {
  id: string,
  fullName: string,
  email: string,
  avatar: string,
  roles: string[],
}

export interface AuthInterface {
  isAuth: boolean,
  user: User | null,
  login: (res: CredentialResponse, navigate: NavigateFunction) => void
  checkToken: (token: String | null, navigate: NavigateFunction) => void,
  removeToken: (navigate: NavigateFunction) => void,
  logout: (navigate: NavigateFunction) => void,
}