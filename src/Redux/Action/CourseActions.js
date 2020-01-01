import Course from '../../models/Course'
import * as localStorage from '../../Services/localStorage'
import { DELETE_FROM_CART } from './CartAction'
export const ADD_COURSE = 'ADD_COURSE'
export const DELETE_COURSE = 'DELETE_COURSE'

export const addCourse = (title, price, imageUrl, videoIntro, description, category) => {
    return async dispatch => {
        const { userId, token } = localStorage.getFromLocalStorage();

        const response = await fetch(`https://udemyproject-49572.firebaseio.com/products.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                price,
                imageUrl,
                videoIntro,
                description,
                category,
                owner: userId
            })
        })

        if (!response.ok) {
            throw new Error('Something went wrong')
        }

        const resData = await response.json();

        const course = new Course(resData.name, title, price, imageUrl, videoIntro, description, userId, category);
        console.log(course);
        dispatch({ type: ADD_COURSE, payload: course })
    }
}

export const deleteCourse = (id) => {
    return async dispatch => {
        alert('dang delete')
        const { userId, token } = localStorage.getFromLocalStorage();
        const response = await fetch(`https://udemyproject-49572.firebaseio.com/products/${id}.json?auth=${token}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const resData = await response.json();

        dispatch({ type: DELETE_COURSE, payload: id })

    }
}