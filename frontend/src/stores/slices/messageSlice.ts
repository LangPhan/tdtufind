import instance from "@/utils/axiosConfig";
import { StateCreator } from "zustand";
import { messageInterface } from "../types/messageInterface";


//const conversationsRes = await instance.get('conversations')

const messageSlice: StateCreator<messageInterface> = (set, get) => ({
  isOpenConversation: false,
  conversation: {id: '', avatar: '', name: ''},
  conversationList: [],
  messageList: [],
  setIsOpenConversation: () => {
     set({isOpenConversation: !get().isOpenConversation})
  },
  setConversationId: async (id, name, avatar) => {
    set({conversation: {id: id, name: name, avatar: avatar }})
    if(id.length > 0){
      const res = await instance.get('messages/conversation/'+ id)
      set({messageList: res.data.data.messages})
    }
  },
  setConversationList: async (userId:string) => { 
    const res = await instance.get('conversations/user/'+userId)
    set({conversationList: res.data.data.conversations})
  },
  setMessageList: async () => {
    const res = await instance.get('messages/conversation/'+ get().conversation.id)
    set({messageList: res.data.data.messages})
  },
  getLatestMessage: async (id: string) => {
    await instance.get('messages/' + id)
    get().setMessageList();
  },
  setNewConversation: async (firstMember, secondMember) => {
    
    let firstMemberInfo = {
      id: '',
      name: '',
      avatar: ''
    }
    const messagedSet = new Set<string>()
    try {
      await get().setConversationList(secondMember)
      get().conversationList.forEach((conversation:any) => 
        conversation?.members.forEach((member:any) => {
          if(member._id === firstMember.id) {
            firstMemberInfo = {...firstMemberInfo, id: conversation._id, avatar: member.avatar, name: member.fullName}
          }  
          messagedSet.add(member._id)
        })) 
        console.log(messagedSet);
    } catch (error) {
      console.log(error)  
    }
      
    if(messagedSet.has(firstMember.id)){
      get().setConversationId(firstMemberInfo.id, firstMemberInfo.name, firstMemberInfo.avatar)
    }else{ const res = await instance.post('conversations',JSON.stringify( {members: [firstMember.id, secondMember]},), { headers: {
           "Content-Type": "application/json"
      }})
      const newConversationId = res.data.data._id
      get().setConversationId(newConversationId, firstMember.name, firstMember.avatar)
    }
  }
})

export default messageSlice;
