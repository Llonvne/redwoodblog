import {Form, FormError, Label, Submit, SubmitHandler, TextAreaField, TextField} from "@redwoodjs/forms";
import {TypedDocumentNode, useMutation} from "@redwoodjs/web";
import type {
  CreateCommentMutation,
  CreateCommentMutationVariables,
} from 'types/graphql'
import {toast} from "@redwoodjs/web/toast";
import {useState} from "react";
import {QUERY} from "src/components/CommentsCell/CommentsCell";

const CREATE: TypedDocumentNode<CreateCommentMutation, CreateCommentMutationVariables> = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createAt
    }
  }
`

interface FormValues {
  name: string
  body: string
}

interface Props {
  postId: number
}

const CommentForm = ({postId}: Props) => {

  const [hasPosted, setHasPosted] = useState(false)

  const [createComment, {loading, error}] = useMutation(CREATE, {
    onCompleted: () => {
      setHasPosted(true)
      toast.success('Comment posted successfully')
    },
    refetchQueries: [{query: QUERY, variables: {postId: postId}}],
  })

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createComment({variables: {input: {postId, ...input}}})
  }

  return (
    <div className={hasPosted ? 'hidden' : ''}>
      <h3 className="font-light text-lg text-gray-600">Leave a Comment</h3>
      <Form className="mt-4 w-full" onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />

        <Label
          name="name"
          className="block text-xs font-semibold text-gray-500 uppercase"
        >
          Name
        </Label>
        <TextField
          name="name"
          className="block w-full p-1 border rounded text-sm "
          validation={{required: true}}
        />

        <Label
          name="body"
          className="block mt-4 text-xs font-semibold text-gray-500 uppercase"
        >
          Comment
        </Label>
        <TextAreaField
          name="body"
          className="block w-full p-1 border rounded h-24 text-sm"
          validation={{required: true}}
        />

        <Submit
          disabled={loading}
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
