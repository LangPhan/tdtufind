import { create } from "zustand";
import { AuthInterface } from "../stores/types/authInterface";
import authSlice from "../stores/slices/authSlice";
import postSlice from "@/stores/slices/postSlice";
import { PostInterface } from "@/stores/types/PostInterface";

const useStore = create<AuthInterface & PostInterface>()((...a) => ({
  ...authSlice(...a),
  ...postSlice(...a)
}))

export default useStore;