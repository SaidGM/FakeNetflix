import  axios  from "axios"

const url = 'https://63ea1eb13363c87003620d7f.mockapi.io/movies'

const allMoviesService = {
    
    getAllMovies() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getMovieDetails(id){
        return axios.get(url + `/${id}` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },
    
    getIsFavorite(){
        return axios.get(url + `?isFavorite=true` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    toggleIsFavorite(id, data){
        return axios.put(url + `/${id}`, data )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    },

    // putMovieEdit(id, data){
    //     return axios.put(url + `/${id}` )
    //     .then((res)=>res.data)
    //     .catch((err)=>console.log(err))
    // }

    deleteMovie(id){
        return axios.delete(url + `/${id}`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    }
}

export default allMoviesService