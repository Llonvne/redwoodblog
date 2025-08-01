export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    createAt: DateTime
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
    createAt: DateTime
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`
