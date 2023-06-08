import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  fetchProductsAction,
  removeFromCartAction,
  updateCartItemAction,
  updateProductQuantityAction,
} from '../reducers/actions'
import { CartItem, Product, productsReducer } from '../reducers/reducer'

interface AppContextType {
  products: Product[]
  cart: {
    items: CartItem[]
    summary: {
      quantityTotal: number
    }
  }
  fetchProducts: () => void
  updateQuantity: (productId: string, quantity: number) => void
}

export const AppContext = createContext({} as AppContextType)

interface AppContextProviderProps {
  children: ReactNode
}

const initialState = {
  products: [],
  cart: {
    items: [],
    summary: {
      quantityTotal: 0,
    },
  },
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, initialState)

  const { products, cart } = productsState

  function fetchProducts() {
    dispatch(fetchProductsAction())
  }

  function updateQuantity(productId: string, quantity: number) {
    dispatch(updateProductQuantityAction({ productId, quantity }))

    if (quantity < 1) {
      dispatch(removeFromCartAction(productId))
      return
    }

    dispatch(updateCartItemAction({ productId, quantity }))
  }

  return (
    <AppContext.Provider
      value={{ products, cart, fetchProducts, updateQuantity }}
    >
      {children}
    </AppContext.Provider>
  )
}
