import axios from 'axios'
import { FETCH_CURRENT_USER } from '../Redux/Action/type';
import * as localStorage from '../Services/localStorage'
const { token } = localStorage.getFromLocalStorage()
class UserService {

    addUser(user) {
        return axios({
            url: `https://udemyproject-49572.firebaseio.com/users.json?auth=${token}`,
            method: 'POST',
            data: JSON.stringify(user)
        })
    }

    fetchUser(userId) {
        return async dispatch => {
            const response = await axios({
                url: `https://udemyproject-49572.firebaseio.com/users.json`,
                method: 'GET'
            })

            // if (!response.ok) {
            //     const errorResData = await response.json();
            //     const errorId = errorResData.error.message;
            //     let message = 'Something went wrong!';
            //     if (errorId === 'EMAIL_NOT_FOUND') {
            //         message = 'This email could not be found!'
            //     } else if (errorId === 'INVALID_PASSWORD') {
            //         message = 'This password is not valid!'
            //     }
            //     throw new Error(message);
            // }

            const resData = response.data;
            for (const key in resData) {
                if (resData[key].userId === userId) {

                    dispatch({ type: FETCH_CURRENT_USER, payload: resData[key], id: key })
                }
            }

        }

    }
}


export default new UserService();