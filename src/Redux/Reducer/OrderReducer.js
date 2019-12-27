import Order from '../../models/Order'
import { SET_ORDERS, ADD_ORDER } from '../Action/OrderAction'

import * as localStorage from '../../Services/localStorage'

const initialState = {
    orders: [],
    orderedCoures: []
}

const Orders = (state = initialState, action) => {
    const userId = localStorage.getFromLocalStorage().userId;
    switch (action.type) {
        case SET_ORDERS:
            const updateOrderedCourses = [];
            action.orders.map(order => {
                order.courses.map(course => {
                    updateOrderedCourses.push(course);
                })
            })
            return {
                ...state,
                orders: action.orders,
                orderedCoures: updateOrderedCourses
            }
        case ADD_ORDER:
            const newOrder = new Order(
                action.orderData.id,
                action.orderData.courses,
                action.orderData.amount,
                action.orderData.date
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }
    return state;
}

export default Orders