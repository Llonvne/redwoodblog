import type { FindPostById, FindPostByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Post from 'src/components/Post/Post'

export const QUERY: TypedDocumentNode<FindPostById, FindPostByIdVariables> =
  gql`
    query FindPostById($id: Int!) {
      post: post(id: $id) {
        id
        title
        body
        createAt
      }
    }
  `

export const Loading = () => <div className="p-4 text-center text-gray-500">Loading...</div>

export const Empty = () => <div className="p-4 text-center text-gray-500">Post not found</div>

export const Failure = ({ error }: CellFailureProps<FindPostByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  post,
}: CellSuccessProps<FindPostById, FindPostByIdVariables>) => {
  return <Post post={post} />
}
