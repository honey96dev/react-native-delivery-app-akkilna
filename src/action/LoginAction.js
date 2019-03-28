import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "../../src/utils";
import {fetch, POST} from "../../src/apis";

export const loginUser = ({email, password}) => {
    return async dispatch => {
        dispatch({
            type: LOGIN
        });
        let parameters = {email, password};
        fetch(POST, "users/login", parameters)
            .then(response => {
                console.log(response);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token: response.token
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {
                        message: err
                    }
                });
            });
    };
};
