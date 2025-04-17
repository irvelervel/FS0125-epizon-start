import Book from './Book'
import { useSelector } from 'react-redux'

const BookList = (props) => {
  const books = useSelector((state) => {
    return state.shop.available
  })

  return (
    <div className="mb-3">
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          changeBook={props.changeBook}
          bookSelected={props.bookSelected}
        />
      ))}
    </div>
  )
}

export default BookList
