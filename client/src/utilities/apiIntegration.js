export const RegisterCompany = async(data)=>{
    const response = await fetch('company/registration',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export const PostJob = async(data)=>{
    const token = localStorage.getItem('companyToken');
    const bearer = 'Bearer '+ token;
    const response = await fetch('company/postAd',{
        method:'post',
        headers:{
            'Authorization':bearer,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export const UpdateProfile = async(data)=>{
    const token = localStorage.getItem('companyToken');
    const bearer = 'Bearer '+ token;
    const response = await fetch('company/updateProfile',{
        method:'post',
        headers:{
            'Authorization':bearer,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export const GetJobs = async()=>{
    const response = await fetch('company/getJobs',{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}

export const GetLatestJobs = async(data)=>{
    const response = await fetch('company/getLatestJobs',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export const GetJobById = async(data)=>{
    const response = await fetch('company/getJobById',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}