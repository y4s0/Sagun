import axios from "axios";

export const GET_CUSTOMER = 'GET_CUSTOMER';
export const GET_DETAIL = "GET_DETAIL";

const API_URL = 'https://607a90abbd56a60017ba2c5e.mockapi.io/Customer';
const BASE_URL = `${API_URL}`;

export const getCustomer = () => {
    try {
        return async dispatch => {
            const response = await axios.get(`${BASE_URL}`)
            if(response.data) {
                dispatch({
                    type: GET_CUSTOMER,
                    payload: response.data
                });
            } else {
                console.log('Unable to fetch');
            }
        }
        
    } catch (error) {
        
    }
}

export const getDetail = (userId) => {
    try {
        return async dispatch => {
            const response = await axios.get("https://607a90abbd56a60017ba2c5e.mockapi.io/Customer/" + userId)
            if(response.data) {
                dispatch({
                    type: GET_DETAIL,
                    payload: response.data
                });
            } else {
                console.log("Unable to fetch");
            }
        }
    } catch (error) {

    }
}