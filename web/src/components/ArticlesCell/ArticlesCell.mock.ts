// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      __typename: 'Post' as const,
      id: 42,
      body: "awdjlkawjd awkldkaw;ldkasw;ldkalsmxcal;skdasl;d"
      , title: "a title",
      createAt: ""
    },
    {
      __typename: 'Post' as const,
      id: 43,
      body: "awdjlkawjd awkldkaw;ldkasw;ldkalsmxcal;skdasl;d"
      , title: "a title",
      createAt: ""
    },
    {
      __typename: 'Post' as const,
      id: 44,
      body: "awdjlkawjd awkldkaw;ldkasw;ldkalsmxcal;skdasl;d"
      , title: "a title",
      createAt: ""
    },
  ],
})
