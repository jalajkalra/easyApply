import * as actionType from '../actionType';

const INITIAL_STATE = {
    isLoggedIn:false,
    isLoading:false,
    error:false,
    apiResponse:null
}

const reducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.COMPANY_AUTH_INIT:
            return{...state,isLoading:true}
        case actionType.COMPANY_AUTH_SUCCESS:
            return{...state,isLoading:false,isLoggedIn:true,apiResponse:action.payload}
        case actionType.COMPANY_AUTH_FAIL:
            return{...state,isLoading:false,isLoggedIn:false}
        case actionType.COMPANY_LOGOUT_INIT:
            return{...state,isLoading:true}
        case actionType.COMPANY_LOGOUT_SUCCESS:
            return{...state,isLoading:false,isLoggedIn:false,apiResponse:null}
        default:
            return state
    }
}
export default reducer;