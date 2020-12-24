export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
// Redwood will automatically import and map #resolvers
// from the corresponding services file onto your SDL

// In this example, Redwood will look in api/src/services/posts/posts.js
// for the following five #resolvers:
// posts()
// post({id})
// createPost({input})
// updatePost({id, input})
// deletePost({id})

// You don't have to make each function in your service
// available via GraphQL—leave it out of your Query and
// Mutation types and it won't exist as far as GraphQL
// is concerned.