export const kategorier = `query MyQuery ($kategori : String) {
    andebyArticles(where: {kategori_contains: $kategori}) {
      id
      dato
      description
      forfatter
      title
      image {
        url
      }
    }
  }`