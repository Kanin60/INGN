export const alleArtikler = `query MyQuery {
  andebyArticles {
    id
    dato
    description
    forfatter
    kategori
    title
    text {
      html
    }
    image {
      url
    }
    smallImage {
      url
    }
  }
}`