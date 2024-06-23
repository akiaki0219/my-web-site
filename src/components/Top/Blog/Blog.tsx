import Link from 'next/link'
import {compareDesc} from 'date-fns'
import {allPosts} from 'contentlayer/generated'
import PostCard from './components/PostCard'

function Blog() {
  const latestPost = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))[0]

  return (
    <div className="text-center pb-2">
      <h1 className="text-2xl font-medium ">Latest Blog</h1>
      <PostCard key={latestPost._id} {...latestPost} />
      <h5 className="text-center text-xl">More Blogs:
        <button className="mx-2 px-2 py-2 mb-4 bg-sky-500 text-white rounded shadow-md">
          <Link className="px-2" href={'/blog'}>Blog List</Link>
        </button>
      </h5>
    </div>
  )
}

export default Blog;
