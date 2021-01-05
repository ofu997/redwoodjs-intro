import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

/*export const Success = props => {
  return JSON.stringify(props.posts)
  // this also works: return <h4>{JSON.stringify(props.posts)}</h4>
}*/

// export const Success = ({ posts }) => {
//   return posts.map((post) => (
//     <article key={post.id}>
//       <header>
//         <h2>
//           <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
//         </h2>
//       </header>
//       <p>{post.body}</p>
//       <div>Posted at: {post.createdAt}</div>
//     </article>
//   ))
// }

export const Success = ({ posts }) => {
  return posts.map((post) => <BlogPost key={post.id} post={post} />)
}

// memo: #Cells provide a simpler and more declarative approach to data fetching
// Redwood will perform the QUERY and display the Loading component until a response is received.
// Once the query returns, it will display one of three states:
// If there was an error, the Failure component
// If the data return is empty (null or empty array), the Empty component
// Otherwise, the Success component
// The minimum you need for a cell are the QUERY and Success exports. If you don't export an
// Empty component, empty results will be sent to your Success component. If you don't provide
// a Failure component, you'll get error output sent to the console.

// #cli yarn rw g cell BlogPosts creates:
// A new file at /web/src/components/BlogPostsCell/BlogPostsCell.js
// (and a test file) with some boilerplate to get you started:
// export const QUERY = gql`
//   query BlogPostsQuery {
//     blogPosts {
//       id
//     }
//   }
// ` ... ...
// Must match query name for our existing Posts SDL (src/graphql/posts.sdl.js
