type Post  = {
  author: string,
  content: string,
  images: [string],
  timeLost: string,
  placement: string,
  type: string,
  isSomething: boolean,
  isFound: boolean
}

export interface PostInterface {
  elementPosts: Post[],
  personPosts: Post[],
  searchPosts: Post[],
  fetchPosts: () => void,
  queryPosts: (query: string) => void,
  createNewPost: (newPost: any) => void
}