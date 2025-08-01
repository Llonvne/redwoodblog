import type {CommentsQuery, CommentsQueryVariables} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from "src/components/Comment/Comment";

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> =
gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No comments yet</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<CommentsQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({
                          comments,
                        }: CellSuccessProps<CommentsQuery, CommentsQueryVariables>) => {
  return (
    <div className="space-y-8">
      {
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))
      }
    </div>
  )
}
