import {Link, routes} from '@redwoodjs/router'

import {useAuth} from 'src/auth'
import {Toaster} from "@redwoodjs/web/toast";

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({children}: BlogLayoutProps) => {
  const {isAuthenticated, currentUser, logOut} = useAuth()
  return (
    <>
      <Toaster></Toaster>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Home</Link>
          </h1>
          {isAuthenticated ? (
            <>
              <div>
                <span>Logged in as {currentUser.email}</span>{' '}
                <button type="button" onClick={logOut}>
                  logOut
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to={routes.login()}>Login</Link>{' '}
            </>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default BlogLayout
