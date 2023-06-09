import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addItemToCartAction,
  removeItemFromCartAction,
  updateCartItemQuantityAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer, CartState } from '../reducers/cart/reducer'

interface AppContextType {
  cart: CartState
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (item: CartItem) => void
  updateCartItemQuantity: (item: CartItem) => void
}

export const AppContext = createContext({} as AppContextType)

interface AppContextProviderProps {
  children: ReactNode
}

const initialState: CartState = {
  items: [],
  summary: {
    quantityTotal: 0,
    subTotal: 0,
  },
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    (state) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return state
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const addItemToCart = (item: CartItem) => {
    dispatch(addItemToCartAction(item))
  }

  const removeItemFromCart = (item: CartItem) => {
    dispatch(removeItemFromCartAction(item))
  }

  const updateCartItemQuantity = (item: CartItem) => {
    dispatch(updateCartItemQuantityAction(item))
  }

  return (
    <AppContext.Provider
      value={{
        cart: cartState,
        addItemToCart,
        removeItemFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
