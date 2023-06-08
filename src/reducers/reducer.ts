import { produce } from 'immer'

import coffeeItems from '../data/coffee-items.json'
import { ActionTypes } from './actions'

export interface Product {
  id: string
  name: string
  description: string
  tags: string[]
  image?: string
  quantity: number
  price: number
}

export interface CartItem {
  productId: string
  quantity: number
  name: string
  image?: string
}

export interface ProductsState {
  products: Product[]
  cart: {
    items: CartItem[]
    summary: {
      quantityTotal: number
    }
  }
}

export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS: {
      return produce(state, (draft) => {
        draft.products = coffeeItems
      })
    }

    case ActionTypes.UPDATE_CART_ITEM: {
      return produce(state, (draft) => {
        const foundProduct = state.products.find(
          (product) => product.id === action.payload.productId,
        )

        if (!foundProduct) {
          return
        }

        const cartItemIndex = state.cart.items.findIndex(
          (item) => item.productId === action.payload.productId,
        )

        if (cartItemIndex !== -1) {
          draft.cart.items[cartItemIndex].quantity = action.payload.quantity
        } else {
          draft.cart.items.push({
            productId: action.payload.productId,
            name: foundProduct.name,
            image: foundProduct.image,
            quantity: action.payload.quantity,
          })
        }

        draft.cart.summary.quantityTotal = draft.cart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        )
      })
    }

    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      return produce(state, (draft) => {
        if (action.payload.quantity < 0) {
          return
        }

        const productIndex = draft.products.findIndex(
          (product) => product.id === action.payload.productId,
        )

        if (productIndex === -1) {
          return
        }

        draft.products[productIndex].quantity = action.payload.quantity
      })
    }

    case ActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        const cartItemIndex = draft.cart.items.findIndex(
          (item) => item.productId === action.payload.productId,
        )

        if (cartItemIndex !== -1) {
          draft.cart.items.splice(cartItemIndex, 1)
        }

        draft.cart.summary.quantityTotal = draft.cart.items.reduce(
          (total, item) => total + item.quantity,
          0,
        )
      })
    }

    default:
      return state
  }
}
