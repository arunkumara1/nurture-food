export const initialState = {
    user: null,
    cart:[],
    subTotal:'0',
    searchItems:{}
}

export const actionTypes = {
    SET_USER: "SET_USER",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    ADD_TO_CART_QUANTITY: "ADD_TO_CART_QUANTITY",
    SERACH_ITEMS:"SERACH_ITEMS"

}

//selector
export const getSubTotal = (cart) => cart.reduce((amount,car) => amount + car.price , 0);


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.cart],
                subTotal: action.subTotal
            };
        case actionTypes.ADD_TO_CART_QUANTITY:
            return {
                ...state,
                cart: action.cart,
                subTotal: action.subTotal
            };
        case actionTypes.SERACH_ITEMS:
            return {
                ...state,
                searchItems: action.items
            }
        default:
            return state;
    }
}

export default reducer;