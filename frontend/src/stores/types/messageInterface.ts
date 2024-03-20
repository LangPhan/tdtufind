
export interface messageInterface {
  isOpenConversation: boolean,
  conversation: {id: string, name: string, avatar: string},
  conversationList: [],
  messageList: [],
  setIsOpenConversation: () => void,
  setConversationId: (id: string, name: string, avatar:string) => void,
  setConversationList: () => void,
  setMessageList: () => void,
  getLatestMessage: (id: string) => void,
  setNewConversation: (firstMember: {id: string, name: string, avatar: string}, secondMember:string) => void
}