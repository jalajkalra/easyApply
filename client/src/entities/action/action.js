import * as actionType from '../actionType';

export const Login = (data,type)=>{
    return async dispatch=>{
        dispatch(loginInit())
        try{
            console.log(data);
            let url = '';
            if(type=="1"){
                url = 'https://easyapply-jobs-internship.herokuapp.com/user/login';
            }else{
                url = 'https://easyapply-jobs-internship.herokuapp.com/user/registration'
            }
            const response = await fetch(url,{
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
                const expirationDate = new Date(new Date().getTime() + 10*60*60*1000)
                const expirationTime = 10*60*60*1000;
                localStorage.setItem('expirationDate',expirationDate);
                localStorage.setItem('token',json.token);
                dispatch(checkAuthTimeout(expirationTime));
                dispatch(loginSuccess(json.data))
            }
        }catch(err){dispatch(Logout())}
    }
}

export const Logout = ()=>{
    return  dispatch=>{
        dispatch({
            type:actionType.LOGOUT_INIT
        })
        try{
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            dispatch({
                type:actionType.LOGOUT_SUCCESS,
            })
        }catch(err){
            dispatch({
                type:actionType.AUTH_FAIL,
                payload:err
            })
        }
    }
}

export const loginInit = ()=>{
    return {
        type:actionType.AUTH_INIT
    }
}

export const loginSuccess = (data)=>{
    return {
        type:actionType.AUTH_SUCCESS,
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
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(Logout())
        }else{
            const expirationDate = localStorage.getItem('expirationDate');
            if(expirationDate<=new Date()){
                dispatch(Logout());
            }else{
                const bearer = 'Bearer '+ token;
                dispatch(loginInit())
                const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/user/checkAuthState',{
                    method:'get',
                    headers:{
                        'Authorization':bearer,
                        'Content-Type':'application/json'
                    }
                });
                const json = await response.json();
                if(json.message == "success"){
                    dispatch(checkAuthTimeout(new Date(expirationDate).getTime() - new Date().getTime()));
                    dispatch(loginSuccess(json.data))
                }else{
                    dispatch(Logout())
                }
            }
        }
    }
}