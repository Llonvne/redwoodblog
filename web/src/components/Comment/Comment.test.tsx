import {render} from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Comment comment={{
        name: "This is a name",
        createAt: '2020-01-01T12:34:56Z',
        body: 'This is the first comment!',
      }}/>)
    }).not.toThrow()
  })
})
