import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
// utilizzo useState per salvare localmente il valore dell'input
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// useSelector serve per LEGGERE un valore dallo store!

const CartIndicator = () => {
  const navigate = useNavigate()
  // utilizzo useState per salvare localmente il valore dell'input
  const [inputValue, setInputValue] = useState('')

  // devo ottenere la funzione dispatch
  const dispatch = useDispatch()

  // useSelector è un hook, segue le regole degli hooks
  const cartLength = useSelector((state) => {
    return state.cart.content.length
  })

  const username = useSelector((state) => {
    return state.user.name
  })

  return (
    <div className="d-flex justify-content-end my-4">
      {username ? (
        <div className="d-flex align-items-center">
          <span className="me-2">Benvenuto, {username}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </div>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(
              'invio in una action il valore dello username',
              inputValue
            )
            // invochiamo un action creator che invierà al reducer il contenuto dell'input
            dispatch(setUsernameAction(inputValue))
          }}
          className="d-flex"
        >
          <Form.Control
            type="text"
            placeholder="Mario"
            value={inputValue}
            // mi salvo comunque in uno stato locale il valore dell'input
            // SEMPRE input CONTROLLATI in REACT!
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
