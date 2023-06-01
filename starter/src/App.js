import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'
import ModalSlice from './features/modal/modalSlice'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      {isOpen && <ModalSlice />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
