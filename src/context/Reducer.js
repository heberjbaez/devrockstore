//TYPES

const GET_PRODUCTS = "GET_PRODUCTS";
const SET_CART = "SET_CART";
const DELETE_CART = "DELETE_CART";

export default function Reducer(state, action) {
  const { payload, type } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case SET_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.filter((item) => item.id === parseInt(payload)),
        ],
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item[0].id !== payload),
      };
  }
}
