import axios from "axios";

const url = 'https://63ea4e753363c87003668530.mockapi.io/moviesLibrary'

const allCategoryMoviesService = {
    
    getAllCategories() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

    getCategoryMovies(id){
        return axios.get(url + `/${id}/movies` )
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
    }

}

export default allCategoryMoviesService