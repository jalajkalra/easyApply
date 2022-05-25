export const Image = async(file)=>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lh9xa7g2");
    const response = await fetch(`https://api.cloudinary.com/v1_1/ddzheuii2/auto/upload`, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data["url"];
}

export const RegisterCompany = async(data)=>{
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/registration',{
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
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/postAd',{
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
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/updateProfile',{
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

export const GetJobsPosted = async()=>{
    const token = localStorage.getItem('companyToken');
    const bearer = 'Bearer '+ token;
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/getPostedJobs',{
        method:'get',
        headers:{
            'Authorization':bearer,
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}

export const GetJobs = async()=>{
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/getJobs',{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}

export const GetCompanies = async()=>{
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/getCompanies',{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}

export const GetCompaniesById = async(id)=>{
    const response = await fetch(`https://easyapply-jobs-internship.herokuapp.com/company/getCompanies/${id}`,{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}


export const GetLatestJobs = async(data)=>{
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/getLatestJobs',{
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
    const response = await fetch('https://easyapply-jobs-internship.herokuapp.com/company/getJobById',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}

export const CheckIfApplied = async(id)=>{
    const token = localStorage.getItem('token');
    const bearer = 'Bearer '+ token;
    const response = await fetch(`https://easyapply-jobs-internship.herokuapp.com/user/check/${id}`,{
        method:'get',
        headers:{
            'Authorization':bearer,
            'Content-Type':'application/json'
        }
    })
    const json = await response.json();
    return json;
}

export const ApplyForCompany = async(data)=>{
    const token = localStorage.getItem('token');
    const bearer = 'Bearer '+ token;
    const response = await fetch(`https://easyapply-jobs-internship.herokuapp.com/job/apply`,{
        method:'post',
        headers:{
            'Authorization':bearer,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const json = await response.json();
    return json.message==="success"?true:false;
}