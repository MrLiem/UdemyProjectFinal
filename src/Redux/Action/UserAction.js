import * as localStorage from '../../Services/localStorage'

export const EDIT_USER = 'EDIT_USER';

export const editUser = (id, name, imageUrl, phone) => {
    return async dispatch => {
        const { userId, token } = localStorage.getFromLocalStorage();
        const response = await fetch(`https://udemyproject-49572.firebaseio.com/users/${id}.json?auth=${token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                imageUrl,
                phone

            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        const resData = await response.json();


    }
}