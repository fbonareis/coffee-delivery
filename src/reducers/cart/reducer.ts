import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartItem {
  productId: string
  quantity: number
  name: string
  image?: string
  price: number
}

export interface CartSummary {
  quantityTotal: number
  subTotal: number
}

export interface CartState {
  items: CartItem[]
  summary: CartSummary
}

const calculateCartSummary = (items: CartItem[]) => {
  return items.reduce(
    (summary, item) => {
      summary.quantityTotal += item.quantity
      summary.subTotal += item.quantity * item.price
      return summary
    },
    { quantityTotal: 0, subTotal: 0 },
  )
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const cartItemIndex = state.items.findIndex(
          (item) => item.productId === action.payload.item.productId,
        )

        if (cartItemIndex !== -1) {
          return
        }

        draft.items.push(action.payload.item)
        draft.summary = calculateCartSummary(draft.items)
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const cartItemIndex = state.items.findIndex(
          (item) => item.productId === action.payload.item.productId,
        )

        if (cartItemIndex === -1) {
          return
        }

        draft.items.splice(cartItemIndex, 1)
        draft.summary = calculateCartSummary(draft.items)
      })
    }

    case ActionTypes.UPDATE_CART_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const cartItemIndex = state.items.findIndex(
          (item) => item.productId === action.payload.item.productId,
        )

        if (cartItemIndex === -1) {
          return
        }

        draft.items[cartItemIndex].quantity = action.payload.item.quantity
        draft.summary = calculateCartSummary(draft.items)
      })
    }

    default:
      return state
  }
}
