export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';


export const addToCart = (course) => {
    return {
        type: ADD_TO_CART,
        course: course
    }
}


export const deleteFromCart = (id, price) => {
    return {
        type: DELETE_FROM_CART,
        id: id,
        price: price
    }
}