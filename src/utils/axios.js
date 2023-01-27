import axios from 'axios'

const apiKey = "k_7hy954ha";
const baseURL=`https://imdb-api.com/en`;
const  config = {
  
    headers:{
        Authorization:`Bearer ${""}`,
        "Content-Type":"application/json"
    }
}

export const searchAll = async (searchParam)=>{
    try {
       const res =  await axios.get(`${baseURL}/API/SearchTitle/${apiKey}/${searchParam}`,config)
       return res.data
    } catch (error) {
        return error.message
    }
}

export const getData = async (expression)=>{
    try {
        const res = await axios.get(`${baseURL}/API/SearchAll/${apiKey}/${expression}`,config)
        return res.data
    } catch (error) {
        return error.message
    }  
}

export const getAllInfo = async (id)=>{
    try {
        const res = await axios.get(`${baseURL}/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings`,config)
        return res.data
    } catch (error) {
        return error.message
    }  
}

export const apiPopular = async (id)=>{
    try {
        const res = await axios.get(`${baseURL}/API/MostPopularMovies/${apiKey}`)
        return res.data
    } catch (error) {
        return error.message
    }  
}


export const fetchData = async(url)=>{
    try {
        const res = await axios.get(`${baseURL}/${url}/${apiKey}`)
        localStorage.setItem('series',JSON.stringify(res.data.items))
        return res.data
    } catch (error) {
        return error.message
    }  
}

export const getSeries = async(url)=>{
    try {
        const res = await axios.get(`${baseURL}/API/SearchSeries/${apiKey}/${url}`)
        // localStorage.setItem('series',JSON.stringify(res.data.items))
        return res.data
    } catch (error) {
        return error.message
    }  
}

// https://imdb-api.com/en/API/MostPopularMovies/k_pq8cc1n7