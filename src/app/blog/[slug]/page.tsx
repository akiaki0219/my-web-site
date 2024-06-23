import 'zenn-content-css';
import Link from 'next/link';
import {format, parseISO} from 'date-fns';
import {allPosts} from 'contentlayer/generated';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div>
      <article className="mx-auto w-4/5 py-8 znc">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
      <div>
        <h5 className="text-center text-xl">Back to Blog List:
          <button className="mx-2 px-2 py-2 mb-4 bg-sky-500 text-white rounded shadow-md">
            <Link className="px-2" href={'/blog'}>Blog List</Link>
          </button>
        </h5>
      </div>
    </div>

  )
}

export default PostLayout
