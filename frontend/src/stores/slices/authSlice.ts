import { StateCreator } from "zustand";
import { AuthInterface } from "../types/authInterface";
import { toast } from "react-toastify";

const authSlice: StateCreator<AuthInterface> = (set, get) => ({
  isAuth: false,
  user: null,
  login: async (res, navigate) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: res.credential,
          }),
        }
      );
      const info = await response.json();
      localStorage.setItem("token", info.data.token);
      get().checkToken(info.data.token, navigate)
      toast.success("Đăng nhập thành công");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  },
  checkToken: async (token, navigate) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}auth`, {
        headers: {
          'authorization': `${token}`
        }
      });
      if (response.status === 401) {
        return navigate("/login");
      }
      const info = await response.json()
      set({ isAuth: true, user: { id: info.data?.id, email: info.data?.email, avatar: info.data?.avatar, fullName: info.data?.fullName, roles: info.data.roles } });
    } catch (err) {
      console.log(err);
      get().removeToken(navigate)
    }
  },
  removeToken: (navigate) => {
    set({
      isAuth: false, user: null
    });
    localStorage.removeItem('token');
    navigate("/login");
  },
  logout: (navigate) => {
    get().removeToken(navigate)
    toast.warn('Đăng xuất thành công');
  }
});

export default authSlice;