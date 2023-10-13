   export const enArtikel = `query MyQuery ($artikelId : ID) {
    andebyArticle(where: {id: $artikelId}) {
      id
      dato
      forfatter
      title
      text {
        html
      }
      image {
        url
      }
    }
  }
  `