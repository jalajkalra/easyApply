import * as actionType from '../actionType';

export const Login = (data,type)=>{
    return async dispatch=>{
        dispatch(loginInit())
        try{
            const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/login',{
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
              });
            const json = await response.json();
            if(json.message!=="success"){
                dispatch(Logout())
            }else{
                const companyExpirationDate = new Date(new Date().getTime() + 10*60*60*1000)
                const expirationTime = 10*60*60*1000;
                localStorage.setItem('companyExpirationDate',companyExpirationDate);
                localStorage.setItem('companyToken',json.token);
                dispatch(checkAuthTimeout(expirationTime));
                dispatch(loginSuccess(json.data))
            }
        }catch(err){dispatch(Logout())}
    }
}

export const Logout = ()=>{
    console.log("Logout");
    return  dispatch=>{
        dispatch({
            type:actionType.COMPANY_LOGOUT_INIT
        })
        try{
            localStorage.removeItem('companyToken');
            localStorage.removeItem('companyExpirationDate');
            dispatch({
                type:actionType.COMPANY_LOGOUT_SUCCESS,
            })
        }catch(err){
            dispatch({
                type:actionType.COMPANY_AUTH_FAIL,
                payload:err
            })
        }
    }
}

export const loginInit = ()=>{
    return {
        type:actionType.COMPANY_AUTH_INIT
    }
}

export const loginSuccess = (data)=>{
    return {
        type:actionType.COMPANY_AUTH_SUCCESS,
        payload:data
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(Logout());
        }, expirationTime);
    };
};


export const checkAuthState = ()=>{
    return async dispatch=>{
        const token = localStorage.getItem('companyToken');
        console.log("1");
        if(!token){
            console.log("2");
            dispatch(Logout())
        }else{
            const companyExpirationDate = localStorage.getItem('companyExpirationDate');
            console.log("3");
            if(companyExpirationDate<=new Date()){
                console.log("4");
                dispatch(Logout());
            }else{
                const bearer = 'Bearer '+ token;
                dispatch(loginInit())
                const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/checkAuthState',{
                    method:'get',
                    headers:{
                        'Authorization':bearer,
                        'Content-Type':'application/json'
                    }
                });
                const json = await response.json();
                if(json.message == "success"){
                    console.log("5")
                    dispatch(checkAuthTimeout(new Date(companyExpirationDate).getTime() - new Date().getTime()));
                    dispatch(loginSuccess(json.data))
                }else{
                    console.log("6")
                    dispatch(Logout())
                }
            }
        }
    }
}