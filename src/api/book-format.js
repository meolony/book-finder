const formatBook = (bookItem) => {
  const { id, volumeInfo } = bookItem;
  const { title, subtitle, authors, description, imageLinks, categories, publishedDate } =
    volumeInfo;

  const year = publishedDate ? publishedDate.split('-')[0] : '';
  const img = imageLinks ? imageLinks.smallThumbnail : '';
  const largeImg = imageLinks ? imageLinks.thumbnail : '';
  return {
    id,
    title,
    subtitle,
    authors,
    year,
    description,
    img,
    largeImg,
    categories,
  };
};
function formatSearch(bookList) {
  return bookList.items.map(formatBook);
}
export { formatBook, formatSearch };