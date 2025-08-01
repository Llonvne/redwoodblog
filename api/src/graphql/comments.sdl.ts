export const schema = gql`
  type Comment {
    id: Int!
    name: String!
    body: String!
    post: Post!
    postId: Int!
    createAt: DateTime!
  }

  type Query {
    comments(postId:Int!): [Comment!]! @skipAuth
  }

  input CreateCommentInput {
    name: String!
    body: String!
    postId: Int!
    createAt: DateTime
  }

  input UpdateCommentInput {
    name: String
    body: String
    postId: Int
    createAt: DateTime
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
