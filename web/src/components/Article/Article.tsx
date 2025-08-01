import type {Post} from 'types/graphql'

import {Link, routes} from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'
import CommentForm from "src/components/CommentForm/CommentForm";

const truncate = (text: String, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text
}

interface Props {
  article: Omit<Post, 'createAt'>
  summary?: boolean
}

const Article = ({article, summary = false}: Props) => {
  return (
    <article className="mt-10">
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({id: article.id})}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 20) : article.body}
      </div>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id}/>
          <div className="mt-12">
            <CommentsCell postId={article.id}/>
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
