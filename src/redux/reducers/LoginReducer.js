import {actionTypes} from '../actions/LoginAction';

const defaultState = {
    isAuth: false
};

export default function (state = defaultState, {type = '', payload = {}}) {
    const {isAuth} = payload;
    switch (type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isAuth,
            };
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                isAuth,
            };

        default:
            return state;
    }
}