import { StateCreator } from "zustand";
import { messageInterface } from "../types/messageInterface";


const messageSlice: StateCreator<messageInterface> = (set, get) => ({
  isOpenConversation: false,
  conversationId: "",
  setIsOpenConversation: () => {
     set({isOpenConversation: !get().isOpenConversation})
  },
  setConversationId: (id) => {
    set({conversationId: id})
  }
})

export default messageSlice;
