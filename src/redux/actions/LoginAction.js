export const actionTypes = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT'
};


export const userLogin = isAuth => ({
    type: actionTypes.USER_LOGIN,
    payload: {
        isAuth,
    }
});
export const userLogout = isAuth => ({
    type: actionTypes.USER_LOGOUT,
    payload: {
        isAuth,
    }
});


