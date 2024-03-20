export interface messageInterface {
  isOpenConversation: boolean,
  conversationId: string,
  setIsOpenConversation: () => void,
  setConversationId: (id: string) => void,
}