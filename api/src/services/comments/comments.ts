import type {CommentRelationResolvers} from 'types/graphql'

import {db} from 'src/lib/db'
import {Prisma} from "@prisma/client";

export const comments = ({
                           postId
                         }: Required<Pick<Prisma.CommentWhereInput, `postId`>>) => {
  return db.comment.findMany({
    where: {postId},
  })
}

// export const comment: QueryResolvers['comment'] = ({id}) => {
//   return db.comment.findUnique({
//     where: {id},
//   })
// }

export const Comment: CommentRelationResolvers = {
  post: (_obj, {root}) => {
    return db.comment.findUnique({where: {id: root?.id}}).post()
  },
}

interface CreateCommentArgs {
  input: Prisma.CommentCreateInput
}

export const createComment = ({input}: CreateCommentArgs) => {
  return db.comment.create({data: input})
}

export const deleteComment = ({id}: Prisma.CommentWhereUniqueInput) => {
  return db.comment.delete({where: {id}})
}
