import { StateCreator } from "zustand";
import { AuthInterface } from "../types/authInterface";
import { toast } from "react-toastify";

const authSlice: StateCreator<AuthInterface> = (set, get) => ({
  isAuth: false,
  login: (res, navigate) => {
    fetch(
      `${import.meta.env
        .VITE_API_URL
      }auth`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          credential:
            res.credential,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        set({ isAuth: true })
        localStorage.setItem(
          "token",
          data.data.token
        )
        toast.success(
          "Đăng nhập thành công"
        );
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  },
  checkToken: (token, navigate) => {
    fetch(`${import.meta.env
      .VITE_API_URL
      }auth`, {
      headers: {
        'authorization': `${token}`
      }
    })
      .then((res) => {
        if (res.status === 401) {
          return navigate("/login")
        }
        set({ isAuth: true })
      })
      .catch((err: any) => {
        console.log(err);
      })
  },
  logout: (navigate) => {
    set({
      isAuth: false
    })
    localStorage.removeItem('token')
    toast.success('Đăng xuất thành công')
    navigate("/login")
  }
})



export default authSlice;