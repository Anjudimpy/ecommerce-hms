//isloginedIn

export const isLoginedIn =()=>{
    let data =localStorage.getItem("data");
    if (data == null){
        return false;
    }else{
        return true;
    }
};



//dologin=>set to localstorage

export const doLogin=(data, next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
}

//dologout= remove from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}
//get currentUser

export const getCurrentUserDetail=()=>{
    if(isLoginedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return undefined;
    }
};

export const getToken=()=>{

    if(isLoginedIn()){
        return JSON.parse(localStorage.getItem("data")).token
    }else{
        return null;
    }
}