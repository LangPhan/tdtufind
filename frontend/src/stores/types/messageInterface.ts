
export interface messageInterface {
  isLoadingConversation: boolean;
  isOpenConversation: boolean,
  conversation: {id: string, name: string, avatar: string},
  conversationList: [],
  messageList: [],
  setIsOpenConversation: () => void,
  setConversationId: (id: string, name: string, avatar:string) => void,
  setConversationList: (id:string) => void,
  setMessageList: () => void,
  getLatestMessage: (message: any) => void,
  setNewConversation: (firstMember: {id: string, name: string, avatar: string}, secondMember:string) => void
}