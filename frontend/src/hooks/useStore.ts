import { create } from "zustand";
import { AuthInterface } from "../stores/types/authInterface";
import authSlice from "../stores/slices/authSlice";

const useStore = create<AuthInterface>()((...a) => ({
  ...authSlice(...a)
}))

export default useStore;