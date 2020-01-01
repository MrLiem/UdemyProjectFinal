import Order from '../../models/Order';
import * as localStorage from '../../Services/localStorage'
export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export const fetchOrders = () => {
    return async(dispatch) => {
        const user = localStorage.getFromLocalStorage();
        try {
            const response = await fetch(`https://udemyproject-49572.firebaseio.com/orders/${user.userId}.json`);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            const loadedOrders = [];

            for (const key in resData) {
                loadedOrders.push(
                    new Order(key, resData[key].courses, resData[key].totalAmount, new Date(resData[key].date))
                )
            }
            dispatch({ type: SET_ORDERS, orders: loadedOrders });
        } catch (err) {
            throw err
        }

    }
}


export const addOrder = (courses, totalAmount) => {
    // console.log(courses);
    // dispatch tu redux-thunk
    return async(dispatch, getState) => {
        const token = localStorage.getFromLocalStorage().token;
        const userId = localStorage.getFromLocalStorage().userId;
        console.log(token, userId)
        const date = new Date();
        // any async code you want!
        // fetch from default react-native
        const response = await fetch(`https://udemyproject-49572.firebaseio.com/orders/${userId}.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courses,
                totalAmount,
                date: date.toISOString()
            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        const resData = await response.json();
        dispatch({
            type: ADD_ORDER,
            orderData: { id: resData.name, courses: courses, amount: totalAmount, date: date }
        });
    }
};