import { myAxios } from "./helper";
export const loadAllCategories=()=>{
    return myAxios.get(`/categories/`).then(response=>{return response.data})
}

export const loadAllChennai=()=>{
    return myAxios.get(`/chennai/`).then(response=>{return response.data})
}

export const loadAllKancheepuram=()=>{
    return myAxios.get(`/kancheepuram/`).then(response=>{return response.data})
}