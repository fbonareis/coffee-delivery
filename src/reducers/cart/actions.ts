import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY',
}

export const addItemToCartAction = (item: CartItem) => ({
  type: ActionTypes.ADD_ITEM_TO_CART,
  payload: {
    item,
  },
})

export function removeItemFromCartAction(item: CartItem) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item,
    },
  }
}

export function updateCartItemQuantityAction(item: CartItem) {
  return {
    type: ActionTypes.UPDATE_CART_ITEM_QUANTITY,
    payload: {
      item,
    },
  }
}
