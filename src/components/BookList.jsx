import Book from './Book'

const BookList = (props) => (
  <div className="mb-3">
    {props.books.map((book) => (
      <Book
        key={book.id}
        book={book}
        changeBook={props.changeBook}
        bookSelected={props.bookSelected}
      />
    ))}
  </div>
)

export default BookList
