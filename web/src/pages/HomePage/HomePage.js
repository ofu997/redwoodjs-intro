import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  const blogpostscell = <BlogPostsCell/>
  return <BlogLayout children={blogpostscell} / >
}

export default HomePage
