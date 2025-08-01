import Article from './Article'

const article = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put
              a bird on it enamel pin post-ironic vape cred
              DIY. Street art next level umami squid.
              Hammock hexagon glossier 8-bit banjo. Neutra
              la croix mixtape echo park four loko semiotics
              kitsch forage chambray. Semiotics salvia
              selfies jianbing hella shaman. Letterpress
  `
}

export const full = () => {
  return <Article article={article}></Article>
}

export const summary = () => {
  return <Article article={article} summary={true}></Article>
}

export default {title: 'Components/Article'}
