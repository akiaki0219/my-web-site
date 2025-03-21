import Link from 'next/link'
import {compareDesc, format, parseISO} from 'date-fns'
import {allPosts, Post} from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-4xl py-4">Blog List</h1>
      <div>
        {posts.map((post, idx) => (<PostCard key={idx} {...post} />))}        
      </div>
    </div>
  )
}

export default Blog;
