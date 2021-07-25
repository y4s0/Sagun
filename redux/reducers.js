import { GET_CUSTOMER, GET_DETAIL } from "./actions";

const initialState = {
    customerList: [],
    customerDetail: {}
}

function customerReducer( state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMER:
            return {...state, customerList: action.payload};
        case GET_DETAIL:
            return {...state, customerDetail: action.payload};
        default:
            return state
    }
}

export default customerReducer