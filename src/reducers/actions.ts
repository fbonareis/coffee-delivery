export enum ActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  UPDATE_CART_ITEM = 'UPDATE_CART_ITEM',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function fetchProductsAction() {
  return {
    type: ActionTypes.FETCH_PRODUCTS,
  }
}

type UpdateProductQuantityType = {
  productId: string
  quantity: number
}

export const updateProductQuantityAction = (
  data: UpdateProductQuantityType,
) => ({
  type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
  payload: {
    ...data,
  },
})

export function removeFromCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  }
}

type UpdateCartItemType = {
  productId: string
  quantity: number
}

export const updateCartItemAction = (data: UpdateCartItemType) => ({
  type: ActionTypes.UPDATE_CART_ITEM,
  payload: {
    ...data,
  },
})
