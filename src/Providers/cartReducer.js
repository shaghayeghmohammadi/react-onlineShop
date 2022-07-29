const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const Cart = [...state.cart];
      const cartItemIndex = Cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex < 0) {
        Cart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...Cart[cartItemIndex] };
        updatedItem.quantity++;
        Cart[cartItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: Cart,
        total: state.total + action.payload.price,
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
