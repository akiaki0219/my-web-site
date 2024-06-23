import Link from 'next/link'
import {format, parseISO} from 'date-fns'
import {Post} from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="my-2">
      <h2 className="text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default PostCard;
