import type {ArticlesQuery, ArticlesQueryVariables} from 'types/graphql'

import {Link, routes} from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> =
gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createAt
    }
  }
`

export const Loading = () => <div className="p-4 text-center text-gray-500">Loading...</div>

export const Empty = () => <div className="p-4 text-center text-gray-500">No articles found</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<ArticlesQueryVariables>) => (
  <div className="p-4 text-red-500 bg-red-50 rounded">Error: {error?.message}</div>
)

export const Success = ({
                          articles,
                        }: CellSuccessProps<ArticlesQuery, ArticlesQueryVariables>) => {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <Article key={article.id} article={article} summary={true}></Article>
      ))}
    </div>
  )
}
