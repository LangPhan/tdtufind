import { create } from "zustand";
import { AuthInterface } from "../stores/types/authInterface";
import authSlice from "../stores/slices/authSlice";
import postSlice from "@/stores/slices/postSlice";
import messageSlice from "@/stores/slices/messageSlice";
import { PostInterface } from "@/stores/types/PostInterface";
import { messageInterface } from "@/stores/types/messageInterface";

const useStore = create<AuthInterface & PostInterface & messageInterface>()((...a) => ({
  ...authSlice(...a),
  ...postSlice(...a),
  ...messageSlice(...a)
}))

export default useStore;