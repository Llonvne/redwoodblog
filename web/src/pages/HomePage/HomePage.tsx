import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      Home
      <ArticlesCell></ArticlesCell>
    </>
  )
}

export default HomePage
