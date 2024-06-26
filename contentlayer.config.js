import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {type: 'string', required: true},
    date: {type: 'date', required: true},
  },
  computedFields: {
    url: {type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}`},
  },
  contentType: 'markdown',
}))

export default makeSource({contentDirPath: 'posts', documentTypes: [Post]})
